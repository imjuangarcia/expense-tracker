import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <section className="expense-list">
    {props.expenses.length === 0 ? (
      <section className="empty">
        <h6 className="shrug">¯\_(ツ)_/¯</h6>
        <p>There aren't any expenses to show</p>
      </section>
    ) : (
      <ul>
        <li className="header">
          <h6>Description</h6>
          <h6>Amount</h6>
          <h6>Date</h6>
        </li>
        {props.expenses.map(expense => (
          <ExpenseListItem {...expense} key={expense.id} />
        ))}
      </ul>
    )}
  </section>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
