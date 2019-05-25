import React from "react";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  render() {
    return (
      <form>
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
