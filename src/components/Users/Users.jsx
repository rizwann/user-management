import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  return (
    <div className="users">
      {users.length > 0 ? (
        <div className="table-container">
          <header className="table-header">
            <h3>User list</h3>
            <Link to="/add-user" className="nav-link">
              <Button variant="primary">Add New</Button>
            </Link>
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
      ) : (
        <div className="no-data">
          <h3>No data found</h3>
        </div>
      )}
    </div>
  );
};

export default Users;
