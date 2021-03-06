import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("Should render the Expense List Item with expense", () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
