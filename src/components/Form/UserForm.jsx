import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { addUserAsync, editUser } from "../../redux/actions/users";
import "./UserForm.css";

const UserForm = ({ variant }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const userId = Math.random() * 1000;

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.updatedUsers);

  useEffect(() => {
    function findUser() {
      const user = users?.find((user) => user.id === +id);

      if (user) {
        setName(user.name);
        setEmail(user.email);
        setUsername(user.username);
        setCity(user.city);
      }
    }
    findUser();
  }, [id, users, users.length]);

  const handleSubmitAdd = () => {
    dispatch(addUserAsync(userId, name, email, city, username));
    navigate("/");
  };

  const handleSubmitEdit = () => {
    const editedUser = {
      id: +id,
      name,
      email,
    };

    dispatch(editUser(editedUser));
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h3>{variant === "add" ? "Create User" : "Edit User"} Form</h3>
      </header>
      <hr />
      <form
        onSubmit={handleSubmit(
          variant === "add" ? handleSubmitAdd : handleSubmitEdit
        )}
        className="form"
      >
        <div className="name">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is Required" })}
            size={50}
            onChange={(e) => setName(e.target.value)}
            placeholder={name}
          />
          <p style={{ color: "red", marginLeft: "40%" }}>
            {errors.name?.message}
          </p>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is Required" })}
            size={50}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email}
          />
          <p style={{ color: "red", marginLeft: "40%" }}>
            {errors.email?.message}
          </p>
        </div>
        {variant === "add" && (
          <div className="username">
            <label htmlFor="username"> Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username Field Required" })}
              size={50}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <p style={{ color: "red", marginLeft: "40%" }}>
              {errors.username?.message}
            </p>
          </div>
        )}

        {variant === "add" && (
          <div className="city">
            <label htmlFor="city"> City</label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "City Field Required" })}
              size={50}
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />

            <p style={{ color: "red", marginLeft: "40%" }}>
              {errors.city?.message}
            </p>
          </div>
        )}

        <div className="btn-container">
          <Button variant="outline-danger" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            {variant === "add" ? "Submit" : "Edit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
