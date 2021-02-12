import React from "react";
import { Route, Switch } from "react-router-dom";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import AddNewEmployee from "../../EmployeesArea/AddNewEmployee/AddNewEmployee";
import EditEmployee from "../../EmployeesArea/EditEmployee/EditEmployee";
const Routing = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/employees">
          <EmployeesList />
         
        </Route>
        <Route exact path="/employees/edit/:id">
          <EditEmployee />
        </Route>
        <Route exact path="/add-employee">
          <AddNewEmployee />
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;
