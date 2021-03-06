import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <li>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <h5>{numeral(amount / 100).format("$0,0.00")}</h5>
        <h5>{moment(createdAt).format("MMMM Do, YYYY")}</h5>
      </Link>
    </li>
  );
};

export default ExpenseListItem;
