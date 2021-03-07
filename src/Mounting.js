import React from "react";
import "./Menucss.css";

const Mounting = () => {
  return (
    <div>
      <h2>Mounting</h2>
      <p>Mounting means putting elements into the DOM.</p>
      <p>
        React has four built-in methods that gets called, in this order, when
        mounting a component:
      </p>
      <ol>
        <li>constructor()</li>
        <li>getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ol>
    </div>
  );
};

export default Mounting;
