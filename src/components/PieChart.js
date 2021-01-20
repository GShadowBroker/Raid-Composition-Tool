import React, { createRef, useEffect } from "react";
import Chart from "chart.js";

const PieChart = ({ data, title, color }) => {
  const chartRef = createRef();

  useEffect(() => {
    if (window.myChart) {
      window.myChart.chart.destroy();
    }

    window.myChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: data.map((d) => d.name && d.name),
        datasets: [
          {
            label: title,
            data: data.map((d) => d.value && d.value),
            backgroundColor: data.map((d) => d.color && d.color),
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "#DCE1DE",
          },
        },
      },
    });
  }, [data, title, chartRef]);

  return <canvas ref={chartRef} width="300" height="300" />;
};

PieChart.defaultProps = {
  data: [],
  title: "Untitled",
  color: "#DCE1DE",
};

export default PieChart;
