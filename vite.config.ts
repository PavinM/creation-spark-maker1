// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv, type Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

// Load server-side secrets from .env / .env.local into Node process.env (never exposed to client bundle).
const serverEnv = loadEnv(process.env["NODE_ENV"] || "development", process.cwd(), "");
for (const [key, value] of Object.entries(serverEnv)) {
  if (process.env[key] === undefined) {
    process.env[key] = value;
  }
}

/**
 * Fixes a known bug with rolldown/vite preload-helper where Rolldown appends a 32-character
 * hash to the __VITE_PRELOAD__ marker (e.g. __VITE_PRELOAD__<32hex>), but Vite's import analysis
 * only slices out the 16-character __VITE_PRELOAD__ prefix, leaving a dangling 32-hex string
 * immediately after __vite__mapDeps(...) or [], which crashes browser JS parsing with:
 * "Uncaught SyntaxError: missing ) after argument list".
 */
function fixRolldownPreloadPlugin(): Plugin {
  function sanitize(code: string): string {
    return code
      .replace(/(__vite__mapDeps\([^)]*\))[a-f0-9]{32}/g, "$1")
      .replace(/(\[\])[a-f0-9]{32}/g, "$1");
  }

  function cleanDir(dirPath: string) {
    if (!fs.existsSync(dirPath)) return;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        cleanDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".js")) {
        const original = fs.readFileSync(fullPath, "utf8");
        const cleaned = sanitize(original);
        if (cleaned !== original) {
          fs.writeFileSync(fullPath, cleaned, "utf8");
        }
      }
    }
  }

  return {
    name: "fix-rolldown-preload-markers",
    enforce: "post",
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === "chunk" && typeof file.code === "string") {
          file.code = sanitize(file.code);
        }
      }
    },
    closeBundle() {
      // Also clean output directories on disk
      cleanDir(path.resolve(process.cwd(), ".output"));
      cleanDir(path.resolve(process.cwd(), ".vercel"));
      cleanDir(path.resolve(process.cwd(), "dist"));
    },
  };
}

export default defineConfig({
  plugins: [fixRolldownPreloadPlugin()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(process.env["VERCEL"] ? { nitro: { preset: "vercel" } } : {}),
});
