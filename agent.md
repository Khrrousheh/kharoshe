# KHAROSHE - Brand & Website Specification

## Brand Identity

### Overview
KHAROSHE (خروشة) is a premium real estate and interior design company. The brand exudes luxury, sophistication, and modern elegance with a strong architectural identity.

### Logo
- **Primary Logo**: Stylized golden "K" monogram integrated with building silhouettes and a house icon
- **Typography**: "KHAROSHE" in uppercase elegant serif/sans-serif blend with gold metallic finish
- **Arabic Name**: "خروشة" in custom Arabic calligraphy with gold gradient
- **Tagline**: "REAL ESTATE & INTERIOR DESIGN" / "للاستثمار العقاري والديكور"

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gold-primary` | `#C9A84C` | Primary brand color, headings, accents |
| `--color-gold-light` | `#E8D5A3` | Highlights, hover states |
| `--color-gold-dark` | `#8B7355` | Shadows, depth |
| `--color-black` | `#0A0A0A` | Primary background |
| `--color-black-light` | `#1A1A1A` | Card backgrounds, sections |
| `--color-black-lighter` | `#2A2A2A` | Borders, dividers |
| `--color-white` | `#F5F0E8` | Primary text (warm white) |
| `--color-white-muted` | `#A89B8C` | Secondary text, captions |
| `--color-marble` | `#E8E0D5` | Accent backgrounds, cards |

### Typography
- **Arabic Primary**: `Noto Sans Arabic` or `Cairo` - weights 400, 600, 700
- **English Primary**: `Playfair Display` (headings), `Inter` (body)
- **Heading Scale**: 
  - H1: 4rem (64px), weight 700
  - H2: 2.5rem (40px), weight 600
  - H3: 1.5rem (24px), weight 600
- **Body**: 1rem (16px), weight 400, line-height 1.8

### Visual Style
- **Aesthetic**: Dark luxury, gold accents, architectural geometry
- **Textures**: Subtle marble patterns, brushed metal, glass reflections
- **Shadows**: Deep, warm shadows with gold undertones
- **Border Radius**: Minimal (2-4px) for sharp, architectural feel
- **Transitions**: Smooth, elegant (300-500ms ease-out)

---

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3+
- **Language**: Arabic (RTL) as default, English secondary
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cairo, Playfair Display, Inter)

---

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   ├── real-estate/
│   │   └── interior-design/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionRealEstate.jsx
│   │   ├── SectionInteriorDesign.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── SectionTitle.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#C9A84C',
          light: '#E8D5A3',
          dark: '#8B7355',
        },
        brand: {
          black: '#0A0A0A',
          'black-light': '#1A1A1A',
          'black-lighter': '#2A2A2A',
          white: '#F5F0E8',
          'white-muted': '#A89B8C',
          marble: '#E8E0D5',
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Noto Sans Arabic', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
```

---

## Global Styles (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    direction: rtl;
    scroll-behavior: smooth;
  }

  body {
    @apply bg-brand-black text-brand-white font-arabic;
    font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold;
  }

  ::selection {
    @apply bg-gold-primary text-brand-black;
  }
}

@layer components {
  .text-gold-gradient {
    @apply bg-gold-gradient bg-clip-text text-transparent;
    background-size: 200% auto;
  }

  .border-gold {
    @apply border border-gold-primary/30;
  }

  .card-luxury {
    @apply bg-brand-black-light border border-brand-black-lighter rounded-sm 
           hover:border-gold-primary/50 transition-all duration-500
           hover:shadow-[0_0_30px_rgba(201,168,76,0.15)];
  }

  .btn-primary {
    @apply bg-gold-gradient text-brand-black font-bold px-8 py-3 rounded-sm
           hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300
           active:scale-95;
  }

  .btn-outline {
    @apply border-2 border-gold-primary text-gold-primary px-8 py-3 rounded-sm
           hover:bg-gold-primary hover:text-brand-black transition-all duration-300;
  }

  .section-padding {
    @apply px-4 sm:px-6 lg:px-8 xl:px-16 py-20 lg:py-28;
  }

  .gold-line {
    @apply w-16 h-0.5 bg-gold-gradient mx-auto;
  }
}

@layer utilities {
  .text-shadow-gold {
    text-shadow: 0 0 20px rgba(201, 168, 76, 0.3);
  }
}
```

---

## Page Sections

### 1. Navigation (Navbar)
- **Position**: Fixed top, transparent → solid on scroll
- **Height**: 80px
- **Background**: `bg-brand-black/90 backdrop-blur-md` on scroll
- **Content**:
  - Right: Logo (K monogram + "خروشة")
  - Center: Navigation links (التطوير العقاري, التصميم الداخلي, من نحن, تواصل معنا)
  - Left: CTA button "احصل على عرض"
- **Mobile**: Hamburger menu with slide-in drawer

### 2. Hero Section
- **Height**: 100vh
- **Background**: Dark architectural image with overlay `bg-brand-black/70`
- **Content** (centered, RTL):
  - Small label: "للاستثمار العقاري والديكور"
  - Main heading: "خروشة" - 5rem, gold gradient
  - Subheading: "حيث يلتقي الفخامة بالإبداع"
  - CTA buttons: "استكشف مشاريعنا" (primary) + "تواصل معنا" (outline)
- **Animation**: Fade-in-up staggered elements

### 3. Real Estate Section (التطوير العقاري)
- **Background**: `bg-brand-black-light`
- **Layout**: 
  - Section title with gold line accent
  - Grid: 3 columns (desktop), 1 column (mobile)
  - Cards with property images, title, location, price
- **Card Content**:
  - Image with hover zoom
  - Property type badge (شقة, فيلا, تجاري)
  - Title in Arabic
  - Location with map pin icon
  - Price in gold
  - "التفاصيل" button
- **Features to highlight**:
  - عقارات فاخرة
  - مواقع استراتيجية
  - استثمار آمن
  - ضمانات قانونية

### 4. Interior Design Section (التصميم الداخلي)
- **Background**: `bg-brand-black`
- **Layout**:
  - Section title with gold line accent
  - Alternating layout: Image left / Content right (RTL adjusted)
  - Gallery grid with hover effects
- **Content**:
  - Service categories: تصميم معاصر, كلاسيكي, ذكي, تجاري
  - Portfolio showcase with before/after concept
  - Process steps: استشارة → تصميم → تنفيذ → تسليم
- **Features to highlight**:
  - تصاميم مخصصة
  - مواد عالية الجودة
  - فريق متخصص
  - إنجاز في الوقت المحدد

### 5. Footer
- **Background**: `bg-brand-black-light border-t border-brand-black-lighter`
- **Layout**: 4 columns
  - Col 1: Logo + brief description
  - Col 2: روابط سريعة
  - Col 3: خدماتنا
  - Col 4: تواصل معنا (phone, email, social)
- **Bottom bar**: Copyright + social icons

---

## Component Specifications

### Button
```jsx
// Variants: primary, outline, ghost
// Sizes: sm, md, lg
// Props: children, variant, size, className, onClick
```

### Card (Property/Project)
```jsx
// Props: image, title, category, location, price, link
// Hover: Image scale 1.05, border glow gold
```

### SectionTitle
```jsx
// Props: title, subtitle, align (center/right)
// Includes gold decorative line
```

---


### Carousel Component (Hero)
A full-featured image carousel for the hero section showcasing properties and interior designs.

```jsx
// components/ui/Carousel.jsx
// Props:
//   - slides: Array<{ image, title, subtitle, ctaText, ctaLink }>
//   - autoPlay: boolean (default: true)
//   - interval: number in ms (default: 5000)
//   - showIndicators: boolean (default: true)
//   - showArrows: boolean (default: true)

// Features:
// - Smooth crossfade transition between slides (700ms ease-in-out)
// - Auto-play with pause on hover
// - Dot indicators at bottom (gold active, muted inactive)
// - Arrow navigation (left/right) with gold hover glow
// - Touch/swipe support for mobile
// - Keyboard navigation (arrow keys)
// - RTL-aware: arrows swap sides, swipe direction reversed
// - Progress bar showing time until next slide
// - Text content animates in with stagger (title → subtitle → CTA)

// Styling:
// - Full width/height of container (100vh for hero)
// - Overlay: linear-gradient(to top, #0A0A0A 0%, transparent 60%)
// - Text positioned bottom-right (RTL: right side)
// - Indicators: bottom-center, 10px dots, gap-3
// - Arrows: 48px circles, border-gold/30, hover:bg-gold-primary/20
```

**Hero Integration:**
```jsx
// Hero.jsx structure
<section className="relative h-screen w-full overflow-hidden">
  <Carousel
    slides={[
      {
        image: "/images/hero/hero-1.jpg",
        title: "فلل فاخرة بتصاميم عصرية",
        subtitle: "استثمار يجمع بين الرقي والقيمة المستدامة",
        ctaText: "اكتشف المزيد",
        ctaLink: "#real-estate"
      },
      {
        image: "/images/hero/hero-2.jpg",
        title: "تصميم داخلي يلهم الحياة",
        subtitle: "حيث تلتقي الفخامة بالوظيفة في كل تفصيل",
        ctaText: "شاهد أعمالنا",
        ctaLink: "#interior-design"
      },
      {
        image: "/images/hero/hero-3.jpg",
        title: "شقق سكنية بمواقع مميزة",
        subtitle: "اختبر الحياة العصرية في قلب المدينة",
        ctaText: "تصفح المشاريع",
        ctaLink: "#real-estate"
      }
    ]}
    autoPlay={true}
    interval={6000}
  />

  {/* Brand overlay - static on top of carousel */}
  <div className="absolute top-0 right-0 p-8 z-20">
    <img src="/images/logo.png" alt="خروشة" className="h-16" />
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
    <ChevronDown className="w-6 h-6 text-gold-primary" />
  </div>
</section>
```

---

### Image Grid Component
A responsive masonry/grid gallery for showcasing multiple images in both sections.

```jsx
// components/ui/ImageGrid.jsx
// Props:
//   - images: Array<{ src, alt, title, category, span? }>
//   - columns: number (default: 3)
//   - gap: string (default: "gap-4")
//   - variant: "masonry" | "uniform" | "featured" (default: "masonry")
//   - onImageClick?: (image) => void (enables lightbox)
//   - animated: boolean (default: true)

// Variants:
//
// 1. MASONRY (default)
//    - Uneven heights, Pinterest-style
//    - Some images span 2 rows (span: "row-span-2")
//    - Best for: Interior design portfolio
//
// 2. UNIFORM
//    - Equal height cards, clean grid
//    - Best for: Real estate listings
//
// 3. FEATURED
//    - First image spans 2 columns and 2 rows
//    - Remaining images fill around it
//    - Best for: Highlighting a flagship project

// Card Hover Effect:
// - Image: scale(1.08), 500ms ease-out
// - Overlay: gradient from transparent to #0A0A0A/80
// - Content: slides up from bottom, opacity 0 → 1
// - Border: 1px solid transparent → gold-primary/40
// - Shadow: 0 20px 40px rgba(201,168,76,0.1)

// Styling per card:
// <div className="group relative overflow-hidden rounded-sm cursor-pointer">
//   <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//   <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   <div className="absolute bottom-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//     <span className="text-gold-primary text-sm">{category}</span>
//     <h3 className="text-brand-white font-bold text-lg">{title}</h3>
//   </div>
// </div>
```

**Real Estate Grid Usage:**
```jsx
// SectionRealEstate.jsx
<ImageGrid
  variant="uniform"
  columns={3}
  gap="gap-6"
  images={[
    { src: "/images/real-estate/villa-1.jpg", alt: "فيلا فاخرة", title: "فيلا الرياض", category: "فيلا سكنية" },
    { src: "/images/real-estate/apartment-1.jpg", alt: "شقة عصرية", title: "برج النخبة", category: "شقة" },
    { src: "/images/real-estate/commercial-1.jpg", alt: "مساحة تجارية", title: "مول المركز", category: "تجاري" },
    { src: "/images/real-estate/villa-2.jpg", alt: "فيلا حديثة", title: "فيلا الدهبي", category: "فيلا سكنية" },
    { src: "/images/real-estate/apartment-2.jpg", alt: "شقة مطلة", title: "أبراج السماء", category: "شقة" },
    { src: "/images/real-estate/commercial-2.jpg", alt: "مكتب فاخر", title: "مجمع الأعمال", category: "تجاري" },
  ]}
  onImageClick={(img) => openLightbox(img)}
/>
```

**Interior Design Grid Usage:**
```jsx
// SectionInteriorDesign.jsx
<ImageGrid
  variant="masonry"
  columns={3}
  gap="gap-4"
  images={[
    { src: "/images/interior/living-1.jpg", alt: "صالة معيشة", title: "صالة النخبة", category: "تصميم معاصر", span: "row-span-2" },
    { src: "/images/interior/kitchen-1.jpg", alt: "مطبخ", title: "مطبخ المستقبل", category: "مطبخ" },
    { src: "/images/interior/bedroom-1.jpg", alt: "غرفة نوم", title: "جناح النوم", category: "غرفة نوم" },
    { src: "/images/interior/office-1.jpg", alt: "مكتب", title: "مكتب تنفيذي", category: "تجاري" },
    { src: "/images/interior/bathroom-1.jpg", alt: "حمام", title: "سبا منزلي", category: "حمام", span: "row-span-2" },
    { src: "/images/interior/dining-1.jpg", alt: "غرفة طعام", title: "غرفة الطعام", category: "تصميم كلاسيكي" },
  ]}
  onImageClick={(img) => openLightbox(img)}
/>
```

---

### Lightbox Component (Optional Enhancement)
```jsx
// components/ui/Lightbox.jsx
// Props:
//   - images: Array<{ src, alt, title }>
//   - initialIndex: number
//   - isOpen: boolean
//   - onClose: () => void

// Features:
// - Fullscreen overlay with backdrop-blur
// - Image zoom with pan (mouse drag / touch)
// - Navigation arrows (previous/next)
// - Thumbnail strip at bottom
// - Counter: "3 / 12"
// - Close button (X) top-left
// - Keyboard: ESC to close, arrows to navigate
// - Transition: fade + scale from clicked image position
// - Background: bg-brand-black/95
```

---

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

---

## Animation Guidelines
- **Entrance**: fade-in-up with 0.1s stagger
- **Hover**: scale 1.02, border glow, 300ms ease-out
- **Scroll**: IntersectionObserver at 0.2 threshold
- **Page load**: Hero elements stagger 0.2s each

---

## Assets Needed
1. Logo files (PNG/SVG) - gold on transparent
2. Hero background - luxury architecture/building
3. Real estate property images (6-9)
4. Interior design portfolio images (6-9)
5. Pattern textures (subtle marble, geometric)

---

## SEO & Meta
- Title: "خروشة | للاستثمار العقاري والديكور"
- Description: "شركة خروشة المتخصصة في التطوير العقاري والتصميم الداخلي الفاخر"
- Keywords: عقارات, ديكور, تصميم داخلي, استثمار عقاري, فلل, شقق
- Language: ar
- Direction: rtl
