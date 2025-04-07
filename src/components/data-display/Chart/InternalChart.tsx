import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryThemeDefinition,
  VictoryContainerProps,
  VictoryStyleObject,
  VictoryLabelStyleObject,
  VictoryBarProps,
  VictoryLineProps,
  VictoryScatterProps,
} from 'victory';

interface AxisStyle {
  axis?: VictoryStyleObject;
  axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
  grid?: VictoryStyleObject;
  ticks?: VictoryStyleObject;
  tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
}

interface InternalChartProps {
  // Dimensions (explicit pixels)
  width: number;
  height: number;

  // Victory Configuration
  theme: VictoryThemeDefinition;
  colorScale: readonly string[];
  padding: { top: number; bottom: number; left: number; right: number };
  domainPadding?: number | { x?: number; y?: number };

  // Axis Configuration
  xAxisLabel?: string;
  yAxisLabel?: string;
  xAxisStyle: AxisStyle;
  yAxisStyle: AxisStyle;

  // Components
  containerComponent: React.ReactElement<VictoryContainerProps>;
  legendComponent?: React.ReactElement | null;
  children: React.ReactNode;
}

type VictoryComponentProps = VictoryBarProps | VictoryLineProps | VictoryScatterProps;

/**
 * InternalChart handles the pure rendering of Victory components.
 * It takes explicit dimensions and styling configuration, with no opinions
 * about responsiveness or design system integration.
 */
export const InternalChart = ({
  width,
  height,
  theme,
  colorScale,
  padding,
  domainPadding,
  xAxisLabel,
  yAxisLabel,
  xAxisStyle,
  yAxisStyle,
  containerComponent,
  legendComponent,
  children,
}: InternalChartProps) => {
  if (width <= 0 || height <= 0) return null;

  // Map over children to inject color styles
  const childrenWithColors = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    // Get the color for this child using the index and colorScale
    const color = colorScale[index % colorScale.length];

    // Clone the child and merge the color into its style
    // Preserve existing styles (like strokeWidth, zIndex from workbench.tsx)
    const existingStyle = child.props.style || {};
    const dataStyle = existingStyle.data || {};

    return React.cloneElement(child as React.ReactElement<VictoryComponentProps>, {
      style: {
        ...existingStyle,
        data: {
          ...dataStyle,
          stroke: color,
        },
      },
    });
  });

  return (
    <VictoryChart
      theme={theme}
      width={width}
      height={height}
      padding={padding}
      domainPadding={domainPadding}
      containerComponent={containerComponent}
      scale={{ x: 'linear', y: 'linear' }}
      standalone={true}
    >
      <VictoryAxis label={xAxisLabel} style={xAxisStyle} />
      <VictoryAxis dependentAxis label={yAxisLabel} style={yAxisStyle} />
      {childrenWithColors}
      {legendComponent}
    </VictoryChart>
  );
};

export default InternalChart;
