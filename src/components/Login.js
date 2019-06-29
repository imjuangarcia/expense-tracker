import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => (
  <section className="login">
    <img
      src="https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px.png"
      srcSet="https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px.png 1x, https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px_2x.png 2x, https://res.cloudinary.com/jmg-cursos/image/upload/v1561204460/logo/ilustracion_90px_3x.png 3x"
      alt="Illustration of Juan Mart&iacute;n Garc&iacute;a"
    />
    <h1>Welcome, stranger</h1>
    <h3>Sign in to start tracking your expenses</h3>
    <button onClick={startLogin}>Login with Google</button>
    <p>
      Copyright &copy; {new Date().getFullYear()} JMG. Designed and Developed by{" "}
      <a href="https://www.juangarcia.design" target="_blank" rel="noopener">
        Juan Mart&iacute;n Garc&iacute;a
      </a>
      . Hosted on{" "}
      <a href="https://www.heroku.com" target="_blank" rel="noopener">
        Heroku
      </a>
      . Code is on{" "}
      <a
        href="https://gitlab.com/jmg-side-projects/expense-tracker"
        target="_blank"
        rel="noopener"
      >
        Gitlab
      </a>
    </p>
  </section>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
