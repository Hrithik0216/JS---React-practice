import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Users = () => {
  console.log("users component is rendered");

  const { username } = useParams();
  const [islogin, setIsLogin] = useState(false);
  const changeLoginState = () => {
    setIsLogin(true);
  };
  const navigate = useNavigate();
  return (
    <div>
      <p>user: {username}</p>
    </div>
  );
};

export default Users;
