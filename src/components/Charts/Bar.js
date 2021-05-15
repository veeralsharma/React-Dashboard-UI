import React from 'react'
import Chart from "react-google-charts";

function Bar() {
    var data = [
        [  
        "Month",
          "Job",
          "Free Lance",
          "tutions",
          "Intern",
          "Research"
        ],
        ["Jan", 2, 1, 0, 1,0],
        ["Feb", 2, 1, 3, 1,0],
        ["Mar", 1, 0, 3, 1,1],
        ["Apr", 0, 0, 7, 0,0],
        ["May", 2, 1, 0, 1,0],
        ["Jun", 2, 1, 0, 1,0]
      ];
      
      var options = {
        title:"Net Income",
        titleTextStyle:{ fontSize:25,color:"#2b4972"},
        legend: "none",
        bar: { groupWidth: "15%" },
        isStacked: true
      };
    return (
        <div className="Bar">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="90%"
          data={data}
          options={options}
        />
        </div>
    )
}

export default Bar
