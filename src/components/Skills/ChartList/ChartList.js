import React from "react";
import d from "./ChartList.css";
import Chart from "./Chart/Chart";
import MediaQuery from 'react-responsive';

const ChartList = props => {
  return (
    <div className={' ' + d.container}>
    <MediaQuery minWidth={850}>
    <div style={{flexWrap:'nowrap'}} className={" " + d.flexRow}>
        <Chart options={frontEnd} />
        <Chart options={backEnd} />
      </div>
      <div className={" " + d.flexRow}>
        <Chart options={workflow} />
        <Chart options={db} />
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={850}>
    <div style={{flexWrap:'wrap'}} className={" " + d.flexRow}>
        <Chart options={frontEnd} />
        <Chart options={backEnd} />
      </div>
      <div style={{flexWrap:'wrap'}} className={" " + d.flexRow}>
        <Chart options={workflow} />
        <Chart options={db} />
      </div>
    </MediaQuery>
    
    
    </div>
  );
};

export default ChartList;

const height = 250;

const frontEnd = {
  height: height,
  
  animationEnabled: true,
  animationDuration: 7000,
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
    maximum:100,
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
    height: height,
     
    animationEnabled: true,
  animationDuration: 7000,
  easing: 'easeInQuad',
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
    maximum:100,
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
    height: height,
    
      animationEnabled: true,
  animationDuration: 7000,
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
    maximum:100,
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
    height: height,
    
  animationEnabled: true,
  animationDuration: 7000,
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
    maximum:100,
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
