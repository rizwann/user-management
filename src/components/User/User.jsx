import React from "react";
import { Button } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <tr className="ubuntu">
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user?.address.city}</td>
      {/* 
      <td>
        <Link to={`/user/${country.name?.common}`} className="nav-link">
        <Button
          variant="outline-info"
          size="sm"
          onClick={() => dispatch(resetKeyword())}
        >
          More Info
        </Button>
      </Link>
      </td> */}

      <td>
        <Button variant="warning">Edit</Button>
      </td>

      <td>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default User;
