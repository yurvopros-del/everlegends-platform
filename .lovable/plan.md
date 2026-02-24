

# Cinematic Hero Banner Overhaul

## Problem

The current hero uses `AnimatePresence mode="wait"` which fully removes the outgoing image before mounting the incoming one, causing a black flash. Images fade from `opacity: 0` against a dark `bg-background` div, making the loading state feel broken.

## Solution

A complete rewrite of the animation system to eliminate black frames, add cinematic blur-to-sharp reveals, ambient breathing motion, staggered content entrance, cross-depth slide transitions, and a subtle light sweep effect.

---

## Changes (all in `src/components/HeroSection.tsx`)

### 1. Eliminate Black Loading State

- Replace `bg-background` on the container with a branded gradient placeholder that's always visible:
  ```
  bg-gradient-to-br from-[hsl(240,6%,6%)] via-[hsl(217,20%,12%)] to-[hsl(260,15%,10%)]
  ```
- Preload the next slide's image using a hidden `<link rel="preload">` or `new Image()` in a `useEffect` so transitions never wait for network.

### 2. Cinematic Image Reveal (blur-to-sharp + scale)

Replace the current simple opacity fade with a multi-property entrance:

- **Initial state**: `opacity: 0.3`, `scale: 1.05`, `filter: blur(12px) brightness(0.45)`
- **Animate to**: `opacity: 1`, `scale: 1.0`, `filter: blur(0px) brightness(0.45)`
- **Duration**: 800ms, ease-out
- Image is partially visible immediately (opacity 0.3, not 0) -- no black flash. The blur hides loading artifacts while the image sharpens into view.

### 3. Ambient Breathing Motion

After the reveal completes, the image should gently "breathe":

- Add a CSS keyframe animation `hero-breathe` that cycles `scale(1) -> scale(1.015) -> scale(1)` over 15 seconds
- Applied to the image after its entrance animation completes (via framer-motion `onAnimationComplete` or by using a separate wrapper with CSS animation)
- Extremely subtle -- purely atmospheric.

### 4. Staggered Content Entrance

Replace the current simultaneous text appearance with orchestrated timing per slide change:

| Element | Delay after image starts | Animation |
|---------|------------------------|-----------|
| Background image | 0ms | blur-to-sharp reveal |
| Headline | 120ms | fade up (y: 15 to 0), 500ms |
| Tagline | 370ms (120+250) | fade up (y: 10 to 0), 450ms |
| CTA button | 520ms (120+400) | fade up (y: 10 to 0), 400ms |

The CTA button must re-animate with each slide change (currently it only animates on mount). Move it inside the `AnimatePresence` keyed block.

### 5. Cross-Depth Slide Transition

Replace `AnimatePresence mode="wait"` with `mode="sync"` (or remove mode) so both outgoing and incoming images coexist during transition:

- **Outgoing image**: `opacity: 1 -> 0`, `scale: 1 -> 0.97` (subtle zoom-out), `filter: blur(0) -> blur(4px)`, duration 900ms
- **Incoming image**: `opacity: 0.3 -> 1`, `scale: 1.05 -> 1.0`, `filter: blur(12px) -> blur(0px)`, duration 900ms
- Both images are `position: absolute` and stack via z-index -- incoming image renders on top.
- This creates a parallax depth effect: old image recedes while new one advances.

### 6. Subtle Light Sweep Effect

Add a pseudo-element overlay that creates a diagonal light sweep across the hero:

- A separate `motion.div` with a diagonal linear gradient (`transparent -> white/5% -> transparent`) positioned to sweep from left to right
- Animates `translateX(-100%) -> translateX(100%)` over 1.5s
- Triggers every 10 seconds via a `useEffect` interval that toggles a state, causing the sweep to replay
- Opacity capped at 5-8% so it reads as a subtle highlight, not a flash

### 7. Image Preloading

Add a `useEffect` that preloads the next slide's image:

```typescript
useEffect(() => {
  const nextIndex = (currentSlide + 1) % SLIDES.length;
  const img = new Image();
  img.src = SLIDES[nextIndex].image;
}, [currentSlide]);
```

This ensures transitions are never delayed by network loading.

---

## Technical Details

### CSS Addition (`src/index.css`)

Add the breathing keyframe:

```css
@keyframes hero-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.015); }
}
```

### HeroSection.tsx Structure

```text
<section> (h-screen, overflow-hidden)
  |
  +-- Branded gradient placeholder (always visible, never black)
  |
  +-- <AnimatePresence> (NO mode="wait" -- both images coexist)
  |     +-- <motion.div> key={slide} (absolute, full-size)
  |           +-- <img> with breathing animation class
  |           +-- exit: scale 0.97, blur 4px, opacity 0
  |           +-- enter: scale 1.05->1, blur 12px->0, opacity 0.3->1
  |
  +-- Gradient overlays (bottom + sides)
  |
  +-- Light sweep overlay (motion.div, periodic diagonal highlight)
  |
  +-- <AnimatePresence mode="wait">
  |     +-- <motion.div> key={slide} (text content)
  |           +-- Headline (delay 0.12s)
  |           +-- Tagline (delay 0.37s)
  |           +-- CTA button (delay 0.52s) -- moved inside keyed block
  |
  +-- Dot indicators
```

### Key Framer Motion Config

**Image entrance:**
```js
initial: { opacity: 0.3, scale: 1.05, filter: "blur(12px) brightness(0.45)" }
animate: { opacity: 1, scale: 1, filter: "blur(0px) brightness(0.45)" }
exit: { opacity: 0, scale: 0.97, filter: "blur(4px) brightness(0.45)" }
transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
```

**Text stagger:**
```js
// Headline
initial: { opacity: 0, y: 15 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, delay: 0.12 }

// Tagline
transition: { duration: 0.45, delay: 0.37 }

// CTA
transition: { duration: 0.4, delay: 0.52 }
```

### Files Changed

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Complete animation rewrite: cross-depth transitions, blur reveal, breathing motion, staggered content, light sweep, image preloading |
| `src/index.css` | Add `@keyframes hero-breathe` for ambient scale animation |

