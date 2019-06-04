import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboard = () => (
  <section>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </section>
);

export default ExpenseDashboard;
