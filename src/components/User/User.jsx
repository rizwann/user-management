import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Popup from "reactjs-popup";

import { deleteUser } from "../../redux/actions/users";
import "./User.css";

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  const id = user?.id.toString().slice(0, 3);
  return (
    <tr className="ubuntu">
      <td>{id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.city}</td>

      <td>
        <Link
          to={`edit-user/${user.id}`}
          className="nav-link btn btn-warning"
          style={{ color: "white" }}
        >
          Edit
        </Link>
      </td>
      <td>
        <Popup
          trigger={<Button variant="danger">Delete</Button>}
          position="center center"
          modal={true}
          closeOnDocumentClick={true}
        >
          {(close) => (
            <Card>
              <Card.Header as="h5">Delete</Card.Header>
              <Card.Body>
                <Card.Title>
                  Do You Really Want to Delete user &nbsp;
                  <i>{user.username}</i> ?
                </Card.Title>
                <Card.Text>
                  Deletion will destroy all the posts and comments <br />
                  associated with <b>{user.username}</b>.
                </Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel
                </Button>
                &nbsp; &nbsp;
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete();
                    close();
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          )}
        </Popup>
      </td>
    </tr>
  );
};

export default User;
