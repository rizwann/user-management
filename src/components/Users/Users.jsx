import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );
      const data = await result.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="table-container">
      <header className="table-header">
        <h3>User list</h3>
        <Button variant="primary">Add New</Button>
      </header>
      <Table striped hover responsive="lg">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
