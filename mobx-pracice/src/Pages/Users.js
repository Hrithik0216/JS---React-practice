import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  console.log("users component is rendered");

  const { username } = useParams();
  const [islogin, setIsLogin] = useState(false);
  const changeLoginState = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <p>user: {username}</p>
      <button onClick={changeLoginState}></button>
    </div>
  );
};

export default Users;
