import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpense extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <section className="dashboard edit-expense">
        <section className="summary">
          <h1>Edit {this.props.expense.description}</h1>
          <button onClick={this.onRemove}>
            <i className="far fa-trash-alt" />
            Remove this expense
          </button>
        </section>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const matchDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(EditExpense);
