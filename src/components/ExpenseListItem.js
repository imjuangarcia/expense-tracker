import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <li>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <h5>
        {amount} - {createdAt}
      </h5>
    </li>
  );
};

export default ExpenseListItem;
