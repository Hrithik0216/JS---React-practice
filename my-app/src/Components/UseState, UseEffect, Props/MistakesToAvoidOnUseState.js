import React, { useEffect, useState } from "react";


const MistakesToAvoidOnUseState = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    name: "",
  });
  const handleName = () => {
    // setUserInput(user.name="Hrithik") [Not recommended]
    setUserInput((user) => ({ ...user, name: "Hrithik" }));
  };
  const handleChange = (e) => {
    setUserInput((user) => ({ ...user, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    console.log(userInput);
  }, [userInput]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the First name"
        name="firstName"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="Enter the last name"
        name="lastName"
        onChange={handleChange}
      ></input>
      <p>user: {userInput?.name}</p>
      <button onClick={handleName}></button>
    </div>
  );
};

export default MistakesToAvoidOnUseState;
