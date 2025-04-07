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
