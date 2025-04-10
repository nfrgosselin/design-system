# Icon Usage Patterns

This guide covers common patterns for using icons in your application, leveraging our design system components.

## Icon + Text Combinations

### Interactive Elements

#### Buttons with Icons

The `Button` component supports icons through its props:

```tsx
import { Button } from '@nathangosselin/design-system';
import { Plus, ArrowRight } from 'lucide-react';

// Left-aligned icon (default)
<Button icon={Plus}>Add Item</Button>

// Right-aligned icon
<Button icon={ArrowRight} iconPosition="right">Continue</Button>

// Icon-only button with tooltip
<Button
  icon={Plus}
  isIconOnly
  aria-label="Add item"
  className="tooltip"
  data-tooltip="Add item"
/>
```

#### Links with Icons

The `Link` component includes icon variants:

```tsx
import { Link } from '@nathangosselin/design-system';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Standalone link with right icon
<Link
  href="/path"
  variant="standalone-icon-right"
  icon={ArrowRight}
>
  View all items
</Link>

// External link
<Link
  href="https://example.com"
  variant="standalone-icon-right"
  icon={ExternalLink}
  target="_blank"
  rel="noopener noreferrer"
>
  External resource
</Link>
```

### Non-Interactive Elements

For non-interactive icon + text combinations, compose using our base components and Tailwind utilities:

```tsx
import { Icon, UIText } from '@nathangosselin/design-system';
import { Calendar } from 'lucide-react';

// Basic combination
<span className="inline-flex items-center gap-2">
  <Icon icon={Calendar} size="sm" />
  <UIText>Event date</UIText>
</span>

// With muted text
<span className="inline-flex items-center gap-2">
  <Icon icon={Calendar} size="sm" className="text-stone-500" />
  <UIText variant="muted">Posted on June 1, 2024</UIText>
</span>
```

## Best Practices

### Spacing

- Use `gap-2` (8px) for standard icon + text spacing in buttons and larger elements
- Use `gap-1.5` (6px) for compact layouts and smaller text
- Use `gap-1` (4px) for very compact layouts with small icons

### Alignment

- Always use `items-center` to vertically align icons with text
- Use `inline-flex` for inline combinations
- Use `flex` for block-level combinations

### Icon Sizing

Match icon sizes to text size:

- `xs` (12px) - For extra small text or tight spaces
- `sm` (16px) - For most UI elements
- `md` (20px) - For headers or emphasis
- `lg` (24px) - For larger UI elements
- `xl` (32px) - For featured content
- `2xl` (40px) - For hero sections or large features

### Accessibility

1. For interactive elements:

   - Use `aria-label` when the icon is the only content
   - Ensure sufficient touch targets (minimum 44x44px)
   - Maintain color contrast ratios

2. For decorative icons:

   - Set `aria-hidden="true"` (handled automatically by our components)
   - Don't rely on color alone to convey meaning

3. For meaningful icons:
   - Provide text alternatives
   - Consider adding tooltips for icon-only buttons

## Examples

### Status Indicators

```tsx
<span className="inline-flex items-center gap-1.5">
  <Icon icon={CheckCircle} size="sm" className="text-success" />
  <UIText variant="default">Task completed</UIText>
</span>
```

### Navigation Items

```tsx
<nav className="flex flex-col gap-2">
  <Link href="/dashboard" variant="standalone-icon-left" icon={Home}>
    Dashboard
  </Link>
  <Link href="/settings" variant="standalone-icon-left" icon={Settings}>
    Settings
  </Link>
</nav>
```

### Form Elements

```tsx
<div className="flex items-center gap-2">
  <Icon icon={Info} size="sm" className="text-stone-500" />
  <UIText variant="muted" size="sm">
    Password must be at least 8 characters
  </UIText>
</div>
```

## Alignment System

Our icon alignment system is built on three pillars:

### 1. Component-Level Defaults

Our components handle alignment automatically:

```tsx
// Button handles alignment internally
<Button icon={Plus}>Add Item</Button>

// Link variants manage alignment
<Link variant="standalone-icon-right" icon={ArrowRight}>
  Continue
</Link>

// Icon component centers content
<Icon icon={Calendar} />
```

### 2. Flex Utilities

Choose the appropriate flex utility based on context:

```tsx
// Inline elements (recommended for text content)
<span className="inline-flex items-center gap-2">
  <Icon icon={Info} size="sm" />
  <span>Helpful tip</span>
</span>

// Block-level elements (recommended for UI sections)
<div className="flex items-center gap-2">
  <Icon icon={User} size="md" />
  <h2>Profile Settings</h2>
</div>

// Complex layouts
<div className="flex items-center justify-between">
  <span className="inline-flex items-center gap-2">
    <Icon icon={Calendar} size="sm" />
    <span>Event details</span>
  </span>
  <Button icon={Edit} isIconOnly aria-label="Edit event" />
</div>
```

### 3. Spacing Scale

Our spacing scale ensures consistent gaps between icons and text:

```tsx
// Tight spacing (4px) - Use for compact UIs
<span className="inline-flex items-center gap-1">
  <Icon icon={Clock} size="xs" />
  <span className="text-xs">2 mins ago</span>
</span>

// Standard spacing (6px) - Use for most UI elements
<span className="inline-flex items-center gap-1.5">
  <Icon icon={Tag} size="sm" />
  <span className="text-sm">Category</span>
</span>

// Relaxed spacing (8px) - Use for larger elements
<div className="flex items-center gap-2">
  <Icon icon={AlertTriangle} size="md" />
  <p className="text-base">Important notice</p>
</div>
```

### Common Patterns

#### 1. Vertical Stacking

```tsx
// Navigation menu
<nav className="flex flex-col gap-2">
  <Link variant="standalone-icon-left" icon={Home}>
    Dashboard
  </Link>
  <Link variant="standalone-icon-left" icon={Settings}>
    Settings
  </Link>
</nav>

// List with icons
<ul className="flex flex-col gap-1.5">
  <li className="inline-flex items-center gap-1.5">
    <Icon icon={Check} size="sm" className="text-success" />
    <span>Feature one</span>
  </li>
  <li className="inline-flex items-center gap-1.5">
    <Icon icon={Check} size="sm" className="text-success" />
    <span>Feature two</span>
  </li>
</ul>
```

#### 2. Horizontal Distribution

```tsx
// Toolbar
<div className="flex items-center gap-4">
  <Button icon={Bold} isIconOnly aria-label="Bold" />
  <Button icon={Italic} isIconOnly aria-label="Italic" />
  <Button icon={Underline} isIconOnly aria-label="Underline" />
</div>

// Stats bar
<div className="flex items-center gap-6">
  <span className="inline-flex items-center gap-2">
    <Icon icon={Eye} size="sm" />
    <span>1.2k views</span>
  </span>
  <span className="inline-flex items-center gap-2">
    <Icon icon={Heart} size="sm" />
    <span>50 likes</span>
  </span>
</div>
```

#### 3. Mixed Content Alignment

```tsx
// Card header with actions
<div className="flex items-center justify-between">
  <div className="inline-flex items-center gap-2">
    <Icon icon={File} size="md" />
    <div className="flex flex-col">
      <h3>Document Title</h3>
      <span className="inline-flex items-center gap-1.5 text-sm text-stone-500">
        <Icon icon={Clock} size="sm" />
        <span>Updated 2h ago</span>
      </span>
    </div>
  </div>
  <Button icon={MoreVertical} isIconOnly aria-label="More options" />
</div>
```
