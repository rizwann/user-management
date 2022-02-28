import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import "./UserForm.css";

const UserForm = ({ variant }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setEmail(data.email);
        });
    }
  }, [id]);

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    navigate("/");
  };

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id,
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    navigate("/");
  };

  return (
    <>
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

        <div className="btn-container">
          <Button variant="outline-danger" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            {variant === "add" ? "Submit" : "Edit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
