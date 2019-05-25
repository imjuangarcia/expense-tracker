import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt,
  props
}) => {
  return (
    <li>
      <h3>{description}</h3>
      <h5>
        {amount} - {createdAt}
      </h5>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default connect()(ExpenseListItem);
