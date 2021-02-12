import React, { useEffect, useState } from "react";
import "./EmployeeCard.css";
import EmployeeModel from "../Model/EmployeeModel";
import Axios from "axios";
import { Link } from "react-router-dom";

interface EmployeeCardProps {
  employee: EmployeeModel;
}
const EmployeeCard = (props: EmployeeCardProps): JSX.Element => {
  const [emplImage, setEmplImage] = useState("");
  const [delEmployee, setDelEmployee] = useState<number>();

  const getEmployeeImage = async () => {
    try {
      const result = await Axios.get(
        `http://localhost:3030/api/employees/images/${props.employee.imageName}`,
      );
      setEmplImage(result.data);
    } catch (err) {
      console.log(`get Error : ${err}`);
    }
  };

  const deleteEmployee = async () => {
    try {
      const result = await Axios.delete(
        `http://localhost:3030/api/employees/${delEmployee}`,
      );
      console.log(result);
    } catch (err) {
      console.log(`delete Error ${err}`);
    }
  };

  useEffect(() => {
    if (delEmployee) {
      deleteEmployee();
    }
  }, [delEmployee]);

  useEffect(() => {
    getEmployeeImage();
  }, []);
  return (
    <div className="EmployeeCard">
      <p>
        Full Name: {props.employee.lastName} {props.employee.firstName}
      </p>
      <p>Title: {props.employee.title}</p>
      <p>ID: {props.employee.id}</p>
      <p>Birth date: {props.employee.birthDate}</p>
      <p>Country: {props.employee.country}</p>
      <p>City: {props.employee.city}</p>
      <p>Image #: {props.employee.imageName}</p>
      <img src={emplImage} alt="" />
      <button
        onClick={() => {
          setDelEmployee(props.employee.id);
        }}
      >
        Delete
      </button>
      <Link to={`/employees/edit/${props.employee.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default EmployeeCard;
