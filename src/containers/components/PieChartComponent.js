import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ['#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#e6194B', '#469990', '#dcbeff', '#9A6324', '#800000', '#808000', '#000075', '#ffd8b1', '#a9a9a9', '#ffffff'];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
     return (
      <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
      >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
      </div>
    );
  }
  return null;
};

export default function PieChartComponent({ salesChart }) {
  if (!salesChart.some(sale => sale.value > 0)) {
    return (<h6 className="col-md-6 text-muted">No insurance sales</h6>);
  }

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={salesChart}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {salesChart.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  );
}
