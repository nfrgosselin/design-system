/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { Chart } from '../../../components/data-display/Chart';
import { VictoryBar } from 'victory';

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

describe('Chart', () => {
  it('renders title and description', () => {
    render(
      <Chart title="Test Chart" description="Test Description">
        <VictoryBar data={[{ x: 1, y: 1 }]} />
      </Chart>
    );

    expect(screen.getByText('Test Chart')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { container } = render(
      <Chart size="lg">
        <VictoryBar data={[{ x: 1, y: 1 }]} />
      </Chart>
    );

    const chartContainer = container.firstChild;
    expect(chartContainer).toHaveClass('w-full');
  });

  it('shows legend when specified', () => {
    render(
      <Chart showLegend legendPosition="right">
        <VictoryBar data={[{ x: 1, y: 1 }]} name="Test Series" />
      </Chart>
    );

    // Victory renders SVG text for legend items
    expect(screen.getByText('Test Series')).toBeInTheDocument();
  });

  it('shows grid lines when specified', async () => {
    render(
      <Chart showGrid>
        <VictoryBar data={[{ x: 1, y: 1 }]} />
      </Chart>
    );

    // Wait longer for the chart to render and styles to be applied
    await new Promise(resolve => setTimeout(resolve, 100));

    // Victory renders grid lines as path elements within the VictoryAxis component
    const gridLines = document.querySelectorAll('path[role="presentation"]');
    expect(gridLines.length).toBeGreaterThan(0);
  });

  it('shows axis labels when provided', () => {
    render(
      <Chart xAxisLabel="X Axis" yAxisLabel="Y Axis">
        <VictoryBar data={[{ x: 1, y: 1 }]} />
      </Chart>
    );

    expect(screen.getByText('X Axis')).toBeInTheDocument();
    expect(screen.getByText('Y Axis')).toBeInTheDocument();
  });
});
