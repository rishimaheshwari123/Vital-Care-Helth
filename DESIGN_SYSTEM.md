# VitalCare Health Design System

## Overview
This document outlines the design system for VitalCare Health, ensuring consistency across all UI components.

## Color Palette

### Primary Colors
- **Primary 500** (Main Brand): `#0097a3` - Use for primary buttons, links, and brand elements
- **Primary 600** (Hover): `#007a85` - Use for hover states
- **Primary 700** (Active): `#005d67` - Use for active/pressed states

### Accent Colors
- **Accent Cyan**: `#00BFB3` - Use for highlights and CTAs
- **Accent Yellow**: `#FDB913` - Use for badges and alerts
- **Accent Red**: `#EF4444` - Use for pricing and urgent indicators

### Background Colors
- **Primary Background**: `#FFFFFF` - Main content areas
- **Secondary Background**: `#F0FFFE` - Page background
- **Dark Background**: `#0A1D3A` - Hero sections and overlays

### Neutral Colors
- Use neutral-50 to neutral-900 for text, borders, and subtle backgrounds

## Typography

### Font Family
- Primary: `"Poppins", sans-serif`

### Font Sizes
- **xs**: 12px - Small labels
- **sm**: 14px - Secondary text
- **base**: 16px - Body text
- **lg**: 18px - Large body text
- **xl**: 20px - Small headings
- **2xl**: 24px - Section subheadings
- **3xl**: 30px - Card headings
- **4xl**: 36px - Page headings
- **5xl**: 48px - Hero headings (mobile)
- **6xl**: 60px - Hero headings (desktop)

### Font Weights
- **Normal**: 400 - Body text
- **Medium**: 500 - Emphasized text
- **Semibold**: 600 - Subheadings
- **Bold**: 700 - Headings
- **Extrabold**: 800 - Hero text

## Spacing Scale
Use consistent spacing: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

## Border Radius
- **sm**: 4px - Small elements
- **md**: 8px - Buttons, inputs
- **lg**: 12px - Cards
- **xl**: 16px - Large cards
- **2xl**: 24px - Hero elements
- **full**: 9999px - Pills, badges

## Shadows
- **sm**: Subtle elevation
- **md**: Standard cards
- **lg**: Elevated cards
- **xl**: Modals, dropdowns
- **2xl**: Hero elements

## Component Guidelines

### Buttons

#### Primary Button
```jsx
<button className="bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Button Text
</button>
```

#### Secondary Button
```jsx
<button className="bg-white text-[#0097a3] font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Button Text
</button>
```

### Cards

#### Service Card
- Use white background
- Border radius: 16px (rounded-2xl)
- Shadow: lg on default, 2xl on hover
- Transform: -translate-y-2 on hover
- Transition: 500ms duration

#### Content Card
- Use white or glass-effect background
- Border radius: 12px (rounded-xl)
- Padding: 24px (p-6)

### Animations

#### Hover Effects
- Scale: 1.05 for buttons
- Translate: -8px up for cards
- Duration: 300ms for buttons, 500ms for cards

#### Page Load Animations
- Fade in with translate: 700ms duration
- Stagger delays: 100ms increments

### Accessibility

#### Focus States
- All interactive elements have visible focus rings
- Focus ring: 2px solid primary-500
- Focus offset: 2px

#### Color Contrast
- Text on primary background: Use white or neutral-50
- Text on white background: Use neutral-800 or darker
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text

#### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover and active states
- Keyboard navigation support

## Usage Examples

### Hero Section
- Full viewport height
- Gradient overlay on background image
- Large, bold typography
- Prominent CTAs with animations
- Trust indicators (badges, icons)

### Services Grid
- Responsive grid: 1 col mobile, 2 cols tablet, 3-4 cols desktop
- Card hover effects with content reveal
- Consistent spacing between cards
- Clear visual hierarchy

### Forms
- Clear labels above inputs
- Validation feedback
- Accessible error messages
- Submit button with loading state

## Best Practices

1. **Consistency**: Always use design tokens from the system
2. **Accessibility**: Test with keyboard navigation and screen readers
3. **Performance**: Optimize images and use lazy loading
4. **Responsive**: Mobile-first approach, test on all breakpoints
5. **Animations**: Keep them subtle and purposeful
6. **White Space**: Don't be afraid of empty space
7. **Hierarchy**: Use size, weight, and color to establish importance

## File Structure
```
src/
├── styles/
│   └── design-tokens.js    # Design system tokens
├── app/
│   └── globals.css         # Global styles and utilities
└── components/
    ├── core/               # Page-specific components
    └── common/             # Reusable components
```

## Resources
- Design tokens: `src/styles/design-tokens.js`
- Global styles: `src/app/globals.css`
- Tailwind config: Uses Tailwind CSS v4
