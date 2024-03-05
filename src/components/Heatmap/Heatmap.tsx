import * as React from "react";
import * as d3 from "d3";

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number }[];
};

export const Heatmap = ({ width, height, data }: HeatmapProps) => {
  const xScale = React.useMemo(() => {
    return d3
      .scaleBand()
      .range([0, width])
      .domain([...data.map((d) => d.x)])
      .padding(0.1);
  }, [data, width]);

  const yScale = React.useMemo(() => {
    return d3
      .scaleBand()
      .range([height, 0])
      .domain([...data.map((d) => d.y)])
      .padding(0.1);
  }, [data, height]);

  const [min, max] = d3.extent([...data.map((d) => d.value)]);

  // Color scale
  // .range(--brand-fill-100, --brand-primary)
  // hsl doesnt work very well, easier with hex values
  if (min === undefined && max === undefined) return null;

  const colorScale = d3
    .scaleSequential<string>()
    .range(["#F1F5F9", "#3D6EFF"])
    .domain([min, max]); // Handle undefined values

  // Build the rectangles
  const allRects = data.map((d, i) => {
    return (
      <g key={i}>
        <rect
          r={4}
          x={xScale(d.x)}
          y={yScale(d.y)}
          width={xScale.bandwidth()}
          height={yScale.bandwidth()}
          opacity={1}
          fill={colorScale(d?.value)}
          rx={8}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g width={width} height={height}>
          {allRects}
        </g>
      </svg>
    </div>
  );
};
