export function fetchUsers(users) {
  return {
    type: "FETCH_USERS",
    payload: {
      users,
    },
  };
}

export function fetchUsersAsync() {
  return (dispatch) => {
    fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    )
      .then((res) => res.json())
      .then((users) => {
        dispatch(fetchUsers(users));
      });
  };
}

export function addUser(user, userId) {
  return {
    type: "ADD_USER",
    payload: {
      user: {
        name: user.name,
        email: user.email,
        city: user.city,
        username: user.username,
        id: userId,
      },
    },
  };
}

export function addUserAsync(userId, name, email, city, username) {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        city,
        username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        dispatch(addUser(user, userId));
      });
  };
}

export function editUser(user) {
  return {
    type: "EDIT_USER",
    payload: {
      user,
    },
  };
}

// [Fake response] Only applicable for the user whose id matches the JSONPlaceholder user id

// export function editUserAsync(id, name, email, city, username) {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users/" + id, {
//       method: "PUT",
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         address: { city },
//         username,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((user) => {
//         dispatch(editUser(user));
//       });
//   };
// }

export function deleteUser(id) {
  return {
    type: "DELETE_USER",
    payload: {
      id,
    },
  };
}

// Fake response from the server
// export function deleteUserAsync(id) {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users/" + id, {
//       method: "DELETE",
//     }).then(() => {
//       dispatch(deleteUser(id));
//     });
//   };
// }
