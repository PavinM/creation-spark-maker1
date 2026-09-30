<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep catalogue, collection, gallery, and process content in `src/lib/content.ts` so a future CMS can replace the data without redesigning views.
- Keep shared public-site presentation in `src/components/site.tsx` so all routes use one navigation, footer, motion, card, hero, CTA, and form system.
- Drive shared reveal and media movement from normalized viewport scroll progress so motion reverses naturally and remains consistent across routes.
