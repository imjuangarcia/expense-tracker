import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import ExpenseListFilters from "./ExpenseListFilters";

export const Header = ({ startLogout }) => (
  <header>
    <div className="logo">
      <Link to="/dashboard">
        <img
          src="https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px.png"
          srcSet="https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px.png 1x, https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px_2x.png 2x, https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px_3x.png 3x"
          alt="Illustration of Juan Mart&iacute;n Garc&iacute;a. By clicking on it, you'll be redirected to the Dashboard page"
        />
      </Link>
    </div>
    <ul>
      <li>
        <ExpenseListFilters />
      </li>
      <li>
        <button onClick={startLogout} className="logout">
          <i className="fas fa-sign-out" />
        </button>
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
