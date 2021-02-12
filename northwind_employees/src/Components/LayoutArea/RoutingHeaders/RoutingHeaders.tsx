import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
const RoutingHeaders = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/employees">
          <Header title={"Employees List"} />
        </Route>
        <Route exact path="/employees/edit/:id">
          <Header title={"Edit Employee"} />
        </Route>
        <Route exact path="/add-employee">
          <Header title={"Add Employees"} />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutingHeaders;
