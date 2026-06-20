# DESIGN_SYSTEM.md

# Luxury Editorial Design System v1.0

## Brand Personality

### Voice

* Sophisticated
* Calming
* Authoritative
* Personal

### Vibe

A quiet luxury retreat.

The experience should feel refined, organic, bespoke, and premium.

### Keywords

* Holistic
* Bespoke
* Refined
* Organic
* Serene
* Premium
* Editorial
* Minimalist

---

# Color Palette

## Primary

Deep Espresso / Charcoal

```css
#2A2A28
```

Usage:

* Primary headings
* Primary buttons
* Navigation
* Structural elements

---

## Secondary

Muted Taupe

```css
#A89F96
```

Usage:

* Borders
* Secondary UI elements
* Dividers

---

## Accent

Soft Clay / Sage

```css
#C5BDB6
```

Usage:

* Active states
* Decorative accents
* Soft highlights

---

## Background

Warm Cream

```css
#F7F5F0
```

Usage:

* Primary page background

---

## Surface

Ivory

```css
#FCFBF9
```

Usage:

* Cards
* Inputs
* Elevated surfaces

---

## Text Primary

Soft Black

```css
#1C1C1C
```

Usage:

* Headings
* Important content

---

## Text Secondary

Slate Earth

```css
#6E6862
```

Usage:

* Body text
* Captions
* Secondary content

---

# Typography

## Heading Font

Cormorant Garamond

Fallback:

```css
Playfair Display
```

Characteristics:

* Elegant
* Editorial
* High contrast
* Luxury aesthetic

---

## Body Font

Inter

Characteristics:

* Clean
* Readable
* Modern
* Minimal

---

# Typography Scale

## Display

```css
72px
line-height: 1.1
font-weight: 400
```

Used in:

* Hero sections

---

## H1

```css
48px
line-height: 1.2
font-weight: 400
```

---

## H2

```css
36px
line-height: 1.3
font-weight: 400
```

---

## H3

```css
24px
line-height: 1.4
font-weight: 500
```

---

## Body Large

```css
18px
line-height: 1.6
font-weight: 400
```

---

## Body

```css
16px
line-height: 1.6
font-weight: 400
```

---

## Caption

```css
14px
line-height: 1.5
letter-spacing: 0.05em
```

---

# Spacing System

Use an 8-point grid.

## XS

```css
8px
```

Component spacing

---

## SM

```css
16px
```

Standard padding

---

## MD

```css
24px
```

Text block spacing

---

## LG

```css
48px
```

Element spacing

---

## XL

```css
80px
```

Minor section spacing

---

## 2XL

```css
160px
```

Major section spacing

---

# Border Radius

## Buttons

```css
9999px
```

Pill shape

---

## Cards

```css
24px
```

Soft elegant corners

---

## Hero Containers

```css
32px
```

Premium editorial feel

---

# Shadows

## Soft Shadow

```css
0 10px 30px -5px rgba(42,42,40,0.05)
```

Used on hover

---

## Floating Shadow

```css
0 4px 20px rgba(0,0,0,0.04)
```

Used for:

* Dropdowns
* Floating navigation

---

# Buttons

## Primary Button

Background:

```css
#2A2A28
```

Text:

```css
#FCFBF9
```

Style:

* Pill shaped
* No border
* Generous padding

Padding:

```css
16px 32px
```

---

## Secondary Button

Background:

```css
transparent
```

Border:

```css
1px solid #2A2A28
```

Text:

```css
#2A2A28
```

---

## Text Button

Style:

* No background
* Underline on hover
* Optional arrow icon

---

# Card System

## Principles

* Flat design
* Minimal shadows
* Spacious layout
* Large imagery
* Elegant typography

Background:

```css
#FCFBF9
```

Radius:

```css
24px
```

Padding:

```css
24px
```

---

# Navigation

## Style

Elegant and breathable.

Options:

### Layout A

Logo centered

Navigation split left and right

### Layout B

Logo left

Navigation right

---

## States

### Default

Transparent

### Scrolled

```css
background: rgba(247,245,240,0.9)
backdrop-filter: blur(10px)
```

---

## Links

```css
14px
font-weight: 500
letter-spacing: 0.05em
text-transform: uppercase
```

---

# Photography Direction

## Style

* Natural lighting
* Warm beige palette
* Organic textures
* Soft shadows
* Editorial photography

### Avoid

* Harsh lighting
* Neon colors
* Corporate imagery
* Generic stock photos

---

# Layout Principles

## Design Language

* Editorial
* Minimalist luxury
* Organic shapes
* Large whitespace
* Visual breathing room

### Avoid

* SaaS dashboard styling
* Heavy borders
* Glassmorphism
* Excessive gradients
* Busy layouts

---

# Mobile Rules

## Layout

Single-column first

---

## Typography

Display:

```css
42px
```

Body:

```css
16px
```

Minimum touch target:

```css
48px
```

---

## Navigation

Minimal hamburger menu

Full-screen overlay

---

# Motion System

## Timing Function

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Durations

Micro interactions:

```css
300ms
```

Section reveals:

```css
800ms
```

Page transitions:

```css
1200ms
```

---

## Motion Style

* Fade up
* Soft reveal
* Gentle parallax
* Smooth transitions

Avoid:

* Bounce
* Elastic animations
* Flashy effects

---

# UX Principles

Every page should feel:

* Calm
* Spacious
* Premium
* Effortless

Focus on:

* Conversion
* Readability
* Trust
* Mobile experience

Every section should have a clear purpose.

Whitespace is a feature, not empty space.

---

# Technical Requirements

* Mobile First
* Accessibility Compliant
* SEO Friendly
* Fast Loading
* Responsive
* Reusable Components
* Production Ready

---

# Visual Benchmark

Reference brands:

* Aesop
* Soho House
* Flamingo Estate
* Augustinus Bader
* Aman Resorts
* High-end boutique salons
* Luxury wellness retreats

The website should feel closer to an editorial magazine and luxury hospitality experience than a typical business website.
