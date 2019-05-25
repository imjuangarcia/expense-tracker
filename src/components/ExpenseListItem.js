import React from "react";

const ExpenseListItem = ({ description, amount, createdAt }) => {
  return (
    <li>
      <h3>{description}</h3>
      <h5>
        {amount} - {createdAt}
      </h5>
    </li>
  );
};

export default ExpenseListItem;
