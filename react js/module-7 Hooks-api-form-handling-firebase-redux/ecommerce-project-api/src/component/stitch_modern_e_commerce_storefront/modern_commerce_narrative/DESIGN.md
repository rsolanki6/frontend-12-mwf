---
name: Modern Commerce Narrative
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
  max_width: 1280px
---

## Brand & Style

This design system is built on the principles of **Modern Corporate** design, emphasizing reliability, clarity, and a premium shopping experience. The brand personality is professional and authoritative yet accessible, targeting a discerning consumer who values efficiency and aesthetic harmony. 

The visual direction utilizes a "Soft Minimalism" approach—prioritizing heavy whitespace to reduce cognitive load and using high-quality typography to establish a clear information hierarchy. Smooth transitions and subtle micro-interactions provide a sense of high-end craftsmanship, ensuring the interface feels responsive and alive without being distracting.

## Colors

The palette is anchored by a sophisticated **Deep Navy** (#0F172A), used for primary navigation, headings, and high-impact UI elements to project stability. The secondary color is a **Vibrant Teal** (#0D9488), reserved for primary Call-to-Action (CTA) elements and success states, providing a refreshing contrast to the dark navy.

A **Bright Orange** (#F97316) serves as a tertiary accent, used sparingly for promotional banners, "New" badges, or discount highlights. Neutral tones are pulled from the slate and gray scales, using a very light off-white (#F8FAFC) for backgrounds to maintain a clean, airy feel that allows product photography to take center stage.

## Typography

This design system exclusively employs **Inter**, a typeface designed for screens, to ensure maximum legibility across all devices. The typographic scale is generous, with tight letter-spacing on larger headlines to create a compact, modern feel, and increased line heights for body copy to facilitate effortless reading. 

Weight is used strategically: SemiBold and Bold for structural elements like headers and buttons, and Regular for descriptions. All labels and functional text use a Medium weight to maintain visibility against the light background.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop, centered within a 1280px container, transitioning to a fluid layout for tablet and mobile. A 12-column system provides the structural foundation, with 24px gutters to ensure clear separation of content blocks.

The spacing rhythm is based on a 4px baseline, but defaults to larger increments (24px, 48px, 80px) to maintain the "ample whitespace" aesthetic. High-level sections (like Hero areas vs. Featured Products) should be separated by 80px (xl) to create a sense of breathability and premium pacing.

## Elevation & Depth

Depth is established through **Ambient Shadows** rather than harsh lines. Surfaces are layered using subtle, multi-stop shadows with a very low opacity (typically 4-8%) to mimic natural light.

- **Level 0 (Flat):** Main background and layout containers.
- **Level 1 (Subtle):** Product cards and form inputs, using a soft blur (12px) and a light tint of the primary navy to ground the element.
- **Level 2 (Floating):** Navigation bars and dropdown menus, using a larger blur radius (24px) to indicate they sit above the primary content.
- **Interactive State:** Elements like product cards should subtly "lift" on hover, increasing shadow spread and blur to provide tactile feedback.

## Shapes

The shape language is defined as **Rounded**, utilizing a 0.5rem (8px) base radius for standard components like buttons and inputs. Large containers, such as product cards and hero sections, utilize the `rounded-lg` (16px) or `rounded-xl` (24px) tokens to soften the overall aesthetic and make the interface feel more modern and friendly. This consistency in curvature ensures that even with a professional navy color palette, the UI remains approachable.

## Components

### Navigation Bar & Footer
The navigation bar is persistent (fixed) with a blurred background (backdrop-filter) for a glass-like feel. Links use the Navy primary color with a Teal underline transition on hover. The footer is high-contrast, using the Navy background with white typography to ground the page.

### Product Cards
Product cards feature a Level 1 shadow, an 8px corner radius, and an image-first layout. The price is highlighted in the Primary Navy, while "Add to Cart" icons or buttons use the Teal accent. On hover, the card should scale by 1.02x with a 200ms ease-in-out transition.

### Buttons
- **Primary:** Teal background with white text. High-contrast, 8px radius.
- **Secondary:** Navy background with white text for high-importance alternative actions.
- **Ghost:** Transparent background with a Navy border and text for lower-priority actions.

### Form Inputs
Inputs use a light gray border (#E2E8F0) and a subtle inner shadow. On focus, the border transitions to Teal with a 2px outer glow. Labels sit outside the input field in the `label-sm` style for maximum clarity.

### Additional Components
- **Chips:** Used for category filtering; pill-shaped with light teal backgrounds and dark teal text.
- **Progressive Disclosure:** Accordions for product details/shipping info should use smooth height transitions.