import React, { useEffect, useState } from "react";
import "./EmployeeCard.css";
import EmployeeModel from "../Model/EmployeeModel";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";

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
      window.location.reload();
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
      <Accordion>
        <Card>
          <Card.Header>
            <p>
              {props.employee.lastName} {props.employee.firstName}
            </p>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              More Info
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Title: {props.employee.title}</p>
              <p>ID: {props.employee.id}</p>
              <p>Birth date: {props.employee.birthDate}</p>
              <p>Country: {props.employee.country}</p>
              <p>City: {props.employee.city}</p>
              <p>Image #: {props.employee.imageName}</p>
              <img src={emplImage} alt="" />
              <Link to={`/employees/edit/${props.employee.id}`}>
                <Button className="accordion_btn" variant="secondary">
                  Edit
                </Button>
              </Link>
              <Button
                className="accordion_btn"
                variant="danger"
                onClick={() => {
                  setDelEmployee(props.employee.id);
                }}
              >
                Delete
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default EmployeeCard;
