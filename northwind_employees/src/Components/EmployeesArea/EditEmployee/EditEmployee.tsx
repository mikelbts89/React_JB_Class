import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import "./EditEmployee.css";
import EmployeeModel from "../Model/EmployeeModel";
import { Button } from "react-bootstrap";

const EditEmployee = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm();
  const [employee, setEmployee] = useState(null);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const getEmployee = async () => {
    const result = await Axios.get<EmployeeModel>(
      `http://localhost:3030/api/employees/${id}`,
    );
    // console.log(result.data);
    setEmployee(result.data);
  };
  useEffect(() => {
    if (id) {
      getEmployee();
    }
  }, [id]);

  const submit = async (data: EmployeeModel) => {
    try {
      const result = await Axios.put(
        `http://localhost:3030/api/employees/${id}`,
        data,
      );
      console.log(data);
      history.push("/employees");
    } catch (err) {
      console.log(`Patch ${err}`);
    }
  };

  return (
    <div className="EditEmployee">
      <form>
        <div className="main_form_div">
          <div className="item_form_div">
            <label htmlFor="">First Name: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.firstName}
              type="text"
              name="firstName"
            />
            {errors.firstName && <span> First name is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Last Name: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.lastName}
              type="text"
              name="lastName"
            />
            {errors.lastName && <span> Last name is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Title: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.title}
              type="text"
              name="title"
            />
            {errors.title && <span> Title is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">ID: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.id}
              type="number"
              name="id"
            />
            {errors.id && <span> ID is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Birth date: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.birthDate}
              type="date"
              name="birthDate"
            />
            {errors.birthDate && <span> Birth date is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Country: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.country}
              type="text"
              name="country"
            />
            {errors.country && <span> Country is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">City: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.city}
              type="text"
              name="city"
            />
            {errors.city && <span> City is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Image number: </label>
            <input
              ref={register({ required: true })}
              defaultValue={employee?.imageName}
              type="text"
              name="imageNumber"
            />
            {errors.imageNumber && <span> Image number is required !</span>}
          </div>
          <Button
            className="accordion_btn"
            variant="success"
            onClick={handleSubmit(submit)}
          >
            Submit
          </Button>
          <Link to="/employees">
            <Button className="accordion_btn">Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default EditEmployee;
