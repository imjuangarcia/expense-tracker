import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="not-found">
    404 - <Link to="/">Go home, you're drunk</Link>
  </section>
);

export default NotFound;
