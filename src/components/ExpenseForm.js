import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  changeDescription = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  changeNote = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  changeAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  changeDate = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };
  changeCalendarFocus = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  addExpense = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please add description and amount"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.addExpense}>
        {this.state.error ? <p>{this.state.error}</p> : ""}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.changeDescription}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.changeAmount}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.changeDate}
          focused={this.state.calendarFocused}
          onFocusChange={this.changeCalendarFocus}
          numberOfMonths={1}
          isOutsideRange={day => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.changeNote}
        />
        <button>Add Expense</button>
      </form>
    );
  }
}

export default ExpenseForm;
