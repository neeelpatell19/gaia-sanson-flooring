# GAIA - The New World of Flooring Fashion

> From Gaia, the Greek goddess — Mother Earth, origin of life — to Prithvi, the vast and grounding force in Indian tradition.

Across cultures, Earth has always been revered as the ultimate source of creation and balance. At Sanson Group, we honor this legacy by combining innovation with purpose. Today, we're proud to unveil our newest label: **GAIA – The New World of Flooring Fashion**.

## 🌍 About GAIA

GAIA represents the perfect fusion of ancient wisdom and modern innovation in flooring solutions. Our brand embodies:

- **Heritage**: Drawing inspiration from Gaia (Greek goddess of Earth) and Prithvi (Indian Earth goddess)
- **Innovation**: Cutting-edge flooring and acoustic solutions
- **Sustainability**: Eco-friendly materials and practices
- **Quality**: Premium craftsmanship and materials

## 🏢 About Sanson Group

Sanson Group is a leading manufacturer and supplier of premium flooring and acoustic solutions, serving both residential and commercial markets across India.

### Contact Information
- **Phone**: +91-9910921119
- **Email**: contact@sansonfloorings.com
- **Website**: www.sansonfloorings.com

### Office Locations
- **Corporate Office**: B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area, New Delhi - 110015
- **Manufacturing Unit**: D-9, Flatted Factory Complex, Jhandewalan, New Delhi - 110055

## 🛠️ Technology Stack

This website is built with modern web technologies:

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Styling**: CSS3 with custom design system
- **Router**: Vue Router 4
- **Carousel**: Swiper.js
- **Deployment**: Static site hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gaia-sanson-flooring.git
   cd gaia-sanson-flooring
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
gaia-sanson-flooring/
├── public/
│   ├── robots.txt          # Crawler rules
│   ├── og-default.jpg      # Default 1200x630 social share image
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/
│   │   ├── HomeRoutes/     # Home page components
│   │   │   ├── HeroHome/   # Hero carousel
│   │   │   ├── BottomCards/ # Feature cards
│   │   │   ├── OurStoryHome/ # Story section
│   │   │   ├── YourVision/ # Vision section
│   │   │   ├── HomeProducts/ # Products slider
│   │   │   ├── HandCraftedCommon/ # Handcrafted section
│   │   │   ├── SetsAPart/  # What sets us apart
│   │   │   └── HomeImageComparison/ # Image comparison
│   │   └── OtherComponents/
│   │       └── Footer/     # Footer component
│   ├── router/
│   │   └── index.js        # Vue Router configuration
│   ├── App.vue             # Main app component
│   ├── main.js             # App entry point
│   └── style.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: #2F394A (Dark Blue)
- **Secondary**: #141C27 (Charcoal)
- **Accent**: #E4D8C8 (Warm Beige)
- **Text**: #FFFFFF (White)
- **Muted**: #B0B8C1 (Light Gray)

### Typography
- **Primary Font**: Karla (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

### Components
- **Responsive Grid**: CSS Grid for layouts
- **Interactive Elements**: Hover effects and transitions
- **Carousels**: Swiper.js integration
- **Animations**: CSS transitions and transforms

## 📱 Features

### Home Page Sections
1. **Hero Carousel**: Dynamic slides with navigation
2. **Feature Cards**: 3-card grid highlighting services
3. **Our Story**: Interactive content slider
4. **Your Vision**: Split layout with call-to-action
5. **Product Range**: Swiper carousel with product cards
6. **Handcrafted**: Brand story section
7. **What Sets Us Apart**: Unique value propositions
8. **Image Comparison**: Interactive before/after tool

### Technical Features
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Mobile Responsive**: Adaptive layouts for all devices
- **Performance**: Optimized images and code splitting
- **Accessibility**: ARIA labels and keyboard navigation
- **Cross-browser**: Compatible with modern browsers

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production: renders every page to static HTML (SSR at build time), writes `404.html` and `sitemap.xml`
- `npm run verify:seo` - Check the built `dist/` the way a crawler without JavaScript sees it (run after `npm run build`)
- `npm run preview` - Preview production build

### Code Style
- **Vue Components**: Composition API with `<script setup>`
- **CSS**: Scoped styles with BEM methodology
- **JavaScript**: ES6+ with modern syntax
- **File Naming**: PascalCase for components, kebab-case for files

## 📊 SEO Implementation

### Server-side rendering
`npm run build` runs [vite-ssg](https://github.com/antfu-collective/vite-ssg). It renders every page with Vue's server renderer and writes real HTML to `dist/<route>/index.html`, then the browser hydrates it. Crawlers and AI bots that do not run JavaScript get the full page: headings, text, images, links and structured data. All content is static, so build-time rendering gives the same result as rendering on each request, with no server to run.

Rules that keep it working:
- Browser-only code (`window`, `document`, `new Image()`) goes inside `onMounted`, never in `setup()` or module scope, or the build fails.
- Do not add `appear` to a `<transition>` that wraps page content. Vue then wraps the server-rendered HTML in a `<template>` tag, which hides it from crawlers.
- Render images as real `<img src>` in the HTML. Do not insert them only after JavaScript has loaded them.
- Each page has exactly one `<h1>`.

### Where the SEO data lives
`src/seo/pages.js` decides the title, description, canonical URL, robots rule, share image and JSON-LD for every URL. `App.vue` applies it with `useHead`, the build uses it to decide which pages to render, and the sitemap is generated from it, so they cannot drift apart.
- Category, grass-type and blog copy sits next to its data: `seoTitle` and `metaDescription` in `Categories.js`, `grassTypesData.js` and `BlogsData.js`.
- Other pages: edit `STATIC_PAGES` in `src/seo/pages.js`.
- Business details used in structured data: `src/seo/site.js`.
- Titles: 60 characters or fewer. Descriptions: 120 to 160.

### Adding a page
1. Add the route in `src/router/index.js`.
2. Add its SEO entry (see above) and, if it is public, its path in `getIndexablePaths()` in `src/seo/pages.js`.
3. `npm run build && npm run verify:seo`.

### Unknown URLs
There is no catch-all rewrite to `index.html`. An unknown URL gets `404.html` with a real 404 status, and in the app an unknown category, grass type or blog slug shows the same page. Both are `noindex`.

### Technical SEO
- **robots.txt**: all pages open to search engines and AI crawlers, plus the sitemap location
- **sitemap.xml**: written at build time, `lastmod` only for blog posts (from their real dates)
- **Canonical URLs**: one per page, no trailing slash
- **Structured data** (JSON-LD, linked by `@id`): Organization with brand and parent group (every page), also typed LocalBusiness with the product catalogue on the home page; WebSite; a WebPage, CollectionPage or AboutPage per page; BreadcrumbList (inner pages); Article and FAQPage (blog posts). There is deliberately no `Product` schema: Google treats a Product without price, reviews or ratings as an error.
- **One host**: `vercel.json` redirects `www.sansonfloorings.com` to `sansonfloorings.com`, matching the canonical URLs. If the domain settings in Vercel ever redirect the other way, the two will loop, so keep them in step.

## 🌐 Deployment

### Production Build
```bash
npm run build
```

### Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Scalable cloud hosting

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_APP_TITLE=GAIA - The New World of Flooring Fashion
VITE_APP_DESCRIPTION=Premium flooring and acoustic solutions
VITE_APP_URL=https://sansonfloorings.com
```

## 📞 Support

For technical support or questions about the website:
- **Email**: contact@sansonfloorings.com
- **Phone**: +91-9910921119

## 📄 License

This project is proprietary software owned by Sanson Group. All rights reserved.

## 🙏 Acknowledgments

- **Vue.js Team**: For the amazing framework
- **Vite Team**: For the fast build tool
- **Swiper.js**: For the carousel functionality
- **Google Fonts**: For the typography

---

**GAIA** - Where innovation meets tradition, and every floor tells a story. 🌍✨
