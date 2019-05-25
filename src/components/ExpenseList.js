import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <React.Fragment>
    <h1>Expense List</h1>
    <ul>
      {props.expenses.map(expense => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))}
    </ul>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
