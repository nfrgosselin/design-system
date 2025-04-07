import { VictoryBar, VictoryLabel, VictoryGroup } from 'victory';
import { Chart } from './Chart';
import type { ChartProps } from './Chart';

export interface BarChartDataPoint {
  /** The x-axis value (typically a category or label) */
  x: string | number | Date;
  /** The y-axis value (the bar height) */
  y: number;
  /** Optional label for the data point */
  label?: string;
  /** Optional category for grouping */
  category?: string;
}

export interface BarChartProps extends Omit<ChartProps, 'children'> {
  /** Array of data points to display */
  data: BarChartDataPoint[];
  /** Width of each bar in pixels */
  barWidth?: number;
  /** Corner radius of the bars in pixels */
  cornerRadius?: number;
  /** Whether to display bars horizontally */
  horizontal?: boolean;
  /** Index of the color to use from the design system chart colors (0-based) */
  colorIndex?: number;
  /** Custom color override. If provided, takes precedence over colorIndex */
  color?: string;
  /** Whether to show data labels on the bars */
  showDataLabels?: boolean;
  /** Custom format function for data labels */
  formatDataLabel?: (value: number) => string;
  /** Space between groups of bars when using categories */
  groupSpacing?: number;
}

/**
 * A semantic bar chart component for displaying categorical data.
 * Ideal for comparing values across categories or showing distributions.
 *
 * @example
 * ```tsx
 * <BarChart
 *   data={[
 *     { x: 'Category A', y: 10 },
 *     { x: 'Category B', y: 20 },
 *     { x: 'Category C', y: 15 }
 *   ]}
 *   title="Sales by Category"
 *   yAxisLabel="Sales ($)"
 * />
 * ```
 */
export const BarChart = ({
  data,
  barWidth = 20,
  cornerRadius = 4,
  horizontal = false,
  colorIndex = 0,
  color,
  showDataLabels = false,
  formatDataLabel = value => value.toString(),
  groupSpacing = 0,
  ...chartProps
}: BarChartProps) => {
  // Group data by category if categories exist
  const categories = Array.from(new Set(data.map(d => d.category))).filter(Boolean);
  const hasCategories = categories.length > 0;

  // Get unique x values
  const uniqueX = Array.from(new Set(data.map(d => d.x)));

  // Create data series for each category or use single series
  const seriesData = hasCategories
    ? categories.map(category => {
        return uniqueX.map(x => {
          const point = data.find(d => d.x === x && d.category === category);
          return point || { x, y: 0, category };
        });
      })
    : [data];

  // Calculate padding
  const calculatedPadding = {
    x: Math.max(barWidth * (hasCategories ? categories.length : 1), 50),
    y: 20,
  };

  const bars = seriesData.map((series, index) => {
    const barColor = color || `hsl(var(--ds-color-chart-${((colorIndex + index) % 5) + 1}))`;

    return (
      <VictoryBar
        key={hasCategories ? categories[index] : 'default'}
        data={series}
        name={hasCategories ? categories[index] : undefined}
        barWidth={barWidth}
        cornerRadius={cornerRadius}
        horizontal={horizontal}
        animate={{
          duration: 200,
          onLoad: { duration: 100 },
        }}
        style={{
          data: { fill: barColor },
          labels: {
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            fill: 'hsl(var(--stone-700))',
          },
        }}
        labels={showDataLabels ? ({ datum }) => formatDataLabel(datum.y) : undefined}
        labelComponent={<VictoryLabel dy={-10} />}
      />
    );
  });

  return (
    <Chart {...chartProps} domainPadding={calculatedPadding}>
      {hasCategories ? <VictoryGroup offset={barWidth + groupSpacing}>{bars}</VictoryGroup> : bars}
    </Chart>
  );
};

export default BarChart;
