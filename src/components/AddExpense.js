import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <section>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </section>
    );
  }
}
const matchDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  matchDispatchToProps
)(AddExpense);
