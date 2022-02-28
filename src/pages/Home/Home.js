import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Users from "../../components/Users/Users";
import { fetchUsersAsync } from "../../redux/actions/users";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Dashboard</h1>
      <Users />
    </div>
  );
};

export default Home;
