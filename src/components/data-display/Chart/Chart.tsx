import React, { useEffect, useRef, useState } from 'react';
import {
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryLegend,
  VictoryContainer,
  VictoryGroup,
} from 'victory';
import { cn } from '@/lib/utils';
import { InternalChart } from './InternalChart'; // Import the new component
import { CustomTooltip } from './CustomTooltip';

// Size configuration following responsive plan
const sizeConfig = {
  sm: { maxWidth: 400, minWidth: 300 },
  md: { maxWidth: 600, minWidth: 400 },
  lg: { maxWidth: 800, minWidth: 600 },
  xl: { maxWidth: 1000, minWidth: 800 },
  full: { maxWidth: Infinity, minWidth: 300 },
} as const;

// Aspect ratio configuration
const aspectRatioConfig = {
  wide: 16 / 9,
  standard: 4 / 3,
  square: 1,
} as const;

// Chart theme configuration
const designSystemTheme = {
  ...VictoryTheme.material,
  colors: {
    colorScale: [
      'hsl(var(--ds-color-chart-1))',
      'hsl(var(--ds-color-chart-2))',
      'hsl(var(--ds-color-chart-3))',
      'hsl(var(--ds-color-chart-4))',
      'hsl(var(--ds-color-chart-5))',
    ],
  },
  axis: {
    style: {
      axis: {
        stroke: 'hsl(var(--stone-300))',
        strokeWidth: 1,
      },
      grid: {
        stroke: 'hsl(var(--stone-200))',
        strokeWidth: 0.5,
        strokeDasharray: '4, 4',
      },
      ticks: {
        stroke: 'hsl(var(--stone-300))',
        size: 5,
        strokeWidth: 1,
      },
      axisLabel: {
        fill: 'transparent', // Hide labels by default
        padding: 36,
      },
      tickLabels: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fill: 'hsl(var(--stone-500))',
        padding: 8,
      },
    },
  },
  line: {
    style: {
      data: {
        strokeWidth: 2,
        interpolation: 'linear',
      },
    },
  },
} as const;

export interface ChartProps {
  /** Chart title displayed above the visualization */
  title?: string;
  /** Descriptive text explaining the chart data */
  description?: string;
  /** Padding between data points and axes */
  domainPadding?: number | { x?: number; y?: number };
  /** Whether to display the chart legend */
  showLegend?: boolean;
  /** Position of the legend ('top', 'bottom', 'left', 'right') */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** Whether to show tooltips on hover */
  showTooltip?: boolean;
  /** Whether to display grid lines */
  showGrid?: boolean;
  /** Label for the x-axis */
  xAxisLabel?: string;
  /** Label for the y-axis */
  yAxisLabel?: string;
  /** Additional CSS class for the chart container */
  className?: string;
  /** Chart content (Victory components) */
  children: React.ReactNode;
  /**
   * Chart aspect ratio that determines width:height relationship
   * @default 'wide'
   */
  aspectRatio?: keyof typeof aspectRatioConfig;
  /**
   * Chart size that determines width:height relationship
   * @default 'md'
   */
  size?: keyof typeof sizeConfig;
}

/**
 * Chart component that handles responsive behavior and design system integration.
 * Calculates dimensions based on container size and passes them to InternalChart.
 */
export const Chart = ({
  title,
  description,
  domainPadding = 20,
  showLegend = false,
  legendPosition = 'right',
  showTooltip = false,
  showGrid = false,
  xAxisLabel,
  yAxisLabel,
  className,
  size = 'md',
  children,
  aspectRatio = 'wide',
}: ChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colorScale = designSystemTheme.colors.colorScale; // Get the scale

  // Calculate dimensions based on container width and configuration
  useEffect(() => {
    if (!containerRef.current) return;

    const calculateDimensions = (containerWidth: number) => {
      const { maxWidth, minWidth } = sizeConfig[size];
      const ratio = aspectRatioConfig[aspectRatio];

      // Clamp width between min and max
      const width = Math.min(Math.max(containerWidth, minWidth), maxWidth);

      // Calculate height based on aspect ratio
      const height = width / ratio;

      return {
        width: Math.floor(width),
        height: Math.floor(height),
      };
    };

    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (!entry) return;

      const newDimensions = calculateDimensions(entry.contentRect.width);
      setDimensions(newDimensions);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [size, aspectRatio]);

  // Configure tooltip container
  const tooltipContainer = showTooltip ? (
    <VictoryVoronoiContainer
      voronoiDimension="x"
      labels={({ datum }) => `${datum.name}`}
      labelComponent={<CustomTooltip />}
    />
  ) : (
    <VictoryContainer />
  );

  // Configure axis styles
  const getAxisStyle = (isHorizontal: boolean) => {
    const baseStyle = {
      ...designSystemTheme.axis.style,
      grid: showGrid ? designSystemTheme.axis.style.grid : { stroke: 'transparent' },
    };

    // Only show and style axis labels if they are provided
    if (xAxisLabel || yAxisLabel) {
      return {
        ...baseStyle,
        axisLabel: {
          fontSize: 14,
          fontFamily: 'var(--font-sans)',
          fill: 'hsl(var(--stone-700))',
          padding: isHorizontal ? 36 : 48,
        },
      };
    }

    return baseStyle;
  };

  // Calculate padding based on configuration and orientation
  const getChartPadding = (isHorizontal: boolean) => ({
    top: 40,
    bottom: showLegend && legendPosition === 'bottom' ? 100 : 60,
    left: isHorizontal ? 140 : 80, // Reduced left padding since we hide labels by default
    right: showLegend && legendPosition === 'right' ? 160 : 40,
  });

  // Determine if chart is horizontal by checking children
  const isHorizontalChart = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.props.horizontal
  );

  // Use orientation-aware styles and padding
  const xAxisStyle = getAxisStyle(isHorizontalChart);
  const yAxisStyle = getAxisStyle(isHorizontalChart);
  const chartPadding = getChartPadding(isHorizontalChart);

  // Configure legend
  const legendComponent = showLegend ? (
    <VictoryLegend
      x={legendPosition === 'right' ? dimensions.width - 150 : 50}
      y={legendPosition === 'bottom' ? dimensions.height - 50 : 10}
      orientation={
        legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal'
      }
      style={{
        labels: {
          fontSize: 12,
          fontFamily: 'var(--font-sans)',
        },
      }}
      data={React.Children.toArray(children).reduce(
        (acc: { name: string; symbol: { fill: string } }[], child) => {
          if (!React.isValidElement(child)) return acc;

          // Handle VictoryGroup children
          if (child.type === VictoryGroup) {
            const groupChildren = React.Children.toArray(child.props.children);
            return [
              ...acc,
              ...groupChildren
                .filter((groupChild): groupChild is React.ReactElement =>
                  React.isValidElement(groupChild)
                )
                .map((groupChild, index) => ({
                  name: groupChild.props.name || `Series ${index + 1}`,
                  symbol: {
                    fill:
                      groupChild.props.style?.data?.fill || colorScale[index % colorScale.length],
                  },
                })),
            ];
          }

          // Handle direct children
          return [
            ...acc,
            {
              name: child.props.name || 'Series',
              symbol: {
                fill: child.props.style?.data?.fill || colorScale[acc.length % colorScale.length],
              },
            },
          ];
        },
        []
      )}
    />
  ) : null;

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full bg-surface border border-stone-200/20 rounded-[--radius] p-4',
        className
      )}
    >
      {/* Title and Description */}
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-2xl font-sans font-bold mb-1 text-brand">{title}</h3>}
          {description && <p className="text-base font-sans text-stone-500">{description}</p>}
        </div>
      )}

      {/* Chart */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <InternalChart
          width={dimensions.width}
          height={dimensions.height}
          padding={chartPadding}
          domainPadding={
            typeof domainPadding === 'number'
              ? { x: domainPadding, y: domainPadding }
              : domainPadding
          }
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          xAxisStyle={xAxisStyle}
          yAxisStyle={yAxisStyle}
          containerComponent={tooltipContainer}
          legendComponent={legendComponent}
          theme={designSystemTheme}
          colorScale={colorScale}
        >
          {React.Children.toArray(children)}
        </InternalChart>
      )}

      {/* Loading State */}
      {(dimensions.width === 0 || dimensions.height === 0) && (
        <div className="w-full aspect-video animate-pulse bg-stone-100 rounded" />
      )}
    </div>
  );
};

export default Chart;
