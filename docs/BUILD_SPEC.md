# LUMA Atelier Website Build Specification

## Page Architecture

### Core Pages
1. **Home** (`/`) - Primary landing page focused on brand introduction and conversion
2. **Services** (`/services`) - Comprehensive treatment catalog organized by category
3. **About** (`/about`) - Brand story, philosophy, and team introduction
4. **Gallery** (`/gallery`) - Visual portfolio of work organized by category
5. **Contact** (`/contact`) - Location, inquiry form, and booking facilitation

### Page Purpose Alignment
| Page | Primary Goal | Secondary Goals |
|------|--------------|-----------------|
| Home | Generate appointment bookings | Increase trust, showcase expertise |
| Services | Present all treatments clearly | Highlight transformations, drive WhatsApp inquiries |
| About | Build trust | Present luxury positioning |
| Gallery | Showcase results | Increase trust, highlight transformations |
| Contact | Convert visitors into bookings | Drive WhatsApp inquiries, grow newsletter subscribers |

## Section Hierarchy

### Home Page
1. Hero - Brand introduction with primary/secondary CTAs
2. Featured Services - Premium cards for each service category
3. Brand Story - Editorial introduction to philosophy
4. Signature Experience - Step-by-step luxury customer journey
5. Before & After Gallery - Transformation showcase
6. Testimonials - Client reviews for social proof
7. Booking CTA - Large conversion-focused section
8. Footer - Navigation, contact info, social links, newsletter signup

### Services Page
1. Page Header - Category introduction
2. Service Categories (Hair, Beauty, Nails, Wellness) - Each with:
   - Category title and description
   - Service cards (Description, Benefits, Duration, Starting Price)
3. Booking CTA - Persistent conversion section
4. Footer

### About Page
1. Page Header - About introduction
2. Founder Story - Brand origin narrative
3. Philosophy - Core values and approach
4. Studio Experience - Environment and amenities description
5. Team Introduction - Specialist profiles
6. Booking CTA - Conversion opportunity
7. Footer

### Gallery Page
1. Page Header - Gallery introduction
2. Filter Controls - Category navigation (Hair Transformations, Bridal Beauty, Nails, Studio Photography)
3. Gallery Grid - Image cards with lightbox capability
4. Booking CTA - Conversion opportunity
5. Footer

### Contact Page
1. Page Header - Contact introduction
2. Contact Form - Name, email, phone, service interest, message
3. WhatsApp CTA - Prominent direct messaging option
4. Studio Location - Address and details
5. Opening Hours - Weekly schedule
6. Google Map - Embedded location visualization
7. Booking CTA - Reinforced conversion option
8. Footer

## Component Inventory

### Atoms
- **Typography**: 
  - Display (72px, Cormorant Garamond)
  - H1 (48px, Cormorant Garamond)
  - H2 (36px, Cormorant Garamond)
  - H3 (24px, Cormorant Garamond, weight 500)
  - Body Large (18px, Inter)
  - Body (16px, Inter)
  - Caption (14px, Inter, letter-spacing 0.05em)
- **Buttons**:
  - Primary (Pill, #2A2A28 bg, #FCFBF9 text, 16px 32px padding)
  - Secondary (Transparent, 1px #2A2A28 border, #2A2A28 text)
  - Text (Underline on hover, optional arrow)
- **Form Elements**:
  - Input (Ivory bg, 24px radius, 24px padding, Soft Black text)
  - Textarea (Same as input)
  - Select (Styled to match input)
  - Label (Soft Black, Body size)
- **Icons**: Simple line icons for navigation and decorative purposes
- **Divider**: 1px solid #A89F96 (Muted Taupe)

### Molecules
- **Service Card**:
  - Ivory background (#FCFBF9)
  - 24px border radius
  - 24px padding
  - Image (optional, full-width top)
  - Title (H3)
  - Description (Body)
  - Benefits list (Caption)
  - Metadata (Duration, Price - Body)
  - Soft shadow on hover
- **Testimonial Card**:
  - Ivory background
  - 24px radius
  - 24px padding
  - Quote text (Body Large)
  - Author name (H3)
  - Author title (Caption)
  - Optional author image (circle, 48px)
- **Gallery Item**:
  - Ivory background
  - 24px radius
  - 24px padding
  - Image (aspect ratio 4:3, object-fit: cover)
  - Category tag (Caption, background #C5BDB6)
  - Soft shadow on hover
- **Navigation Item**:
  - Text (14px, Inter, weight 500, uppercase, letter-spacing 0.05em)
  - Hover state: underline
  - Active state: Soft Black color
- **CTA Button Group**:
  - Primary Button (Book Appointment)
  - Secondary Button (Schedule Consultation)
  - WhatsApp Button (Icon + Text, Secondary Button style)

### Organisms
- **Hero Section**:
  - Full-width background image (parallax optional)
  - Overlay: rgba(247,245,240,0.8) for text legibility
  - Content: Headline (Display), Subheadline (H2), CTA Button Group
  - Mobile: Stacked vertically, reduced padding
- **Featured Services**:
  - Horizontal scroll on mobile, grid on desktop
  - 4 Service Cards (one per category)
  - Section title (H2), intro text (Body)
- **Brand Story**:
  - Asymmetrical layout: image left/text right (desktop), stacked (mobile)
  - Image with Soft Shadow
  - Text: Headline (H2), body paragraphs (Body)
- **Signature Experience**:
  - Vertical timeline or stepper
  - Each step: Number circle (Soft Clay bg), title (H3), description (Body)
  - Connecting line (Muted Taupe, 2px)
- **Before & After Gallery**:
  - Grid layout (2 columns on tablet+, 1 on mobile)
  - Gallery Items with lightbox
  - Section title (H2), view all link (Text Button)
- **Testimonials Slider**:
  - Container with Soft Shadow
  - Testimonial Cards in carousel (3 visible on desktop, 1 on mobile)
  - Navigation arrows (Secondary Button style)
- **Booking CTA Section**:
  - Full-width background (#F7F5F0)
  - Headline (H2), subheadline (Body)
  - Primary Button (Book Appointment) - full width on mobile
- **Footer**:
  - Top: Logo, navigation columns (About, Services, Gallery, Contact)
  - Middle: Social icons (Text Button style)
  - Bottom: Copyright, WhatsApp CTA (floating on mobile)
  - Background: #2A2A28, text: #FCFBF9

### Templates
- **Page Template**:
  - Header (Navigation + optional hero)
  - Main (Page-specific sections)
  - Footer
  - Consistent container width: 1440px max, 24px padding on sides
- **Header**:
  - Layout A: Logo centered, nav split left/right
  - Layout B: Logo left, nav right
  - Mobile: Hamburger menu (full-screen overlay)
  - Scrolled state: background: rgba(247,245,240,0.9), backdrop-filter: blur(10px)
- **Modal** (for lightbox, newsletter):
  - Background: rgba(0,0,0,0.5)
  - Content: Ivory background, 24px radius, 24px padding
  - Close button (Secondary Button style in top-right)

## Responsive Behavior

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Layout Adaptations
- **Grid Systems**:
  - Mobile: 1-column
  - Tablet: 2-column
  - Desktop: 3-4 column (depending on section)
- **Navigation**:
  - Desktop: Horizontal bar (Layout A or B)
  - Mobile: Full-screen overlay hamburger menu
  - Tablet: Horizontal bar (may collapse to hamburger at lower end)
- **Typography Scaling**:
  - Display: 72px (desktop) → 42px (mobile)
  - H1: 48px → 32px
  - H2: 36px → 28px
  - H3: 24px → 20px
  - Body: 16px (consistent)
  - Caption: 14px (consistent)
- **Spacing System**:
  - Uses 8-point grid consistently
  - Section spacing: XL (80px) on desktop → 40px on mobile
  - Element spacing: LG (48px) on desktop → 24px on mobile
  - Padding: SM (16px) consistent, may reduce to XS (8px) in tight spaces
- **Component Adjustments**:
  - Cards: Full width on mobile, constrained width on desktop
  - Buttons: Full width on mobile for primary CTAs
  - Images: Aspect ratio maintained, lazy-loaded
  - Forms: Stacked vertically on all breakpoints

### Fluid Elements
- **Hero Image**: Uses `object-fit: cover` with height: 80vh (desktop), 60vh (mobile)
- **Container Width**: `max-width: 1440px; width: calc(100% - 48px); padding: 0 24px;`
- **Typography**: Uses `clamp()` for fluid scaling between breakpoints where appropriate
- **Spacing**: Uses CSS custom properties with breakpoint-based values

## Animation Requirements

### Motion System
- **Timing Function**: `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease)
- **Durations**:
  - Micro interactions: 300ms
  - Section reveals: 800ms
  - Page transitions: 1200ms
- **Styles**:
  - Fade up (opacity + translateY)
  - Soft reveal (opacity + scale)
  - Gentle parallax (background movement at 0.5x scroll speed)
  - Smooth transitions (all property changes)

### Specific Animations
- **Page Load**: 
  - Hero content: fade up (800ms, staggered)
  - Below-fold sections: fade up as they enter viewport (800ms)
- **Hover Interactions**:
  - Buttons: Soft shadow (0 10px 30px -5px rgba(42,42,40,0.05)) - 300ms
  - Cards: Soft shadow (same as buttons) - 300ms
  - Links: underline animation (width grow from left) - 300ms
- **Scroll Effects**:
  - Section reveals: fade up (800ms) with 100px viewport offset
  - Navigation scrolled state: background fade + backdrop-filter - 300ms
  - Hamburger menu toggle: icon transform (300ms)
- **Modal Interactions**:
  - Open: fade in + scale (0.95 to 1) - 300ms
  - Close: fade out + scale (1 to 0.95) - 200ms
- **Form Feedback**:
  - Input focus: outline glow (Soft Clay) - 200ms
  - Error: shake animation (translateX) - 300ms
  - Success: checkmark fade in - 300ms

### Motion Preferences
- Respects `prefers-reduced-motion: reduce`:
  - All animations duration set to 0ms
  - Transitions changed to instant
  - Parallax effects disabled
  - Only essential feedback (focus states) retained

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- **Color Contrast**:
  - Minimum 4.5:1 for normal text
  - Minimum 3:1 for large text (18pt+)
  - Minimum 3:1 for UI components and graphical objects
  - Specific checks:
    - Body text (#1C1C1C) on #F7F5F0: 12.6:1 ✓
    - Secondary text (#6E6862) on #F7F5F0: 4.8:1 ✓
    - Primary button text (#FCFBF9) on #2A2A28: 14.6:1 ✓
    - Secondary button text (#2A2A28) on transparent: depends on background
    - Focus outline: minimum 3:1 against adjacent colors
- **Keyboard Navigation**:
  - Logical tab order following visual flow
  - Visible focus indicators (minimum 2px solid #C5BDB6 or 3px outline)
  - Skip navigation link as first focusable element
  - All interactive elements reachable and operable via keyboard
  - Modal focus trap and return focus on close
- **Screen Reader Support**:
  - Semantic HTML: header, nav, main, section, article, footer
  - Proper heading hierarchy (H1 only once per page)
  - Descriptive link text (avoid "click here")
  - Form labels associated with inputs via `for`/`id`
  - ARIA labels for icon-only buttons
  - Live regions for form validation errors
  - Alt text for all meaningful images (decorative images use `alt=""`)
  - Language attribute on html element
- **Touch Targets**:
  - Minimum 48x48 dp for all interactive elements
  - Adequate spacing between touch targets (minimum 8dp)
- **Forms**:
  - Clear error messages with inline validation
  - Error identification (text + icon/color)
  - Success states
  - Required field indicators
  - Input masks where appropriate (phone number)
  - Autocomplete attributes
- **Motion & Animation**:
  - Respects `prefers-reduced-motion`
  - No flashing content (>3Hz)
  - Animation can be paused, stopped, or hidden
- **Audio/Video** (if added):
  - Captions and transcripts
  - Player controls accessible
  - No autoplay without user interaction

### Implementation Notes
- Use `:focus-visible` for keyboard-focused outlines
- Ensure all color combinations meet contrast ratios in both light and dark states
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Validate with axe-core and Lighthouse accessibility audits
- Provide text alternatives for all non-text content
- Ensure content is readable and understandable (font size, line height, language)

## SEO Requirements

### Technical SEO
- **Performance**:
  - Target LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Optimize images: WebP/AVIF formats, responsive `srcset`, lazy loading
  - Minify CSS/JS, leverage browser caching
  - Use CDN for assets
  - Critical CSS above-the-fold
- **Crawlability & Indexing**:
  - Valid HTML5
  - XML sitemap submitted to Search Console
  - Robots.txt with appropriate directives
  - Canonical tags to prevent duplicate content
  - No index tags for thin/duplicate content (if any)
- **Structured Data**:
  - LocalBusiness schema (NAP, opening hours, geo, priceRange, servesCuisine)
  - Service schema for each treatment category
  - FAQPage schema (when FAQ section added)
  - BreadcrumbList schema
  - Review schema for testimonials
  - Organization schema
- **Mobile-First**:
  - Responsive design meeting mobile usability standards
  - Viewport meta tag: `width=device-width, initial-scale=1`
  - Tap target sizing
  - Font legibility on small screens
- **Security & Technical**:
  - HTTPS implementation
  - Safe browsing compliance
  - No intrusive interstitials
  - Fast server response time (< 200ms)
  - Proper HTTP headers (security, caching)

### Content SEO
- **Keyword Targeting** (from brief):
  - Primary: "Luxury Salon Amsterdam", "Hair Salon Amsterdam", "Premium Beauty Studio Amsterdam"
  - Secondary: "Bridal Makeup Amsterdam", "Luxury Hair Treatments Amsterdam", "Head Spa Amsterdam", "Luxury Beauty Services Netherlands"
- **On-Page Optimization**:
  - Unique title tags (50-60 characters) with primary keyword near front
  - Meta descriptions (150-160 characters) compelling and keyword-inclusive
  - H1 per page matching search intent
  - H2-H3 hierarchy incorporating secondary keywords
  - Body content naturally including keywords (avoid stuffing)
  - Image alt text descriptive and keyword-relevant where appropriate
  - Internal linking with descriptive anchor text
  - Outbound links to authoritative sources (when relevant)
- **Content Strategy**:
  - Plan for blog/faq section to target long-tail keywords
  - Service pages with detailed descriptions (benefits, duration, pricing)
  - About page focusing on brand story and expertise
  - Gallery pages with optimized image filenames and alt text
  - Local content: Amsterdam-specific references, neighborhood mentions
- **Local SEO**:
  - Google Business Profile integration
  - NAP consistency across all citations
  - Location-specific landing pages (if expanding)
  - Embedded Google Map with proper schema
  - Local business schema markup
  - Encourage and display Google reviews
- **Technical Content**:
  - XML sitemap including all pages
  - RSS feed for blog (when added)
  - HTML sitemap in footer
  - 404 page with helpful navigation and search
  - Proper status codes (200, 301, 404, 410)
  - Language targeting (English primary, consider Dutch for local)

### Monitoring & Maintenance
- Implement Google Search Console and Analytics
- Set up tracking for conversions (form submissions, WhatsApp clicks)
- Monitor Core Web Vitals monthly
- Quarterly content audit and refresh
- Backlink profile monitoring
- Competitor SEO analysis quarterly

---

*This specification provides the technical foundation for building the LUMA Atelier website in alignment with the brand's luxury editorial positioning, conversion goals, and user experience requirements.*