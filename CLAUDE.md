# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the VIV53 IT Services demo webpage project - a landing page for an IT services company targeting SMB companies. The project is in early development stage.

**Key Project Details:**
- **Purpose**: Lead generation and service reservations for IT services
- **Target**: SMB companies lacking IT staff or with beginner IT employees
- **Style**: Professional, minimalist design inspired by Ikusi.com
- **Design**: Dark mode default with gold-like accents on black background
- **Deployment**: Initially GitHub Pages, later customer domain

## Project Structure

Currently only contains:
- `PRD.md` - Product Requirements Document with full project specifications

## Key Requirements from PRD

**Pages Structure:**
- Home, Services, About, Contact pages
- Sticky navigation menu banner
- Hero section with animated GIF background (1920x1080, lightweight, looped)
- Services overview section
- About section  
- Contact form + WhatsApp integration

**Technical Specifications:**
- Minimalistic, modern design
- Professional typography
- Dark theme with gold accents
- Responsive layout
- WhatsApp direct link integration
- Basic contact form (email)

**Content Strategy:**
- Placeholder professional copy to be generated
- No logo or photos provided initially
- Include required policies: habeas data, cookies, privacy

**Future Enhancements (v2):**
- Booking/Calendar system integration
- Analytics (Google Analytics / Meta Pixel)
- Spanish language support

## Development Notes

This project is in active development. Current implementation status:

1. ✅ Modern, responsive landing page
2. ✅ Lead capture and professional presentation  
3. ✅ Dark theme with gold accent colors
4. ✅ Mobile-first responsive design
5. ✅ WhatsApp integration for immediate contact
6. ✅ Professional placeholder content for IT services company
7. ⏳ Plan for future booking system integration

**Recently Added Features:**
- **Floating WhatsApp Button**: Always-visible circular button in bottom-right corner
  - Smooth animations: fade-in on load, pulse effect, hover scaling
  - Mobile responsive (60px desktop, 50px mobile)
  - WhatsApp green branding (#25d366)
  - High z-index (1000) ensures visibility above all content

**Current Deployment:**
- Custom Domain: `https://www.viv53.com/`
- Build: Vite with single-page configuration
- Status: Fully functional and deployed

The project prioritizes clean, professional aesthetics that build trust with potential SMB clients seeking IT services.

## SEO Implementation (v1.1)

**Completed SEO Best Practices:**

### ✅ **Essential Meta Tags**
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Mobile theme colors and favicon references
- Keywords, author, robots, and canonical URL

### ✅ **Structured Data**
- JSON-LD LocalBusiness schema implemented
- Includes services, contact info, location, and social profiles
- Helps search engines understand the business context

### ✅ **Technical SEO Files**
- `public/robots.txt` - Search engine crawling directives
- `public/sitemap.xml` - Site structure for search engines
- Both optimized for GitHub Pages deployment

### ✅ **Semantic HTML Structure**
- Proper heading hierarchy (H1 → H2 → H3)
- `<header>`, `<main>`, `<footer>` elements
- Skip-to-content link for accessibility
- ARIA labels where appropriate

### ✅ **Performance Optimizations**
- Preload critical resources (CSS, hero image)
- Font preconnect for faster loading
- Lazy loading for images
- Optimized resource hints

### ✅ **Analytics Ready (v2 Preparation)**
- Google Analytics 4 placeholder (commented)
- Google Tag Manager setup (commented)
- Meta Pixel (Facebook) placeholder (commented)
- Ready to activate when client provides tracking IDs

## SEO Checklist for Future Updates

**When updating content:**
- [ ] Update lastmod dates in sitemap.xml
- [ ] Keep heading hierarchy logical
- [ ] Add alt text to all new images
- [ ] Update meta description if page purpose changes

**For v2 Analytics Activation:**
- [ ] Replace GTM-XXXXXXX with client's GTM ID
- [ ] Replace G-XXXXXXXXXX with client's GA4 ID  
- [ ] Replace XXXXXXXXXXXXXX with client's Meta Pixel ID
- [ ] Uncomment all analytics code blocks
- [ ] Test tracking in GTM preview mode

**SEO Maintenance:**
- [ ] Monitor Core Web Vitals performance
- [ ] Check Google Search Console for errors
- [ ] Update business information if client relocates
- [ ] Review and refresh keywords quarterly

**Expected SEO Benefits:**
🎯 Better search visibility for "IT services SMB" keywords
🎯 Rich social media previews when shared
🎯 Improved local SEO for Miami area IT services  
🎯 Enhanced mobile experience with proper theme colors
🎯 Ready for comprehensive analytics tracking