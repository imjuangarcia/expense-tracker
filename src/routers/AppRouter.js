import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <section>
      <Switch>
        <PublicRoute path="/" exact={true} component={Login} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/add" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <PublicRoute component={NotFound} />
      </Switch>
    </section>
  </Router>
);

export default AppRouter;
