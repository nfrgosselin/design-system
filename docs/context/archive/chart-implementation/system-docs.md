# Chart Component System

A comprehensive data visualization system built with React, Victory, and our design system tokens.

## Design Philosophy

The chart component system follows the core design principles established in our design system:

1. **Purposeful Minimalism**: Charts are clean, focused on the data, and free of unnecessary decoration.
2. **Material Honesty**: Visualizations embrace the digital medium with smooth interactions and clean rendering.
3. **Refined Details**: Typography, spacing, and colors are carefully considered for optimal readability.
4. **Systematic Craft**: Components work as a cohesive system with consistent API and styling.
5. **Timeless Over Trendy**: Focuses on proven data visualization principles rather than decorative trends.

## Component Architecture

The chart system follows a layered architecture:

```
BaseChart (Chart.tsx)
├── LineChart
├── BarChart
├── PieChart
├── AreaChart
└── ScatterChart
```

### Base Chart

The `Chart` component serves as the foundation for all chart types, handling:

- Responsive container behavior
- Consistent styling through design tokens
- Axes, tooltips, and legends
- Accessibility considerations

### Semantic Wrappers

Each specific chart type is implemented as a semantic wrapper around the base component:

- **LineChart**: For time series and continuous data
- **BarChart**: For categorical comparisons
- **PieChart**: For part-to-whole relationships
- **ScatterChart**: For correlation analysis
- **AreaChart**: For cumulative values or ranges

## Design Token Integration

The chart system leverages our design tokens for consistent styling:

- **Colors**: Uses the chart color palette defined in `colors.css`
- **Typography**: Applies font family, sizes, and weights from `typography.css`
- **Spacing**: Follows the spacing scale from `spacing.css`
- **Animation**: Respects the animation durations and easing from `animation.css`
- **Shadows**: Uses the minimal elevation approach from `elevation.css`

## Usage Guidelines

### When to Use Each Chart Type

- **Line Chart**: Use for showing trends over time or continuous data.
- **Bar Chart**: Use for comparing quantities across categories.
- **Pie Chart**: Use sparingly, and only when showing parts of a whole (proportions).
- **Area Chart**: Use for cumulative values or emphasizing volume.
- **Scatter Chart**: Use for showing correlation between two variables.

### Accessibility Considerations

- All charts include proper `aria` attributes
- Interactive elements have appropriate focus states
- Color combinations maintain sufficient contrast
- Important information is not conveyed by color alone

## API Reference

### Base Chart Props

| Prop             | Type             | Default  | Description                                               |
| ---------------- | ---------------- | -------- | --------------------------------------------------------- |
| `title`          | string           | -        | Chart title displayed above the visualization             |
| `description`    | string           | -        | Descriptive text explaining the chart data                |
| `height`         | number           | 300      | Height of the chart in pixels                             |
| `width`          | number           | 600      | Width of the chart in pixels                              |
| `domainPadding`  | number \| object | 20       | Padding between data and axes                             |
| `showLegend`     | boolean          | false    | Whether to display the chart legend                       |
| `legendPosition` | string           | 'bottom' | Position of the legend ('top', 'bottom', 'left', 'right') |
| `showTooltip`    | boolean          | true     | Whether to show tooltips on hover                         |
| `showGrid`       | boolean          | true     | Whether to display grid lines                             |
| `xAxisLabel`     | string           | -        | Label for the x-axis                                      |
| `yAxisLabel`     | string           | -        | Label for the y-axis                                      |
| `size`           | string           | 'md'     | Chart size ('sm', 'md', 'lg', 'xl', 'full')               |
| `className`      | string           | -        | Additional CSS class for the chart container              |

### LineChart Specific Props

| Prop         | Type        | Default | Description                               |
| ------------ | ----------- | ------- | ----------------------------------------- |
| `data`       | DataPoint[] | -       | Array of data points to visualize         |
| `showPoints` | boolean     | true    | Whether to display points along the line  |
| `pointSize`  | number      | 5       | Size of the points in pixels              |
| `lineWidth`  | number      | 2       | Width of the line in pixels               |
| `smooth`     | boolean     | true    | Whether to use smooth curve interpolation |
| `color`      | string      | chart-1 | Color for the line                        |

### BarChart Specific Props

| Prop           | Type        | Default | Description                       |
| -------------- | ----------- | ------- | --------------------------------- |
| `data`         | DataPoint[] | -       | Array of data points to visualize |
| `barWidth`     | number      | 20      | Width of each bar in pixels       |
| `cornerRadius` | number      | 2       | Radius for bar corners            |
| `horizontal`   | boolean     | false   | Whether bars should be horizontal |
| `color`        | string      | chart-1 | Color for the bars                |

### PieChart Specific Props

| Prop          | Type        | Default     | Description                            |
| ------------- | ----------- | ----------- | -------------------------------------- |
| `data`        | DataPoint[] | -           | Array of data points to visualize      |
| `innerRadius` | number      | 0           | Inner radius (0 for pie, >0 for donut) |
| `padAngle`    | number      | 0           | Angle between slices                   |
| `colorScale`  | string[]    | chart-1...5 | Array of colors for slices             |
| `labelRadius` | number      | -           | Distance of labels from center         |

### AreaChart Specific Props

| Prop      | Type        | Default | Description                               |
| --------- | ----------- | ------- | ----------------------------------------- |
| `data`    | DataPoint[] | -       | Array of data points to visualize         |
| `smooth`  | boolean     | true    | Whether to use smooth curve interpolation |
| `color`   | string      | chart-1 | Color for the area                        |
| `opacity` | number      | 0.5     | Opacity of the fill color                 |

### ScatterChart Specific Props

| Prop             | Type               | Default | Description                       |
| ---------------- | ------------------ | ------- | --------------------------------- |
| `data`           | ScatterDataPoint[] | -       | Array of data points to visualize |
| `pointSize`      | number             | 5       | Size of points in pixels          |
| `color`          | string             | chart-1 | Color for the points              |
| `bubbleProperty` | string             | -       | Property to use for bubble sizing |
| `minBubbleSize`  | number             | 3       | Minimum bubble size               |
| `maxBubbleSize`  | number             | 20      | Maximum bubble size               |

## Examples

See the `ChartExamples.tsx` file for comprehensive examples of all chart types and their variants.

## Installation

1. Install Victory:

   ```
   npm install victory
   ```

2. Import desired chart components:

   ```jsx
   import { LineChart, BarChart } from '@/components/data-display/Chart';
   ```

3. Use in your components:
   ```jsx
   <LineChart title="Monthly Sales" data={salesData} xAxisLabel="Month" yAxisLabel="Sales ($)" />
   ```

## Extension Guidelines

When extending the chart system:

1. Maintain the layered architecture pattern
2. Respect the design system tokens for visual consistency
3. Ensure new charts have appropriate accessibility features
4. Document any new props or configurations
5. Consider adding new chart types as semantic wrappers
