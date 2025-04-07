/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { BarChart } from '../../../components/data-display/Chart';

// Mock ResizeObserver
class MockResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    // Trigger the callback with initial dimensions
    const contentRect = {
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      top: 0,
      right: 800,
      bottom: 600,
      left: 0,
      toJSON() {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          top: this.top,
          right: this.right,
          bottom: this.bottom,
          left: this.left,
        };
      },
    };

    this.callback(
      [
        {
          contentRect,
          target,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        } as ResizeObserverEntry,
      ],
      this as unknown as ResizeObserver
    );
  }

  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = MockResizeObserver;

describe('BarChart', () => {
  const basicData = [
    { x: 'A', y: 10 },
    { x: 'B', y: 20 },
    { x: 'C', y: 15 },
  ];

  const groupedData = [
    { x: 'A', y: 10, category: 'Group 1' },
    { x: 'B', y: 20, category: 'Group 1' },
    { x: 'A', y: 15, category: 'Group 2' },
    { x: 'B', y: 25, category: 'Group 2' },
  ];

  it('renders basic bar chart', () => {
    render(<BarChart data={basicData} title="Basic Chart" description="Test Description" />);

    expect(screen.getByText('Basic Chart')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('shows data labels when specified', () => {
    render(<BarChart data={basicData} showDataLabels formatDataLabel={value => `${value}%`} />);

    // Check for formatted data labels
    expect(screen.getByText('10%')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('15%')).toBeInTheDocument();
  });

  it('renders grouped bars with legend', () => {
    render(<BarChart data={groupedData} showLegend legendPosition="right" />);

    // Check for legend items
    expect(screen.getByText('Group 1')).toBeInTheDocument();
    expect(screen.getByText('Group 2')).toBeInTheDocument();
  });

  it('renders horizontal bars', () => {
    const { container } = render(<BarChart data={basicData} horizontal />);

    // In horizontal mode, bars are rotated 90 degrees
    const bars = container.querySelectorAll('path[role="presentation"]');
    expect(bars.length).toBe(basicData.length);
  });

  it('applies custom styling', async () => {
    const { container } = render(
      <BarChart
        data={basicData}
        barWidth={40}
        cornerRadius={8}
        color="hsl(var(--ds-color-chart-1))"
      />
    );

    // Wait for the chart to render
    await new Promise(resolve => setTimeout(resolve, 0));

    // Victory applies styles through CSS classes
    const bars = container.querySelectorAll('path[role="presentation"]');
    expect(bars.length).toBe(basicData.length);

    // Check that the first bar has the correct style
    const firstBar = bars[0];
    expect(firstBar).toHaveStyle({ fill: 'hsl(var(--ds-color-chart-1))' });
  });

  it('handles empty data gracefully', () => {
    render(<BarChart data={[]} title="Empty Chart" />);

    expect(screen.getByText('Empty Chart')).toBeInTheDocument();
    // Chart should render without crashing
  });
});
