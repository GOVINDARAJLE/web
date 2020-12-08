import React from "react";
import {Line} from 'react-chartjs-2';

function LineChart() {
 
  const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Detected Fault Trend",
          data: [3, 2, 2, 1, 5],
          borderColor: ["rgb(255,206 ,86)"],
          backgroundColor: ["rgb(255,206 ,86,0.2)"],
          pointBackgroundColor: "rgb(255,206 ,86,0.2)",
          pointBorderColor: "rgb(255,206 ,86,0.2)",
        },
        {
          data: [1, 4, 3, 2, 6],
          borderColor: ["rgb(137, 63, 247)"],
          backgroundColor: ["rgb(137, 63, 247,0.2)"],
          pointBackgroundColor: "rgb(137, 63, 247,0.2)",
          pointBorderColor: "rgb(137, 63, 247,0.2)",
        },
        {
          data: [2, 3, 6, 1, 1],
          borderColor: ["rgb(255, 8, 6,0.2)"],
          backgroundColor: ["rgb(255, 8, 6,0.2)"],
          pointBackgroundColor: "rgb(255, 8, 6,0.2)",
          pointBorderColor: "rgb(255, 8, 6,0.2)",
        },
        {
          data: [7, 5, 6, 2, 4],
          borderColor: ["rgb(255, 8, 6)"],
          backgroundColor: ["rgb(255, 8, 6,0.2)"],
          pointBackgroundColor: "rgb(255, 8, 6,0.2)",
          pointBorderColor: "rgb(255, 8, 6,0.2)",
        },
      ],
    };
   



    return (
       <Line data={data} />
  );
}

export default LineChart;
