const initialState = {
  users: [],
  updatedUsers: [],
  sort: "",
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.users,
        updatedUsers:
          state.updatedUsers.length === 0
            ? action.payload.users.map((user) => {
                return {
                  name: user.name,
                  email: user.email,
                  city: user.address.city,
                  username: user.username,
                  id: user.id,
                };
              })
            : state.updatedUsers,
      };

    case "ADD_USER":
      return {
        ...state,
        updatedUsers: [...state.updatedUsers, action.payload.user],
      };

    case "EDIT_USER":
      return {
        ...state,
        updatedUsers: state.updatedUsers.map((user) => {
          if (user.id === action.payload.user.id) {
            const editedUser = {
              ...user,
              name: action.payload.user.name,
              email: action.payload.user.email,

              id: action.payload.user.id,
            };
            return editedUser;
          }
          return user;
        }),
      };

    case "DELETE_USER":
      return {
        ...state,
        updatedUsers: state.updatedUsers.filter(
          (user) => user.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}
