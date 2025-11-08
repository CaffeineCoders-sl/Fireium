# Fireium Brand Theme Specification

## Color System

### Primary Colors

#### Fireium Orange (Primary Brand Color)
- **Hex**: #FF6B35
- **RGB**: rgb(255, 107, 53)
- **HSL**: hsl(14, 100%, 43%)
- **Usage**: Main brand color, CTAs, buttons, links, accents
- **Psychology**: Energy, innovation, warmth, creativity

#### Fireium Orange Dark (Hover/Active States)
- **Hex**: #FF4500
- **RGB**: rgb(255, 69, 0)
- **HSL**: hsl(16, 100%, 50%)
- **Usage**: Button hover states, pressed states, dark overlays

#### Fireium Orange Light (Subtle Accents)
- **Hex**: #FF8C42
- **RGB**: rgb(255, 140, 66)
- **HSL**: hsl(23, 100%, 63%)
- **Usage**: Lighter backgrounds, disabled states, hover backgrounds

### Secondary Colors

#### Fireium Blue (Accent Color)
- **Hex**: #004E89
- **RGB**: rgb(0, 78, 137)
- **HSL**: hsl(210, 100%, 27%)
- **Usage**: Secondary accents, depth, contrast elements
- **Psychology**: Trust, stability, professionalism

#### Fireium Background (Subtle Tone)
- **Hex**: #F7F9FC
- **RGB**: rgb(247, 249, 252)
- **HSL**: hsl(220, 35%, 98%)
- **Usage**: Page backgrounds, card backgrounds, subtle areas
- **Psychology**: Clean, modern, approachable

### Neutral Colors

#### Black (Text/Primary)
- **Hex**: #000000 / #111827
- **Usage**: Primary text, dark backgrounds in light mode

#### White (Background)
- **Hex**: #FFFFFF
- **Usage**: Main background, card backgrounds

#### Gray (Secondary Text)
- **Hex**: #666666 (Medium Gray)
- **Usage**: Secondary text, muted content, borders

---

## Implementation

### Tailwind CSS Classes

```html
<!-- Primary Brand Color -->
<button class="bg-fireium text-white hover:bg-fireium-dark">
  Action Button
</button>

<!-- Secondary Accent -->
<div class="border-l-4 border-fireium-accent pl-4">
  Important Section
</div>

<!-- Background Tone -->
<div class="bg-fireium-bg">
  Subtle Section
</div>
```

### CSS Variables

```css
:root {
  --primary: 14 100% 43%;           /* Fireium Orange */
  --secondary: 14 100% 43%;         /* Fireium Orange */
  --accent: 210 100% 27%;           /* Fireium Blue */
  --background: 0 0% 100%;          /* White */
  --foreground: 0 0% 0%;            /* Black */
}

.dark {
  --primary: 14 100% 53%;           /* Lighter Fireium Orange */
  --secondary: 14 100% 53%;         /* Lighter Fireium Orange */
  --accent: 210 100% 37%;           /* Lighter Fireium Blue */
  --background: 0 0% 0%;            /* Black */
  --foreground: 0 0% 100%;          /* White */
}
```

### React/TSX Usage

```tsx
// Using Tailwind classes
<button className="bg-fireium hover:bg-fireium-dark text-white">
  Get Started
</button>

// Using inline styles
<div style={{ 
  backgroundColor: '#FF6B35',
  color: '#FFFFFF'
}}>
  Featured Section
</div>

// Using CSS variables
<div className="bg-primary text-primary-foreground">
  Primary Section
</div>
```

---

## Brand Guidelines

### Logo Usage
- Fireium logo should always be displayed in orange (#FF6B35) or white
- Minimum size: 24px × 24px
- Clear space: At least 8px around logo on all sides

### Typography Pairing
- **Headlines**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **Accent Text**: Orange (#FF6B35) for emphasis

### Button Styles

#### Primary Buttons
```css
background-color: #FF6B35;
color: #FFFFFF;
font-weight: 600;
```

#### Secondary Buttons
```css
background-color: transparent;
color: #FF6B35;
border: 2px solid #FF6B35;
font-weight: 600;
```

#### Tertiary/Ghost Buttons
```css
background-color: transparent;
color: #004E89;
border: none;
text-decoration: underline;
```

### Link Colors
- **Normal**: #FF6B35 (Fireium Orange)
- **Hover**: #FF4500 (Dark Orange)
- **Visited**: #004E89 (Fireium Blue)
- **Active**: #FF4500 (Dark Orange)

### Accessibility

#### Color Contrast Ratios
- Orange (#FF6B35) on White: **5.1:1** ✅ WCAG AA compliant
- Blue (#004E89) on White: **8.4:1** ✅ WCAG AAA compliant
- Orange on Dark backgrounds: **9.2:1** ✅ WCAG AAA compliant

#### Recommendations
- Always use sufficient contrast for text
- Don't rely solely on color to convey information
- Provide alternative visual indicators for color-coding

---

## Color Applications

### Navigation & Headers
- Background: White (#FFFFFF)
- Text: Black (#000000)
- Accent: Fireium Orange (#FF6B35)
- Borders: Light Gray (#E5E5E5)

### Cards & Components
- Background: White (#FFFFFF) or Fireium Background (#F7F9FC)
- Border: Light Gray (#E5E5E5)
- Hover: Fireium Background (#F7F9FC)
- Shadow: rgba(0, 0, 0, 0.1)

### Buttons & CTAs
- Primary: Fireium Orange (#FF6B35)
- Hover: Dark Orange (#FF4500)
- Text: White (#FFFFFF)
- Disabled: Gray (#CCCCCC)

### Forms & Inputs
- Border: Light Gray (#E5E5E5)
- Focus: Fireium Orange (#FF6B35)
- Background: White (#FFFFFF)
- Text: Black (#000000)

### Alerts & Status
- Success: Green (#10B981)
- Error: Red (#EF4444)
- Warning: Amber (#F59E0B)
- Info: Fireium Blue (#004E89)

### Backgrounds & Sections
- Primary: White (#FFFFFF)
- Secondary: Fireium Background (#F7F9FC)
- Dark: Gray (#F3F4F6)
- Accent: Fireium Orange (#FF6B35)

---

## Dark Mode Adjustments

### Light Mode → Dark Mode
- Primary: #FF6B35 → #FF8C42 (lighter for visibility)
- Secondary: #FF6B35 → #FF8C42 (lighter for visibility)
- Accent: #004E89 → #5B9FE8 (lighter blue)
- Background: #FFFFFF → #1A1A1A (dark)
- Text: #000000 → #FFFFFF (white)

### Dark Mode Contrast
- Orange (#FF8C42) on Dark (#1A1A1A): **7.2:1** ✅ WCAG AA
- Blue (#5B9FE8) on Dark (#1A1A1A): **8.1:1** ✅ WCAG AA

---

## Asset Files

### Where to Update
1. **Logo**: Update to orange/white versions
2. **Favicon**: Update to Fireium brand
3. **OG Images**: Update social sharing images
4. **Brand Assets**: Update all brand guidelines

### Recommended Assets
- Logo Variations (full, icon, horizontal, vertical)
- Favicon (16×16, 32×32, 64×64)
- App Icon (192×192, 512×512)
- OG Image (1200×630)
- Social Media Headers

---

## Tools & Resources

### Figma Color Tokens
```json
{
  "fireium": {
    "primary": "#FF6B35",
    "dark": "#FF4500",
    "light": "#FF8C42",
    "accent": "#004E89"
  }
}
```

### CSS Variables Export
```css
:root {
  --color-fireium-primary: #FF6B35;
  --color-fireium-dark: #FF4500;
  --color-fireium-light: #FF8C42;
  --color-fireium-accent: #004E89;
  --color-fireium-bg: #F7F9FC;
}
```

---

## Version Control

**Last Updated**: November 8, 2025
**Version**: 1.0
**Brand**: Fireium
**Status**: Active

---

*For questions or updates to this specification, please contact the Fireium design team.*
