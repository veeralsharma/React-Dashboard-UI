import React from 'react'
import Chart from "react-google-charts";

function Pie() {

    const data = [
        ["Work", "Income"],
        ["Job", 27],
        ["Intern", 22],
        ["Tutions", 25],
        ["Freelance", 21],
        ["Research", 29] 
      ];
      const options = {
        title: "Income Variations",
        titleTextStyle:{ fontSize:25,color:"#2b4972"},
        pieHole: 0.7,
        pieSliceText: 'none',
        is3D: false,
        legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 10}}
      };

    return (
        <div className="Pie">
        <Chart
          chartType="PieChart"
          width="100%"
          height="90%"
          data={data}
          options={options}
        />
      </div>
    )
}

export default Pie
