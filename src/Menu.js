import React from "react";
import { Link } from "react-router-dom";
import "./Menucss.css";

const Menu = () => {
  return (
    <div className="Heading2">
      <ul>
        <h2>
          <Link to="/Mounting">Mounting</Link>
        </h2>
        <h2>
          <Link to="/Updating">Updating</Link>
        </h2>
        <h2>
          <Link to="/Unmounting">Unmounting</Link>
        </h2>
      </ul>
    </div>
  );
};

export default Menu;
