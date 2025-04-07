import { VictoryTooltipProps } from 'victory';

// Props passed by Victory to the labelComponent
interface CustomLabelProps extends VictoryTooltipProps {
  x?: number;
  y?: number;
  datum?: {
    childName?: string;
    y?: number;
  };
}

// This component now renders SVG elements directly, using foreignObject for HTML content
export const CustomTooltip = (props: CustomLabelProps) => {
  const { x = 0, y = 0, datum } = props;

  if (!datum) return null;

  // Get values from datum
  const name = datum.childName?.replace('_line', '') ?? 'N/A';
  const value = datum.y?.toFixed(1) ?? '-';

  // Tooltip dimensions
  const tooltipWidth = 120;
  const tooltipHeight = 32; // Increased height slightly for padding

  return (
    // Position the tooltip group using coordinates provided by Victory
    // The transform might need slight adjustments based on pointer position preference
    <g transform={`translate(${x}, ${y})`}>
      {/* foreignObject embeds HTML within SVG */}
      <foreignObject
        x={-tooltipWidth / 2} // Center horizontally relative to x
        y={-tooltipHeight - 10} // Position above the point (y=0 is the point) with a 10px gap
        width={tooltipWidth}
        height={tooltipHeight}
        style={{ overflow: 'visible' }} // Allow content (like shadows) to overflow the bounds if needed
      >
        {/* Use standard HTML and Tailwind inside */}
        <div
          style={{ width: '100%', height: '100%' }}
          className="flex items-center justify-between bg-surface border border-stone-200/80 rounded shadow-lg px-2 text-xs"
        >
          <span className="font-semibold text-stone-700 truncate pr-1">{name}:</span>
          <span className="font-light text-stone-500 flex-shrink-0">{value}</span>
        </div>
      </foreignObject>
      {/* Optionally, add a pointer triangle below the tooltip */}
      {/* <polygon points="-5,-10 5,-10 0,0" style={{ fill: 'hsl(var(--surface))', stroke: 'hsl(var(--stone-200))', strokeWidth: 1 }}/> */}
    </g>
  );
};
