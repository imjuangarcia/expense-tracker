import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <section className="expense-list">
    {props.expenses.length === 0 ? (
      <p>there aren't any expenses</p>
    ) : (
      <ul>
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
