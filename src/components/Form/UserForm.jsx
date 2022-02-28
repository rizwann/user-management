import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addUser,
  addUserAsync,
  editUser,
  editUserAsync,
} from "../../redux/actions/users";

import "./UserForm.css";

const UserForm = ({ variant }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");

  const userId = Math.random() * 1000;
  console.log(typeof userId);

  let navigate = useNavigate();
  const { id } = useParams();
  console.log(typeof id, "params");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.updatedUsers);

  useEffect(() => {
    function findUser() {
      const user = users?.find((user) => user.id === +id);
      console.log("user=>", user);
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setUsername(user.username);
        setCity(user.city);
      }
    }
    findUser();
  }, [id, users, users.length]);

  console.log(name, email, username, city);
  const handleSubmitAdd = (event) => {
    event.preventDefault();

    dispatch(addUserAsync(userId, name, email, city, username));

    navigate("/");
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const editedUser = {
      id: +id,
      name,
      email,
      city,
      username,
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
        <h3>Form</h3>
      </header>
      <hr />
      <form onSubmit={variant === "add" ? handleSubmitAdd : handleSubmitEdit}>
        <div className="name">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            size={50}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            size={50}
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="username">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            name="username"
            size={50}
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="city">
          <label htmlFor="city"> City</label>
          <input
            type="text"
            id="city"
            name="city"
            size={50}
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div className="btn-container">
          <Button variant="outline-danger" onClick={handleCancel}>
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
