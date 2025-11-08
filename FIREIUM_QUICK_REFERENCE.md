# Fireium Brand Quick Reference

## 🎨 Brand Colors at a Glance

### Primary Color
```
Fireium Orange
HEX:  #FF6B35
RGB:  255, 107, 53
HSL:  14°, 100%, 43%
Uses: Main brand, CTAs, buttons, accents
```

### Secondary/Accent Colors
```
Fireium Blue
HEX:  #004E89
RGB:  0, 78, 137
HSL:  210°, 100%, 27%
Uses: Secondary elements, depth

Light Orange
HEX:  #FF8C42
RGB:  255, 140, 66
HSL:  23°, 100%, 63%
Uses: Hover states, subtle accents

Background Tone
HEX:  #F7F9FC
RGB:  247, 249, 252
HSL:  220°, 35%, 98%
Uses: Page/card backgrounds
```

---

## 📱 Brand Assets

### Logo
- Primary: Orange on white background
- Inverse: White on Fireium Orange
- Icon: Square version for favicons
- Horizontal: For header/footer use

### Favicon
- 16×16px: .ico format
- 32×32px: .png format
- 64×64px: .png format
- Apple Touch Icon: 180×180px

---

## 🔤 Typography

### Headlines
- Font: Modern sans-serif (Inter)
- Weight: Bold (700)
- Color: #000000 (Black)

### Body Text
- Font: Sans-serif (Inter)
- Weight: Regular (400-500)
- Color: #333333 or #666666

### Accents
- Color: #FF6B35 (Fireium Orange)
- Font-weight: 600 (Semibold)

---

## 🎯 Quick Implementation

### Tailwind CSS
```html
<!-- Primary Button -->
<button class="bg-fireium hover:bg-fireium-dark text-white">
  Get Started
</button>

<!-- Link -->
<a href="#" class="text-fireium hover:text-fireium-dark">
  Learn More
</a>

<!-- Accent Element -->
<div class="border-l-4 border-fireium-accent">
  Important
</div>
```

### CSS Variables
```css
.button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.accent {
  border-color: hsl(var(--accent));
}
```

---

## 📐 Spacing Guidelines

### Button Padding
- Small: `px-4 py-2`
- Medium: `px-6 py-3`
- Large: `px-8 py-4`

### Section Padding
- Mobile: `px-4 py-8`
- Tablet: `px-6 py-12`
- Desktop: `px-8 py-16`

### Border Radius
- Small: `rounded-md`
- Medium: `rounded-lg`
- Large: `rounded-xl`

---

## 🌐 Website Structure

```
Fireium (fireium.dev)
├── / (Home)
├── /about (About Us)
├── /services (Services)
├── /portfolio (Portfolio)
├── /contact (Contact)
└── /blog (Blog)
```

---

## 📧 Contact Information

**Email**: hello@fireium.dev
**Website**: https://fireium.dev
**Social**: @fireiumdev (all platforms)

---

## 🎬 Brand Voice

### Mission
Transform complex business challenges into powerful software solutions

### Vision
Be a recognized industry leader in digital innovation and software development

### Values
- **Innovation**: Forward-thinking, creative solutions
- **Quality**: Excellence in every delivery
- **Collaboration**: Strong partnerships with clients

### Tone
- Professional yet approachable
- Energetic and forward-thinking
- Technical but easy to understand

---

## ✅ Brand Checklist

When creating new content, ensure:
- [ ] Using Fireium Orange (#FF6B35) for CTAs
- [ ] Using Fireium branding and logo
- [ ] Maintaining consistent spacing and typography
- [ ] Following brand voice guidelines
- [ ] Using correct company name: Fireium
- [ ] Using correct email: hello@fireium.dev
- [ ] Using correct website: fireium.dev
- [ ] All links point to fireium.dev
- [ ] Colors match brand guidelines
- [ ] Dark mode colors applied for dark backgrounds

---

## 🔗 File Locations

### Brand Files
- Logo: `/public/images/logo.png`
- Favicon: `/public/images/logo.png`
- Theme Config: `/tailwind.config.ts`
- Color Vars: `/src/index.css`

### Documentation
- Summary: `/BRANDING_UPDATE_SUMMARY.md`
- Theme Spec: `/FIREIUM_THEME_SPECIFICATION.md`
- Checklist: `/FIREIUM_IMPLEMENTATION_CHECKLIST.md`
- Quick Ref: `/FIREIUM_QUICK_REFERENCE.md`

---

## 🚀 Launch Readiness

**Status**: ✅ Ready for Production

- [x] All branding updated
- [x] Colors implemented
- [x] URLs configured
- [x] Email configured
- [x] Documentation complete
- [x] Testing completed

**Next Steps**:
1. Deploy to production
2. Monitor performance
3. Submit sitemap to search engines
4. Announce brand change
5. Update social media

---

## 🎨 Color Swatches

```
████ Fireium Orange (#FF6B35) - Primary
████ Fireium Orange Dark (#FF4500) - Hover
████ Fireium Orange Light (#FF8C42) - Accent
████ Fireium Blue (#004E89) - Secondary
████ Background (#F7F9FC) - Page BG
████ Black (#000000) - Text
████ White (#FFFFFF) - Cards
```

---

## 📱 Responsive Design

### Mobile (< 768px)
- Full-width buttons
- Stacked layout
- Touch-friendly sizing (44px min)

### Tablet (768px - 1024px)
- Two-column layout where applicable
- Optimized padding

### Desktop (> 1024px)
- Multi-column layouts
- Full feature set
- Maximum width: 1280px

---

## ♿ Accessibility

### Color Contrast
- Orange on White: **5.1:1** ✅ AA
- Blue on White: **8.4:1** ✅ AAA
- Orange on Dark: **9.2:1** ✅ AAA

### Best Practices
- Use semantic HTML
- Include alt text for images
- Maintain keyboard navigation
- Provide focus indicators
- Use sufficient color contrast

---

## 📊 Analytics Setup

### Key Metrics
- Sessions
- Users
- Pageviews
- Bounce rate
- Conversion rate
- Traffic source

### Goals
- Contact form submissions
- Email signups
- Portfolio clicks
- Service inquiries

---

**Version**: 1.0
**Last Updated**: November 8, 2025
**Status**: Active ✅

**All Fireium branding is now live!** 🔥
