import * as React from "react";
import * as d3 from "d3";

const BAR_PADDING = 0.37;

type BargraphProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const Bargraph = ({ width, height, data }: BargraphProps) => {
  const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);

  const xScale = React.useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, width])
      .paddingInner(BAR_PADDING);
  }, [width, groups]);

  const yScale = React.useMemo(() => {
    const [, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, height]);
  }, [data, height]);

  const customColorScale = (val: number) => {
    if (val <= 33) return "hsl(var(--brand-color-200))";
    if (val <= 66) return "hsl(var(--brand-color-300))";
    return "hsl(var(--brand-color-400))";
  };

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const y = yScale(d.value);
    if (y === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={xScale(d.name)}
          y={height - yScale(d.value) - 1}
          width={xScale.bandwidth()}
          height={yScale(d.value)}
          opacity={1}
          stroke={customColorScale(d.value)}
          fill={customColorScale(d.value)}
          fillOpacity={1}
          strokeWidth={0}
          rx={2}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g width={height} height={width}>
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
