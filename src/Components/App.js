import React, { useState, useEffect } from "react";
import Table from "./Table";
import "../Styles/index.scss";

const url =
  "https://api.documenu.com/v2/restaurant/4072702673999819?key=dae96b96fd7ea91ed27f5397ee34fdeb";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    setLoading(true);
    const response = await fetch(url)
      .then((data) => data.json())
      .catch((error) => error);
    return response;
  };

  useEffect(() => {
    fetchMenu().then((data) => {
      if (data.result.menus[0]) {
        setMenu(data.result.menus[0]);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="main">
      <div className="menu">
        <h1>
          Easter at
          <br /> the Markle's
        </h1>
        <Table menu={menu} />
        <div className="sign">
          Join us for an
          <br />
          <span> easter feast</span>
          <div className="arrow1"></div>
          <div className="arrow2"></div>
          <div className="arrow3"></div>
          <div className="arrow4"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
