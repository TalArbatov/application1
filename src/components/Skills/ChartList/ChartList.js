import React from "react";
import d from "./ChartList.css";
import Chart from "./Chart/Chart";

const ChartList = props => {
  return (
    <div className={' ' + d.container}>
      <div className={" " + d.flexRow}>
        <Chart options={frontEnd} />
        <Chart options={backEnd} />
      </div>
      <div className={" " + d.flexRow}>
        <Chart options={workflow} />
        <Chart options={db} />
      </div>
    </div>
  );
};

export default ChartList;

const frontEnd = {
  height: 360,
  width: 360,
  animationEnabled: true,
  animationDuration: 2000,
  backgroundColor: "#f4f4f4",
  theme: "light2",
  title: {
    text: "Front End"
  },
  axisX: {
    title: "",
    reversed: true
  },
  axisY: {
    title: "",
    labelFormatter: this.addSymbols
  },
  data: [
    {
      type: "bar",
      dataPoints: [
        { y: 100, label: "React" },
        { y: 70, label: "Redux" },
        { y: 80, label: "Angular" },
        { y: 50, label: "Bootstrap" },
        { y: 75, label: "Material UI" },
        { y: 35, label: "Photoshop" }
      ]
    }
  ]
};
const backEnd = {
  height: 360,
  width: 360,
  animationEnabled: true,
  animationDuration: 2000,
  backgroundColor: "#f4f4f4",
  theme: "light2",
  title: {
    text: "Back End"
  },
  axisX: {
    title: "",
    reversed: true
  },
  axisY: {
    title: "",
    labelFormatter: this.addSymbols
  },
  data: [
    {
      type: "bar",
      dataPoints: [
        { y: 50, label: "NodeJS" },
        { y: 30, label: "ASP.NET" },
        { y: 60, label: "Django" },
        { y: 100, label: "RoR" },
        { y: 25, label: "Express" },
        { y: 95, label: "Flask" }
      ]
    }
  ]
};

const workflow = {
  height: 360,
  width: 360,
  animationEnabled: true,
  animationDuration: 2000,
  backgroundColor: "#f4f4f4",
  theme: "light2",
  title: {
    text: "Workflow"
  },
  axisX: {
    title: "",
    reversed: true
  },
  axisY: {
    title: "",
    labelFormatter: this.addSymbols
  },
  data: [
    {
      type: "bar",
      dataPoints: [
        { y: 60, label: "CircleCI" },
        { y: 100, label: "Slack" },
        { y: 30, label: "GitHub" },
        { y: 25, label: "Webpack" },
        { y: 50, label: "Git" },
        { y: 30, label: "GitHub" },
        { y: 95, label: "Grunt" }
      ]
    }
  ]
};

const db = {
  height: 360,
  width: 360,
  animationEnabled: true,
  animationDuration: 2000,
  backgroundColor: "#f4f4f4",
  theme: "light2",
  title: {
    text: "DB Admin"
  },
  axisX: {
    title: "",
    reversed: true
  },
  axisY: {
    title: "",
    labelFormatter: this.addSymbols
  },
  data: [
    {
      type: "bar",
      dataPoints: [
        { y: 25, label: "Firebase" },
        { y: 50, label: "MongoDB" },
        { y: 60, label: "Mongoose" },
        { y: 100, label: "GraphQL" },
        { y: 30, label: "SSMS" },
      ]
    }
  ]
};
