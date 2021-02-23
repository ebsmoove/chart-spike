import React from "react";
import "./style.css";
import GoogleCharts from "./GoogleCharts";
export default function App() {
  return (
    <div>
      <h1>Data Demo!</h1>
      <p>Lets try diff chart libraries</p>
      <GoogleCharts />
    </div>
  );
}
