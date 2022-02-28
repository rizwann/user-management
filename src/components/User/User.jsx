import React from "react";
import { Button, Card } from "react-bootstrap";
import Popup from "reactjs-popup";
import "./User.css";

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
        <Popup
          trigger={<Button variant="danger">Delete</Button>}
          position="center center"
          modal={true}
          closeOnDocumentClick={true}
          offsetY={50}
          offsetX={-50}
        >
          {(close) => (
            <Card>
              <Card.Header as="h5">Delete</Card.Header>
              <Card.Body>
                <Card.Title>Do You Really Want to Delete This User?</Card.Title>
                <Card.Text>
                  Deletion of this user will delete all the posts and comments{" "}
                  <br />
                  associated with this user.
                </Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel
                </Button>
                &nbsp;
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          )}
        </Popup>
      </td>
    </tr>
  );
};

export default User;
