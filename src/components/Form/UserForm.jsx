import React from "react";
import { Button } from "react-bootstrap";
import "./UserForm.css";

const UserForm = () => {
  return (
    <>
      <form>
        <div className="name">
          <label htmlFor="name"> Name</label>
          <input type="text" id="name" name="name" size={50} />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" size={50} />
        </div>

        <div className="btn-container">
          <Button variant="outline-danger">Cancel</Button>
          <Button variant="success">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
