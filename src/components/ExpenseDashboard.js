import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboard = () => (
  <section className="dashboard">
    <ExpensesSummary />
    <ExpenseList />
  </section>
);

export default ExpenseDashboard;
