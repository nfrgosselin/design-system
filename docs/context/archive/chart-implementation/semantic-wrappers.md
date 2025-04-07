// src/components/data-display/Chart/LineChart.tsx
import React from 'react';
import { VictoryLine, VictoryScatter } from 'victory';
import { Chart, BaseChartProps } from './Chart';

export interface DataPoint {
x: number | string | Date;
y: number;
label?: string;
}

export interface LineChartProps extends Omit<BaseChartProps, 'children'> {
data: DataPoint[];
showPoints?: boolean;
pointSize?: number;
lineWidth?: number;
smooth?: boolean;
color?: string;
}

/\*\*

- LineChart component for time series or continuous data visualization.
  \*/
  export const LineChart = ({
  data,
  showPoints = true,
  pointSize = 5,
  lineWidth = 2,
  smooth = true,
  color = "hsl(var(--chart-1))",
  ...chartProps
  }: LineChartProps) => {
  return (
  <Chart {...chartProps}>
  <VictoryLine
  data={data}
  style={{
            data: {
              stroke: color,
              strokeWidth: lineWidth,
            },
          }}
  interpolation={smooth ? 'catmullRom' : 'linear'}
  />
  {showPoints && (
  <VictoryScatter
  data={data}
  size={pointSize}
  style={{
              data: {
                fill: color,
                stroke: "hsl(var(--surface))",
                strokeWidth: 1,
              },
            }}
  />
  )}
  </Chart>
  );
  };

// src/components/data-display/Chart/BarChart.tsx
import React from 'react';
import { VictoryBar } from 'victory';
import { Chart, BaseChartProps } from './Chart';

export interface BarChartProps extends Omit<BaseChartProps, 'children'> {
data: DataPoint[];
barWidth?: number;
cornerRadius?: number;
horizontal?: boolean;
color?: string;
}

/\*\*

- BarChart component for categorical comparisons.
  \*/
  export const BarChart = ({
  data,
  barWidth = 20,
  cornerRadius = 2,
  horizontal = false,
  color = "hsl(var(--chart-1))",
  ...chartProps
  }: BarChartProps) => {
  return (
  <Chart {...chartProps}>
  <VictoryBar
  data={data}
  horizontal={horizontal}
  barWidth={barWidth}
  cornerRadius={cornerRadius}
  style={{
            data: {
              fill: color,
            },
          }}
  />
  </Chart>
  );
  };

// src/components/data-display/Chart/PieChart.tsx
import React from 'react';
import { VictoryPie } from 'victory';
import { Chart, BaseChartProps } from './Chart';

export interface PieChartProps extends Omit<BaseChartProps, 'children'> {
data: DataPoint[];
innerRadius?: number;
padAngle?: number;
colorScale?: string[];
labelRadius?: number;
}

/\*\*

- PieChart component for part-to-whole relationships.
  \*/
  export const PieChart = ({
  data,
  innerRadius = 0, // Set > 0 for donut chart
  padAngle = 0,
  colorScale = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  ],
  labelRadius,
  ...chartProps
  }: PieChartProps) => {
  return (
  <Chart {...chartProps}>
  <VictoryPie
  data={data}
  innerRadius={innerRadius}
  padAngle={padAngle}
  colorScale={colorScale}
  labelRadius={labelRadius}
  style={{
            labels: {
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fill: "hsl(var(--stone-700))",
            }
          }}
  />
  </Chart>
  );
  };

// src/components/data-display/Chart/AreaChart.tsx
import React from 'react';
import { VictoryArea } from 'victory';
import { Chart, BaseChartProps } from './Chart';

export interface AreaChartProps extends Omit<BaseChartProps, 'children'> {
data: DataPoint[];
smooth?: boolean;
color?: string;
opacity?: number;
}

/\*\*

- AreaChart component for showing cumulative values or ranges.
  \*/
  export const AreaChart = ({
  data,
  smooth = true,
  color = "hsl(var(--chart-1))",
  opacity = 0.5,
  ...chartProps
  }: AreaChartProps) => {
  return (
  <Chart {...chartProps}>
  <VictoryArea
  data={data}
  interpolation={smooth ? 'catmullRom' : 'linear'}
  style={{
            data: {
              fill: color,
              fillOpacity: opacity,
              stroke: color,
              strokeWidth: 2,
            },
          }}
  />
  </Chart>
  );
  };

// src/components/data-display/Chart/ScatterChart.tsx
import React from 'react';
import { VictoryScatter } from 'victory';
import { Chart, BaseChartProps } from './Chart';

export interface ScatterDataPoint extends DataPoint {
size?: number;
}

export interface ScatterChartProps extends Omit<BaseChartProps, 'children'> {
data: ScatterDataPoint[];
pointSize?: number;
color?: string;
bubbleProperty?: keyof ScatterDataPoint;
minBubbleSize?: number;
maxBubbleSize?: number;
}

/\*\*

- ScatterChart component for correlation analysis.
  \*/
  export const ScatterChart = ({
  data,
  pointSize = 5,
  color = "hsl(var(--chart-1))",
  bubbleProperty,
  minBubbleSize = 3,
  maxBubbleSize = 20,
  ...chartProps
  }: ScatterChartProps) => {
  return (
  <Chart {...chartProps}>
  <VictoryScatter
  data={data}
  size={pointSize}
  bubbleProperty={bubbleProperty}
  minBubbleSize={minBubbleSize}
  maxBubbleSize={maxBubbleSize}
  style={{
            data: {
              fill: color,
              stroke: "hsl(var(--surface))",
              strokeWidth: 1,
            },
          }}
  />
  </Chart>
  );
  };

// Export all chart types from an index file
// src/components/data-display/Chart/index.ts
export _ from './Chart';
export _ from './LineChart';
export _ from './BarChart';
export _ from './PieChart';
export _ from './AreaChart';
export _ from './ScatterChart';

# Semantic Chart Wrappers

## Overview

Semantic wrappers represent the highest layer of our chart architecture, providing domain-specific components that abstract away the technical details of chart implementation.

## Purpose

- Provide business-domain interfaces
- Encapsulate common chart configurations
- Handle data transformation
- Implement domain-specific responsive strategies
- Enforce consistency across similar visualizations

## Common Wrapper Types

### TimeSeriesChart

```typescript
interface TimeSeriesChartProps {
  // Data
  data: TimeSeriesData;
  dateRange: DateRange;

  // Display
  aggregation?: 'hour' | 'day' | 'week' | 'month';
  showTrendline?: boolean;

  // Formatting
  valueFormat?: (value: number) => string;
  dateFormat?: string;

  // Responsive
  size?: keyof typeof chartSizes;
  aspectRatio?: keyof typeof aspectRatios;
}

function TimeSeriesChart({
  data,
  dateRange,
  aggregation = 'day',
  showTrendline = false,
  size = 'lg',
  aspectRatio = 'wide',
  ...props
}: TimeSeriesChartProps) {
  const processedData = useTimeSeriesProcessing(data, {
    dateRange,
    aggregation,
  });

  return (
    <Chart
      size={size}
      aspectRatio={aspectRatio}
      title={props.title}
      description={props.description}
    >
      <VictoryLine data={processedData} />
      {showTrendline && <VictoryLine data={calculateTrendline(processedData)} />}
    </Chart>
  );
}
```

### MetricsChart

```typescript
interface MetricsChartProps {
  // Data
  metric: MetricData;
  comparison?: 'previous' | 'target';

  // Display
  format?: 'percentage' | 'currency' | 'number';
  showChange?: boolean;

  // Responsive (defaults to smaller sizes)
  size?: keyof typeof chartSizes;
  aspectRatio?: keyof typeof aspectRatios;
}

function MetricsChart({
  metric,
  comparison = 'previous',
  size = 'sm',
  aspectRatio = 'standard',
  ...props
}: MetricsChartProps) {
  return (
    <Chart
      size={size}
      aspectRatio={aspectRatio}
      title={props.title}
      description={props.description}
    >
      {/* Chart implementation */}
    </Chart>
  );
}
```

## Responsive Strategies

Semantic wrappers can implement different responsive strategies based on their use case:

### 1. Breakpoint-Based

```typescript
function DashboardChart({ data }) {
  return (
    <>
      <div className="sm:hidden">
        <Chart size="sm" aspectRatio="standard" data={data} />
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

### 2. Container-Query Based

```typescript
function MetricsPanel({ data }) {
  return (
    <div className="@container">
      <Chart
        size={useContainerQuery({
          '@sm': 'sm',
          '@md': 'md',
          '@lg': 'lg',
        })}
        aspectRatio="standard"
        data={data}
      />
    </div>
  );
}
```

### 3. Grid-Based

```typescript
function AnalyticsDashboard({ metrics }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map(metric => (
        <MetricsChart
          key={metric.id}
          metric={metric}
          size="full"
          aspectRatio="standard"
        />
      ))}
    </div>
  );
}
```

## Best Practices

1. **Default Configuration**

   - Provide sensible defaults for all props
   - Choose appropriate size/aspect ratio defaults for the use case
   - Document why defaults were chosen

2. **Data Processing**

   - Handle data transformation within the wrapper
   - Provide clear error states for invalid data
   - Consider loading states for async data

3. **Responsive Behavior**

   - Choose responsive strategy based on use case
   - Document responsive behavior
   - Test across different container sizes

4. **Type Safety**

   - Use TypeScript for prop definitions
   - Provide proper types for data structures
   - Use const assertions for configurations

5. **Documentation**
   - Document domain-specific props clearly
   - Provide usage examples
   - Explain responsive behavior

## Testing

```typescript
describe('TimeSeriesChart', () => {
  it('processes data correctly', () => {
    // Test data transformation
  });

  it('handles different date ranges', () => {
    // Test date handling
  });

  it('responds to container size changes', () => {
    // Test responsive behavior
  });

  it('shows appropriate loading states', () => {
    // Test loading behavior
  });
});
```

## Benefits

- **Domain Focus**: Props and behavior match business domain
- **Consistency**: Enforced through encapsulation
- **Maintainability**: Changes can be made at domain level
- **Reusability**: Common patterns are packaged
- **Type Safety**: Domain-specific types
