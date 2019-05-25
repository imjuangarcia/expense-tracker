import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => (
  <section>
    <ExpenseListFilters />
    <ExpenseList />
  </section>
);

export default ExpenseDashboard;
