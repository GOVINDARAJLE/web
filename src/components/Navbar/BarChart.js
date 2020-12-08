import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

const BarChart = () => {
  return (
    <div className="chart">
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Asset Heath",
              data: [12, 19, 10, 7, 15, 14, 8, 2, 5, 20, 8, 18, 17],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(241, 19, 54, 0.2)",
                "rgba(241, 149, 44, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgb(85, 8, 6,0.2)",
                "rgb(124, 143, 212,0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(241, 19, 54, 1)",
                "rgba(241, 149, 44, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgb(85, 8, 6,1)",
                "rgb(124, 143, 212,1)",
              ],
              borderWidth: 3,
            },
            {
          
              data: [8, 14, 5, 19, 9, 7, 13, 18, 12, 10, 9, 6, 7],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(241, 19, 54, 0.2)",
                "rgba(241, 149, 44, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgb(85, 8, 6,0.2)",
                "rgb(124, 143, 212,0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(241, 19, 54, 1)",
                "rgba(241, 149, 44, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgb(85, 8, 6,1)",
                "rgb(124, 143, 212,1)",
              ],
              borderWidth: 3,
            },
          ],
        }}
        height={450}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
