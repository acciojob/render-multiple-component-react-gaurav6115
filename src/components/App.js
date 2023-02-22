import React, {Component, useState} from "react";
import '../styles/App.css';

import ProjectName from "./ProjectName";
import ProjectDescription from "./projectDescription";

const App = () => {
  return (
    <div id="main">
      <ProjectName />
      <ProjectDescription />
    </div>
  )
}


export default App;
