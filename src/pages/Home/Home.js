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
    <>
      <Users />
    </>
  );
};

export default Home;
