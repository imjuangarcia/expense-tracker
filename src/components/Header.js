import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
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
        <button onClick={startLogout}>Logout</button>
      </li>
    </ul>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
