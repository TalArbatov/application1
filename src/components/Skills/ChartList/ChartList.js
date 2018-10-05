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
  maxHeight: 100,
  maxWidth: 200,
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
        { y: 85, label: "Redux" },
        { y: 35, label: "Angular" },
        { y: 50, label: "Bootstrap" },
        { y: 75, label: "Material UI" },
        { y: 35, label: "Photoshop" }
      ]
    }
  ]
};
const backEnd = {
    maxHeight: 100,
    maxWidth: 200,  animationEnabled: true,
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
        { y: 100, label: "NodeJS" },
        { y: 35, label: "RoR" },
        { y: 40, label: "PHP" },
        { y: 75, label: "ASP.NET" },
        { y: 25, label: "Django" },
        { y: 90, label: "Express" },
      ]
    }
  ]
};

const workflow = {
    maxHeight: 100,
    maxWidth: 200,
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
        { y: 25, label: "CircleCI" },
        { y: 30, label: "Slack" },
        { y: 95, label: "GitHub" },
        { y: 80, label: "Webpack" },
        { y: 100, label: "Git" },
        { y: 15, label: "Grunt" }
      ]
    }
  ]
};

const db = {
    maxHeight: 100,
    maxWidth: 200,
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
        height:100,
      type: "bar",
      dataPoints: [
        { y: 35, label: "Firebase" },
        { y: 80, label: "MongoDB" },
        { y: 80, label: "Mongoose" },
        { y: 50, label: "GraphQL" },
        { y: 100, label: "SSMS" },
      ]
    }
  ]
};
