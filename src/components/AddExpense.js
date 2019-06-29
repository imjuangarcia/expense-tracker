import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <section className="dashboard add-expense">
        <section className="summary">
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li className="active">
              <Link to="/add">Add Expense</Link>
            </li>
          </ul>
          <h1>Add Expense</h1>
        </section>
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
