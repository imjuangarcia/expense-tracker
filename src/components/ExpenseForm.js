import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
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
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Expense Description here"
            autoFocus
            value={this.state.description}
            onChange={this.changeDescription}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            placeholder="Enter Expense Amount here"
            value={this.state.amount}
            onChange={this.changeAmount}
          />
        </div>
        <div className="input-group">
          <label>Payment Date</label>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.changeDate}
            focused={this.state.calendarFocused}
            onFocusChange={this.changeCalendarFocus}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
        </div>
        <div className="input-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.changeNote}
          />
        </div>
        <div className="cta-container">
          <button className="link">
            <i className="fas fa-chevron-left" />
            Back to Dashboard
          </button>
          <button className="cta">
            {this.state.description ? "Edit" : "Add"} Expense
          </button>
        </div>
      </form>
    );
  }
}
