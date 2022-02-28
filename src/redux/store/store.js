import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  const state = localStorage.getItem("state");
  if (state === null) {
    return undefined;
  }
  return JSON.parse(state);
};

const store = () => {
  const middleware = [thunk];

  const reduxStore = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  reduxStore.subscribe(() => {
    saveToLocalStorage(reduxStore.getState());
  });
  return reduxStore;
};

export default store;
