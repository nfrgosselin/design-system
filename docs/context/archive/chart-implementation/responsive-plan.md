System-Level Recommendations
For your design system, I recommend these strategies:

- Implement aspect ratio control in the base component to maintain visual consistency across chart types
- Set default dimensions but make them responsive through ResizeObserver
- Add min/max constraints to prevent extreme sizing issues:
  jsxCopywidth: Math.min(Math.max(containerWidth, 300), 1200)

- Define standard aspect ratios as part of your design system tokens:
  tsxCopy// In your design tokens
  '--ds-chart-aspect-ratio-wide': '2/1',
  '--ds-chart-aspect-ratio-standard': '3/2',
  '--ds-chart-aspect-ratio-square': '1/1',

This approach ensures your charts will size appropriately based on their container while maintaining consistent design principles across your application.

---

# Chart Responsive Implementation Plan

## Responsive Strategy

The responsive behavior is handled at the Chart (mid-level) layer, with the following key aspects:

1. **Container-Based Sizing**

   - Chart responds to its container's dimensions
   - Uses ResizeObserver for live updates
   - Maintains aspect ratio constraints

2. **Size Presets**

   - Predefined maximum widths
   - Consistent aspect ratios
   - Tailwind class integration

3. **Breakpoint Integration**
   - Optional breakpoint-based size switching
   - Semantic wrapper control over responsive behavior
   - Container query support where needed

## Implementation by Layer

### Layer 1: InternalChart

- Accepts explicit width/height
- No responsive behavior
- Pure rendering based on given dimensions

### Layer 2: Chart

- Manages responsive container
- Handles size calculations
- Enforces aspect ratios
- Provides size presets
- Passes calculated dimensions to InternalChart

### Layer 3: Semantic Wrappers

- Can implement custom responsive strategies
- May switch sizes based on breakpoints
- Can override default responsive behavior

## Size Presets

```typescript
const chartSizes = {
  sm: {
    maxWidth: 400,
    className: 'max-w-[400px]',
  },
  md: {
    maxWidth: 600,
    className: 'max-w-[600px]',
  },
  lg: {
    maxWidth: 800,
    className: 'max-w-[800px]',
  },
  xl: {
    maxWidth: 1000,
    className: 'max-w-[1000px]',
  },
  full: {
    maxWidth: undefined,
    className: 'w-full',
  },
} as const;
```

## Aspect Ratios

```typescript
const aspectRatios = {
  wide: {
    ratio: 16 / 9,
    className: 'aspect-[16/9]',
  },
  standard: {
    ratio: 4 / 3,
    className: 'aspect-[4/3]',
  },
  square: {
    ratio: 1,
    className: 'aspect-square',
  },
} as const;
```

## Implementation Steps

1. **Container Setup**

   ```typescript
   function Chart({ size, aspectRatio, ...props }) {
     const containerRef = useRef<HTMLDivElement>(null);
     const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
     // ... ResizeObserver setup
   }
   ```

2. **Dimension Calculation**

   ```typescript
   const calculateDimensions = (containerWidth: number) => {
     const sizeConfig = chartSizes[size];
     const aspectConfig = aspectRatios[aspectRatio];

     const width = Math.min(containerWidth, sizeConfig.maxWidth ?? containerWidth);
     const height = width / aspectConfig.ratio;

     return { width, height };
   };
   ```

3. **Responsive Container**
   ```typescript
   <div
     ref={containerRef}
     className={cn(
       sizeConfig.className,
       aspectConfig.className,
       'w-full'
     )}
   >
     {dimensions.width > 0 && (
       <InternalChart
         width={dimensions.width}
         height={dimensions.height}
         {...props}
       />
     )}
   </div>
   ```

## Usage Examples

1. **Basic Responsive Chart**

   ```typescript
   <Chart size="md" aspectRatio="wide">
     <VictoryLine data={data} />
   </Chart>
   ```

2. **Breakpoint-Based Sizing**

   ```typescript
   function TimeSeriesChart({ data }) {
     return (
       <>
         <div className="sm:hidden">
           <Chart size="sm" aspectRatio="wide" data={data} />
         </div>
         <div className="hidden sm:block lg:hidden">
           <Chart size="md" aspectRatio="wide" data={data} />
         </div>
         <div className="hidden lg:block">
           <Chart size="lg" aspectRatio="wide" data={data} />
         </div>
       </>
     );
   }
   ```

3. **Container Query Usage**
   ```typescript
   <div className="@container">
     <Chart
       size={useContainerQuery({
         '@sm': 'sm',
         '@md': 'md',
         '@lg': 'lg',
       })}
       aspectRatio="wide"
     >
       <VictoryLine data={data} />
     </Chart>
   </div>
   ```

## Benefits

- Clear separation of responsive concerns
- Consistent sizing across application
- Flexible implementation options
- Type-safe configuration
- Design system integration
