import React from "react";
import Chart from "react-google-charts";
import {twoColumnData} from "./data";
const GoogleCharts = () => (
  <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
    <Chart
      width={800}
      height={500}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={twoColumnData}
      options={{
        title: "Age of Dwelling",
        chartArea: { width: "30%" },
        hAxis: {
          title: "Total Population",
          minValue: 0
        },
        vAxis: {
          title: "City"
        }
      }}
      legendToggle
    />
    <Chart
      width={800}
      height={500}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={twoColumnData}
      options={{
        title: "Age of Dwelling Bar",
        chartArea: { width: "30%" },
        hAxis: {
          title: "Total Population",
          minValue: 0
        },
 
      }}
      legendToggle
    />
  </div>
);

export default GoogleCharts;
