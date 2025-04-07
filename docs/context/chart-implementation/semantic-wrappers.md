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
