# Scroll-linked motion and homepage video

## What will change
- Replace the homepage’s main still image with a short, silent, looping manufacturing film based on the existing visual direction.
- Convert shared reveal effects from one-way entrance animations to scroll-linked motion that advances and reverses with the page position.
- Add scroll-driven image movement and depth to key homepage and manufacturing sections without changing their content or navigation.
- Keep controls and text readable, reduce motion automatically for visitors who request it, and simplify effects on smaller screens.

## Technical details
- Generate a 16:9 manufacturing clip from the existing factory image and use it as the homepage background with an image fallback.
- Add a shared scroll-motion wrapper driven by `requestAnimationFrame`, element position, and CSS custom properties; scrolling upward naturally reverses the transforms.
- Reuse the shared motion system across existing `Reveal`, `PageHero`, process, image, and content-band views rather than adding page-specific animation code.
- Verify desktop, tablet, and mobile scrolling, video playback, navigation, runtime errors, and the final build.
