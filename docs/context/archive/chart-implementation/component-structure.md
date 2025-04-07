// src/components/data-display/Chart/Chart.tsx
import React from 'react';
import {
VictoryChart,
VictoryTheme,
VictoryAxis,
VictoryTooltip,
VictoryVoronoiContainer,
VictoryLabel,
VictoryLegend
} from 'victory';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Chart container styles using your design system tokens
const chartContainerStyles = cva(
"w-full transition-transform duration-base ease-out border-subtle border rounded-lg p-4 bg-surface",
{
variants: {
size: {
sm: "max-h-48",
md: "max-h-64",
lg: "max-h-96",
xl: "max-h-[32rem]",
full: "h-full",
},
},
defaultVariants: {
size: "md",
},
}
);

// Define chart theme based on your design tokens
const designSystemTheme = {
...VictoryTheme.material, // Start with Material as base
colors: {
// Using your chart color variables
colorScale: [
"hsl(var(--chart-1))",
"hsl(var(--chart-2))",
"hsl(var(--chart-3))",
"hsl(var(--chart-4))",
"hsl(var(--chart-5))",
]
},
axis: {
style: {
axis: {
stroke: "hsl(var(--stone-300))",
strokeWidth: 1,
},
grid: {
stroke: "hsl(var(--stone-200))",
strokeWidth: 0.5,
strokeDasharray: "4, 4",
},
tickLabels: {
fontFamily: "var(--font-sans)",
fontSize: 12,
fill: "hsl(var(--stone-500))",
padding: 8,
},
},
},
tooltip: {
style: {
fontFamily: "var(--font-sans)",
fontSize: 12,
padding: 8,
},
flyoutStyle: {
stroke: "hsl(var(--stone-300))",
strokeWidth: 1,
fill: "hsl(var(--surface))",
filter: "drop-shadow(var(--shadow-level-1))",
},
},
legend: {
style: {
labels: {
fontFamily: "var(--font-sans)",
fontSize: 12,
fill: "hsl(var(--stone-700))",
},
},
},
};

export interface BaseChartProps extends VariantProps<typeof chartContainerStyles> {
title?: string;
description?: string;
height?: number;
width?: number;
domainPadding?: number | { x: number; y: number };
showLegend?: boolean;
legendPosition?: 'top' | 'bottom' | 'left' | 'right';
showTooltip?: boolean;
showGrid?: boolean;
xAxisLabel?: string;
yAxisLabel?: string;
className?: string;
children: React.ReactNode;
}

# Chart Component Structure

## Overview

The chart system follows a three-layer architecture that separates concerns and provides a clear upgrade path from low-level implementation to high-level semantic usage.

```
Semantic Wrappers (High Level)
         ↓
    Chart (Mid Level)
         ↓
  InternalChart (Low Level)
```

## Layer 1: InternalChart

The foundation layer that handles direct interaction with the Victory library.

### Responsibilities

- Raw chart rendering
- Victory component configuration
- Axis management
- Grid and styling application
- Event handling

### Props Interface

```typescript
interface InternalChartProps {
  // Dimensions
  width: number;
  height: number;

  // Victory Configuration
  theme: VictoryTheme;
  padding: ChartPadding;
  containerComponent: React.ReactElement;

  // Axes
  xAxisLabel?: string;
  yAxisLabel?: string;
  xAxisStyle: VictoryAxisStyle;
  yAxisStyle: VictoryAxisStyle;
  gridStyle: VictoryGridStyle;

  // Content
  children: React.ReactNode;
}
```

### Key Characteristics

- No opinions about sizing or responsiveness
- Takes explicit dimensions
- Purely functional (given same props, renders same chart)
- No direct coupling to design system tokens
- No layout management

## Layer 2: Chart

The main component that users interact with directly. Handles design system integration and responsive behavior.

### Responsibilities

- Responsive container management
- Size preset handling
- Aspect ratio enforcement
- Layout structure (title, description)
- Design system token integration
- Accessibility features

### Props Interface

```typescript
interface ChartProps {
  // Sizing & Layout
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  aspectRatio?: 'wide' | 'standard' | 'square';

  // Content
  title?: string;
  description?: string;
  children: React.ReactNode;

  // Configuration
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;

  // Customization
  className?: string;
  style?: React.CSSProperties;
}
```

### Key Characteristics

- Design system aware
- Handles responsive behavior
- Provides semantic size presets
- Manages layout and spacing
- Enforces consistent styling

## Layer 3: Semantic Wrappers

Domain-specific components that provide pre-configured charts for specific use cases.

### Examples

```typescript
// Time Series Chart
interface TimeSeriesChartProps {
  data: TimeSeriesData;
  dateRange: DateRange;
  aggregation?: 'hour' | 'day' | 'week' | 'month';
  showTrendline?: boolean;
}

// Metrics Chart
interface MetricsChartProps {
  metric: MetricData;
  comparison?: 'previous' | 'target';
  format?: 'percentage' | 'currency' | 'number';
}
```

### Key Characteristics

- Business logic integration
- Domain-specific defaults
- Pre-configured for specific use cases
- Higher-level props abstraction

## Usage Flow

1. **For Basic Charts**

   ```typescript
   <Chart size="lg" aspectRatio="wide">
     <VictoryLine data={data} />
   </Chart>
   ```

2. **For Specific Use Cases**
   ```typescript
   <TimeSeriesChart
     data={salesData}
     dateRange={{ start, end }}
     aggregation="week"
   />
   ```

## Implementation Notes

- Each layer should only communicate with its immediate neighbors
- Props should become more domain-specific as you move up the layers
- Configuration becomes more opinionated at higher layers
- Lower layers should remain flexible and unopinionated
- Testing becomes more integration-focused at higher layers

## Benefits

- **Separation of Concerns**: Each layer has a clear responsibility
- **Flexibility**: Can use any layer depending on needs
- **Maintainability**: Changes at one layer don't affect others
- **Reusability**: Lower layers can support multiple higher-level implementations
- **Type Safety**: Each layer has its own well-defined interface

/\*\*

- Base Chart component that provides consistent styling and behavior
- for all chart types in the design system.
  \*/
  export const Chart = ({
  title,
  description,
  height = 300,
  width = 600,
  domainPadding = 20,
  showLegend = false,
  legendPosition = 'bottom',
  showTooltip = true,
  showGrid = true,
  xAxisLabel,
  yAxisLabel,
  className,
  size,
  children,
  }: BaseChartProps) => {
  const containerClass = cn(chartContainerStyles({ size }), className);

// Configure container based on props
const containerComponent = showTooltip ? (
<VictoryVoronoiContainer
voronoiDimension="x"
labels={({ datum }) => `${datum.x}: ${datum.y}`}
labelComponent={
<VictoryTooltip
          cornerRadius={4}
          flyoutPadding={8}
          style={designSystemTheme.tooltip.style}
          flyoutStyle={designSystemTheme.tooltip.flyoutStyle}
        />
}
/>
) : undefined;

// Configure legend based on props
const legendComponent = showLegend ? (
<VictoryLegend
x={legendPosition === 'right' ? width - 150 : 50}
y={legendPosition === 'bottom' ? height - 30 : 10}
orientation={
legendPosition === 'left' || legendPosition === 'right'
? 'vertical'
: 'horizontal'
}
style={designSystemTheme.legend.style}
data={[]} // Will be provided by child components
/>
) : null;

// Determine grid style based on showGrid prop
const gridStyle = showGrid
? designSystemTheme.axis.style.grid
: { stroke: "transparent" };

return (

<div className={containerClass} aria-labelledby={title ? "chart-title" : undefined}>
{title && (
<h3 id="chart-title" className="text-lg font-serif font-semibold mb-2">
{title}
</h3>
)}
{description && (
<p className="text-sm text-stone-500 mb-4">{description}</p>
)}

      <VictoryChart
        theme={designSystemTheme}
        height={height}
        width={width}
        domainPadding={domainPadding}
        containerComponent={containerComponent}
      >
        <VictoryAxis
          label={xAxisLabel}
          style={{
            ...designSystemTheme.axis.style,
            grid: gridStyle,
            axisLabel: {
              padding: 30,
              fontSize: 14,
              fontFamily: "var(--font-sans)",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={yAxisLabel}
          style={{
            ...designSystemTheme.axis.style,
            grid: gridStyle,
            axisLabel: {
              padding: 45,
              fontSize: 14,
              fontFamily: "var(--font-sans)",
            },
          }}
        />

        {legendComponent}
        {children}
      </VictoryChart>
    </div>

);
};

export default Chart;
