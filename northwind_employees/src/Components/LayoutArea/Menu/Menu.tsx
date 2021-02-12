import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = (): JSX.Element => {
  return (
    <div className="Menu">
      <NavLink style={{ textDecoration: "none" }} to="/employees">
        Employees List
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/add-employee">
        Add new Employee
      </NavLink>
    </div>
  );
};

export default Menu;
