import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expense Tracker</h1>
    <ul>
      <li>
        <NavLink to="/" exact={true} activeClassName="active">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/add" exact={true} activeClassName="active">
          Add Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" exact={true} activeClassName="active">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
