import { useLocation } from "react-router-dom";

import React from "react";
import Button from "./Button";

const Header = (props) => {
  const { onAdd, showAdd } = props;
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" &&<Button text={showAdd ? "Close" : "Add"} onClick={onAdd} />}
    </header>
  );
};

export default Header;
