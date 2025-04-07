import { Stack } from '../components/layout/core/stack';
import { UIHeader } from '../components/typography/ui/UIHeader';
import { Container } from '../components/layout/core/container';
import { Chart } from '../components/data-display/Chart/Chart';
import { BarChart } from '../components/data-display/Chart/BarChart';
import { VictoryLine } from 'victory';

// Sample data series for multiple lines
const dataSeries = {
  revenue: [
    { x: 1, y: 2.0 },
    { x: 2, y: 3.2 },
    { x: 3, y: 5.0 },
    { x: 4, y: 4.5 },
    { x: 5, y: 7.0 },
    { x: 6, y: 8.2 },
  ],
  users: [
    { x: 1, y: 1.0 },
    { x: 2, y: 2.5 },
    { x: 3, y: 3.0 },
    { x: 4, y: 5.0 },
    { x: 5, y: 4.0 },
    { x: 6, y: 6.5 },
  ],
  engagement: [
    { x: 1, y: 3.0 },
    { x: 2, y: 2.0 },
    { x: 3, y: 4.0 },
    { x: 4, y: 3.5 },
    { x: 5, y: 5.0 },
    { x: 6, y: 4.8 },
  ],
  conversion: [
    { x: 1, y: 1.5 },
    { x: 2, y: 2.8 },
    { x: 3, y: 3.2 },
    { x: 4, y: 4.8 },
    { x: 5, y: 5.5 },
    { x: 6, y: 7.0 },
  ],
  retention: [
    { x: 1, y: 2.2 },
    { x: 2, y: 3.0 },
    { x: 3, y: 2.8 },
    { x: 4, y: 4.2 },
    { x: 5, y: 5.8 },
    { x: 6, y: 5.5 },
  ],
  growth: [
    { x: 1, y: 1.8 },
    { x: 2, y: 2.4 },
    { x: 3, y: 3.6 },
    { x: 4, y: 4.0 },
    { x: 5, y: 6.2 },
    { x: 6, y: 7.5 },
  ],
};

// Sample data for bar charts
const salesData = [
  { x: 'Electronics', y: 45000 },
  { x: 'Clothing', y: 28000 },
  { x: 'Books', y: 15000 },
  { x: 'Home', y: 32000 },
  { x: 'Sports', y: 21000 },
];

const quarterlyData = [
  { x: 'Q1', y: 150, category: '2022' },
  { x: 'Q2', y: 230, category: '2022' },
  { x: 'Q3', y: 180, category: '2022' },
  { x: 'Q4', y: 290, category: '2022' },
  { x: 'Q1', y: 200, category: '2023' },
  { x: 'Q2', y: 280, category: '2023' },
  { x: 'Q3', y: 250, category: '2023' },
  { x: 'Q4', y: 340, category: '2023' },
];

const satisfactionData = [
  { x: 'Very Satisfied', y: 45 },
  { x: 'Satisfied', y: 32 },
  { x: 'Neutral', y: 15 },
  { x: 'Dissatisfied', y: 5 },
  { x: 'Very Dissatisfied', y: 3 },
];

export function Workbench() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Stack variant="ui" space="section" className="max-w-7xl mx-auto">
        <section>
          <UIHeader level={1}>Chart Components Example</UIHeader>
          <Stack space="content" className="mt-8">
            {/* Line Chart Example */}
            <div>
              <UIHeader level={2} className="mb-4">
                Line Chart Example
              </UIHeader>
              <Container size="max">
                <Chart
                  title="Performance Metrics Over Time"
                  description="Comparing six key performance indicators using our design system chart colors"
                  size="xl"
                  aspectRatio="wide"
                  showLegend
                  legendPosition="right"
                  xAxisLabel="Time Period"
                  yAxisLabel="Value"
                  showGrid={false}
                  domainPadding={{ y: 50 }}
                >
                  {Object.entries(dataSeries).map(([key, data], index) => {
                    const name = capitalize(key);
                    const dataWithNames = data.map(point => ({
                      ...point,
                      name,
                    }));
                    return (
                      <VictoryLine
                        key={key}
                        data={dataWithNames}
                        name={name}
                        interpolation="linear"
                        style={{ data: { strokeWidth: 2, zIndex: 6 - index } }}
                      />
                    );
                  })}
                </Chart>
              </Container>
            </div>

            {/* Basic Bar Chart */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-4">
                Basic Bar Chart
              </UIHeader>
              <Container size="max">
                <BarChart
                  data={salesData}
                  title="Sales by Department"
                  description="Annual sales figures (in thousands) by department"
                  size="lg"
                  aspectRatio="standard"
                  showDataLabels
                  formatDataLabel={value => `$${(value / 1000).toFixed(0)}K`}
                  barWidth={40}
                  domainPadding={{ x: 40, y: 20 }}
                  color="hsl(var(--ds-color-chart-1))"
                />
              </Container>
            </div>

            {/* Grouped Bar Chart */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-4">
                Grouped Bar Chart
              </UIHeader>
              <Container size="max">
                <BarChart
                  data={quarterlyData}
                  title="Quarterly Revenue Comparison"
                  description="Revenue comparison ($K) between 2022 and 2023 by quarter"
                  size="lg"
                  aspectRatio="standard"
                  showLegend
                  showDataLabels
                  legendPosition="right"
                  barWidth={30}
                  groupSpacing={8}
                  cornerRadius={4}
                  formatDataLabel={value => `$${value}K`}
                  domainPadding={{ x: 60, y: 20 }}
                />
              </Container>
            </div>

            {/* Horizontal Bar Chart */}
            <div className="mt-12">
              <UIHeader level={2} className="mb-4">
                Horizontal Bar Chart
              </UIHeader>
              <Container size="max">
                <BarChart
                  data={satisfactionData}
                  title="Customer Satisfaction Levels"
                  description="Distribution of customer satisfaction ratings"
                  size="lg"
                  aspectRatio="standard"
                  horizontal
                  showDataLabels
                  formatDataLabel={value => `${value}%`}
                  barWidth={30}
                  cornerRadius={4}
                  color="hsl(var(--ds-color-chart-2))"
                  domainPadding={{ x: 20, y: 40 }}
                />
              </Container>
            </div>

            {/* Documentation */}
            <div className="mt-8 p-4 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-600">Bar Chart Features:</p>
              <ul className="mt-2 text-sm text-stone-600 list-disc list-inside space-y-1">
                <li>
                  <strong>Basic Bar Chart:</strong> Simple vertical bars with data labels and
                  currency formatting
                </li>
                <li>
                  <strong>Grouped Bars:</strong> Multiple categories with automatic legend
                  generation
                </li>
                <li>
                  <strong>Horizontal Layout:</strong> Alternative orientation with percentage
                  formatting
                </li>
                <li>
                  <strong>Customization:</strong> Bar width, corner radius, colors, and spacing
                </li>
                <li>
                  <strong>Responsive:</strong> Automatically adjusts to container width with
                  maintained aspect ratio
                </li>
              </ul>
            </div>
          </Stack>
        </section>
      </Stack>
    </div>
  );
}

// Helper function for capitalizing legend labels
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
