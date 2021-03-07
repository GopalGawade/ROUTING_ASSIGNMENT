import React from "react";
import "./Menucss.css";

const Unmounting = () => {
  return (
    <div>
      <h2>Unmounting</h2>
      <p>
        The next phase in the lifecycle is when a component is removed from the
        DOM, or unmounting as React likes to call it.
      </p>
      <p>
        React has only one built-in method that gets called when a component is
        unmounted:
      </p>
      <ul>
        <li>componentWillUnmount()</li>
      </ul>
    </div>
  );
};

export default Unmounting;
