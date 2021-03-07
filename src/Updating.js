import React from "react";
import "./Menucss.css";

const Updating = () => {
  return (
    <div>
      <h2>Updating</h2>
      <p>The next phase in the lifecycle is when a component is updated.</p>
      <p>
        A component is updated whenever there is a change in the component's
        state or props.
      </p>
      <p>
        React has five built-in methods that gets called, in this order, when a
        component is updated:
      </p>
      <ol>
        <li>getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
      </ol>
    </div>
  );
};

export default Updating;
