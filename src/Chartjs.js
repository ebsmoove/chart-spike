import React from 'react';
import {Bar, Pie ,Doughnut} from 'react-chartjs-2';
import colours from "./colours";

const labels =[ "Before 1960", "1961-1980", "1981-1990", "1991-2000", "2001-2005", "2006 and newer"];
const datas = [ 23.6, 28.8, 15.3, 12.2, 6.9, 7.3]
console.log(datas)

const {PRIMARY_1, PRIMARY_2, PRIMARY_3, PRIMARY_4, SECONDARY_3,SECONDARY_4, SECONDARY_5} = colours;
const data = {
  labels: labels,
      cutoutPercentage: 50,
  datasets: [
    {
      label: 'Year of Construction',
      backgroundColor: [SECONDARY_4, PRIMARY_2,  SECONDARY_3, PRIMARY_3, SECONDARY_5, PRIMARY_4],
      borderColor: PRIMARY_2,
      borderWidth: 1,
      hoverBackgroundColor:PRIMARY_1,
      data: datas
    }
  ]
};

const legend = {
            display: true, position: "right"
          }
class Chartjs extends React.Component{

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}>
<h2>Doughnut example</h2>
        <Doughnut data={data} 
          legend={legend}
         />
        <h2>Pie example</h2>
        <Pie data={data} 
          legend={{
            display: false
          }}

        />

        
        <h2>Bar Example </h2>
        <Bar
          data={data}
        />
      </div>
    );
  }
};
export default Chartjs