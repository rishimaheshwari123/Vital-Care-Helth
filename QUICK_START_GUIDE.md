# Quick Start Guide - VitalCare Design System

## Getting Started

Your VitalCare Health website now has a professional design system! Here's how to use it.

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your improved UI!

## Using the Design System

### 1. Colors

Instead of random color values, use the design tokens:

```jsx
// ❌ Old way
<div className="bg-[#0097a3c3]">

// ✅ New way
<div className="bg-[#0097a3]">  // or use Tailwind's primary color
```

**Available colors:**
- Primary: `#0097a3` (main brand color)
- Accent: `#00BFB3` (highlights)
- Background: `#F0FFFE` (page background)

### 2. Buttons

**Primary Button (Main CTAs):**
```jsx
<button className="bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Book Appointment
</button>
```

**Secondary Button:**
```jsx
<button className="bg-white text-[#0097a3] font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Learn More
</button>
```

### 3. Cards

**Standard Card:**
```jsx
<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transform hover:-translate-y-2 transition-all duration-500">
  {/* Your content */}
</div>
```

**Glass Effect Card:**
```jsx
<div className="glass-effect rounded-xl p-6">
  {/* Your content */}
</div>
```

### 4. Typography

**Headings:**
```jsx
<h1 className="text-5xl lg:text-6xl font-extrabold text-white">
  Main Heading
</h1>

<h2 className="text-4xl font-bold text-[#0097a3]">
  Section Heading
</h2>

<h3 className="text-2xl font-semibold">
  Card Heading
</h3>
```

**Body Text:**
```jsx
<p className="text-lg text-gray-700 leading-relaxed">
  Your content here
</p>
```

### 5. Animations

**Fade In on Load:**
```jsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
}, []);

<div className={`transform transition-all duration-700 ${
  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
}`}>
  Content
</div>
```

**Hover Effects:**
```jsx
<div className="transform hover:scale-105 transition-all duration-300">
  Scales on hover
</div>

<div className="transform hover:-translate-y-2 transition-all duration-500">
  Lifts on hover
</div>
```

### 6. Gradients

**Text Gradient:**
```jsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFB3] to-[#1abbc4]">
  Gradient Text
</span>
```

**Background Gradient:**
```jsx
<div className="bg-gradient-to-r from-[#0097a3] to-[#007a85]">
  Content
</div>
```

## Common Patterns

### Hero Section Pattern
```jsx
<div className="min-h-screen relative">
  {/* Background with overlay */}
  <div className="absolute inset-0 -z-10">
    <Image src={bg} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d3a]/90 to-[#0a1d3a]/60"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 flex items-center min-h-screen">
    {/* Your content */}
  </div>
</div>
```

### Service Card Pattern
```jsx
const [isHovered, setIsHovered] = useState(false);

<div 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
>
  {/* Card content */}
</div>
```

### Trust Badge Pattern
```jsx
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
  <FaCheckCircle className="text-[#00BFB3]" />
  <span className="text-white font-medium">Feature Text</span>
</div>
```

## Spacing Guidelines

Use consistent spacing:
- **xs**: 4px - Tight spacing
- **sm**: 8px - Small gaps
- **md**: 16px - Standard spacing
- **lg**: 24px - Section spacing
- **xl**: 32px - Large sections
- **2xl**: 48px - Major sections

```jsx
<div className="space-y-4">  {/* 16px vertical spacing */}
<div className="gap-6">      {/* 24px gap in flex/grid */}
<div className="p-8">        {/* 32px padding */}
```

## Responsive Design

Always design mobile-first:

```jsx
<div className="
  text-4xl          /* Mobile: 36px */
  md:text-5xl       /* Tablet: 48px */
  lg:text-6xl       /* Desktop: 60px */
">
  Responsive Text
</div>

<div className="
  grid 
  grid-cols-1       /* Mobile: 1 column */
  md:grid-cols-2    /* Tablet: 2 columns */
  lg:grid-cols-4    /* Desktop: 4 columns */
  gap-8
">
  {/* Cards */}
</div>
```

## Accessibility Tips

1. **Always add alt text to images:**
```jsx
<Image src={img} alt="Descriptive text" />
```

2. **Use semantic HTML:**
```jsx
<button> not <div onClick>
<nav> for navigation
<main> for main content
<section> for sections
```

3. **Ensure color contrast:**
- White text on primary colors ✅
- Dark text on white backgrounds ✅
- Avoid light text on light backgrounds ❌

4. **Add focus states:**
```jsx
<button className="focus:outline-none focus:ring-2 focus:ring-[#0097a3] focus:ring-offset-2">
```

## Common Mistakes to Avoid

❌ **Don't:**
- Use random color values
- Mix different animation durations randomly
- Forget hover states
- Ignore mobile responsiveness
- Skip alt text on images

✅ **Do:**
- Use design tokens consistently
- Keep animations smooth (300-500ms)
- Add hover effects to interactive elements
- Test on mobile devices
- Add proper accessibility attributes

## Need Help?

- **Design System Reference**: See `DESIGN_SYSTEM.md`
- **Improvements Made**: See `UI_IMPROVEMENTS.md`
- **Design Tokens**: Check `src/styles/design-tokens.js`
- **Global Styles**: Check `src/app/globals.css`

## Examples in Your Codebase

- **Hero Section**: `src/components/core/home/HeroSection.jsx`
- **Services Cards**: `src/components/core/home/Services.jsx`

Study these files to see the design system in action!

---

**Pro Tip**: When creating new components, copy patterns from the improved Hero and Services components to maintain consistency.
