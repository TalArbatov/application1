import React from "react";
import d from "./Chart.css";
var CanvasJSReact = require("../../../CanvasJS/canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = props => {
  return(
    <div className={d.chart}>
    <CanvasJSChart options={props.options} />
  </div>
  )
}



export default Chart;
