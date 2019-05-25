import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/style.scss";

const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gas Bill" }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

const storeState = store.getState();
const visibleExpenses = getVisibleExpenses(
  storeState.expenses,
  storeState.filters
);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
