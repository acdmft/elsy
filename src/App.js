import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from "./components/Steps.js";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {tempMax}</p>
          <p>Temperature: {tempMin}</p>
          <Steps></Steps>
          <p>Steps: {stepsMin}</p>
          <div className="box-pair">box-pair</div>
          <div className="box-impair">box-impair</div>
        </div>
      </div>
    );
  }
}

export default App;
