import React from "react";
import Table from "./Table";
import "./index.scss";

const App = () => {
  return (
    <div className="main">
      <div className="menu">
        <h1>
          Easter at
          <br /> the Markle's
        </h1>
        <Table />
        <p className="sign">
          Join us for an
          <br />
          <span> easter feast</span>
          <div className="arrow1"></div>
          <div className="arrow2"></div>
          <div className="arrow3"></div>
          <div className="arrow4"></div>
        </p>
      </div>
    </div>
  );
};

export default App;
