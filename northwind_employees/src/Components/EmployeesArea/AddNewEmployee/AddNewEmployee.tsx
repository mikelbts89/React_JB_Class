import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewEmployee.css";
import EmployeeModel from "../Model/EmployeeModel";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

const AddNewEmployee = (): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const submit = async (data: EmployeeModel) => {
    const result = await Axios.get("http://localhost:3030/api/employees");
    console.log(result.data);
    const employeesListFromApi: EmployeeModel[] = result.data;
    let checker: boolean = true;

    employeesListFromApi.forEach((user) => {
      if (user.id == data.id) {
        checker = false;
      }
      return checker;
    });
    if (checker === true) {
      try {
        await Axios.post("http://localhost:3030/api/employees", data);
        console.log(data);
        history.push("/employees");
      } catch (err) {
        console.log(`Post ${err}`);
      }
    } else {
      swal({ title: "Oooppps", text: "Existing ID", icon: "error" });
    }
  };
  return (
    <div className="AddNewEmployee">
      <form>
        <div className="main_form_div">
          <div className="item_form_div">
            <label htmlFor="">First Name</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="firstName"
            />
            {errors.firstName && <span> First name is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Last Name</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="lastName"
            />
            {errors.lastName && <span> Last name is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Title</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="title"
            />
            {errors.title && <span> Title is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">ID</label>
            <input ref={register({ required: true })} type="number" name="id" />
            {errors.id && <span> ID is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Birth date</label>
            <input
              ref={register({ required: true })}
              type="date"
              name="birthDate"
            />
            {errors.birthDate && <span> Birth date is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Country</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="country"
            />
            {errors.country && <span> Country is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">City</label>
            <input ref={register({ required: true })} type="text" name="city" />
            {errors.city && <span>City is required !</span>}
          </div>
          <div className="item_form_div">
            <label htmlFor="">Image #</label>
            <input
              ref={register({ required: true })}
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
            Add
          </Button>
          <Link to="/employees">
            <Button>Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewEmployee;
