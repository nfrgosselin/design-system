# Design System Recommendations

## Typography System

### Current Implementation

- Complete token architecture implemented:
  - Base tokens in `typography.css` (--ds-\* prefix)
  - Consumer tokens mapped in `styles.css`
  - Atomic Tailwind utilities (fontSize, lineHeight, letterSpacing)
  - Font sizes using major third scale (1.25)
  - Line heights optimized for different contexts
  - Letter spacing for various type styles
  - Basic prose styles

### Recommended Improvements

#### 1. Create Typography Components Library

```typescript
// Example component structure showing composition of atomic utilities
interface HeadingProps {
  level?: 1 | 2 | 3;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}

// Example implementation showing utility composition
export const Heading = ({ level = 1, eyebrow, children, className = "" }) => {
  const Tag = `h${level}`;

  return (
    <div>
      {eyebrow && (
        <div className="text-sm tracking-widest text-stone-600 leading-normal mb-2">
          {eyebrow}
        </div>
      )}
      <Tag
        className={clsx(
          "font-serif text-stone-900",
          {
            "text-4xl leading-tight tracking-tighter": level === 1,
            "text-3xl leading-tight tracking-tight": level === 2,
            "text-2xl leading-snug tracking-tight": level === 3
          },
          className
        )}
      >
        {children}
      </Tag>
    </div>
  );
};

// Components organized by context
/components/typography/
  narrative/           // Story-driven content
    Heading.tsx       // Article, blog, documentation headings
    Body.tsx         // Article body text, paragraphs
    Quote.tsx        // Blockquotes, testimonials

  interface/          // UI elements
    UITitle.tsx      // Section titles, card headers
    UIText.tsx       // Button text, form labels
    Caption.tsx      // Helper text, metadata

  technical/          // Code and data
    Code.tsx         // Code blocks, inline code
    Data.tsx         // Numbers, statistics, metrics
```

#### 2. Documentation

- Create visual type scale documentation showing:
  - Base utility tokens (fontSize, lineHeight, letterSpacing)
  - How utilities compose into typography patterns
  - Common combinations for different contexts
- Document usage patterns by context:
  - Narrative typography guidelines
  - Interface typography guidelines
  - Technical typography guidelines
- Add responsive typography guidelines
- Document dark mode typography considerations

#### 3. Component Examples

Create example components demonstrating utility composition in real contexts:

- Article layouts (narrative)
  ```jsx
  <Body className="text-lg leading-relaxed tracking-normal">Lead paragraph with larger text</Body>
  ```
- Marketing pages (mixed narrative/interface)
  ```jsx
  <UITitle className="text-2xl leading-snug tracking-tight">Feature Highlight</UITitle>
  ```
- Form layouts (interface)
  ```jsx
  <Label className="text-sm leading-normal tracking-wide">Form Field Label</Label>
  ```
- Navigation patterns (interface)
- Data displays (technical)
- Documentation (mixed narrative/technical)

#### 4. Responsive Typography

Consider implementing:

- Fluid typography scaling
- Breakpoint-specific adjustments
- Container-based typography
- Viewport-aware line heights

## Color System

### Dark Mode Implementation

Current Status:

- Basic dark mode structure implemented
- Stone scale being used for dark backgrounds
- Brightened versions of colors defined for dark mode
- shadcn/ui integration started

Required Decisions:

1. **Color Role Mapping**

   - Review and finalize semantic color roles in dark mode
   - Ensure consistent contrast ratios across all text/background combinations
   - Validate accessibility of interactive states

2. **Product Identity Colors**

   - Confirm brightened color values for dark mode:
     ```css
     /* Current values - need validation */
     --ocean: 178 54% 54%;
     --sunset: 14 100% 70%;
     --sun: 45 100% 72%;
     --marine: 217 55% 63%;
     ```
   - Test brand recognition with adjusted colors
   - Validate interaction states (hover, active)

3. **Surface Hierarchy**

   - Define clear elevation system for dark mode
   - Standardize overlay opacities
   - Document usage guidelines for each surface level

4. **Component-Specific Colors**
   - Review shadcn/ui color tokens:
     ```css
     /* Need final values */
     --primary: 210 40% 98%;
     --secondary: 217.2 32.6% 17.5%;
     --muted: 217.2 32.6% 17.5%;
     --accent: 217.2 32.6% 17.5%;
     ```
   - Test all component variants in dark mode
   - Ensure consistent component hierarchy

Implementation Steps:

1. Create dark mode color palette documentation
2. Test all color combinations for WCAG compliance
3. Update component examples with dark mode screenshots
4. Add dark mode guidelines to component documentation

## Quality & Performance

### 1. Performance Optimization

- Optimize font loading strategies
- Implement font subsetting
- Configure `font-display` properties
- Reduce CSS bundle size

### 2. Accessibility

- Ensure sufficient color contrast
- Maintain minimum font sizes
- Support user font size preferences
- Consider dyslexia-friendly options

### 3. Testing & Validation

- Token usage consistency checks
- Visual regression testing
- Responsive behavior testing
- Dark mode compatibility

## Future Considerations

### 1. Advanced Features

- Variable font support
- Language-specific typography
- Print stylesheet optimization
- Email-safe typography

### 2. Integration Support

- Framework-specific packages
- CMS integration guides
- Migration guides
- Breaking change management
