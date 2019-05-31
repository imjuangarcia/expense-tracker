import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <section>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={expense => {
            this.props.onSubmit(expense);
            this.props.history.push("/");
          }}
        />
      </section>
    );
  }
}
const matchDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  matchDispatchToProps
)(AddExpense);
