import React, { useEffect, useState } from "react";
import "./EmployeesList.css";
import Axios from "axios";
import EmployeeModel from "../Model/EmployeeModel";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeesList = (): JSX.Element => {
  const [employee, setEmployee] = useState<EmployeeModel[]>();
  const getEmployees = async () => {
    const result = await Axios.get<EmployeeModel[]>(
      `http://localhost:3030/api/employees`,
    );
    setEmployee(result.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div>
      {employee?.map((empl, i) => {
        return (
          <div key={i} className="employee_Card">
            <EmployeeCard employee={empl} />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesList;
