import React, { useContext } from "react";
import { userContext } from "./Component1";
import Component2 from "./Component2";

const Component4 = () => {
  const { setName, setAge, name, age } = useContext(userContext);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>From Component 4</h1>
      <input type="text" onChange={handleNameChange}></input>
      <p>The name is :{name}</p>
      <p>My age is :{age}</p>
      <Component2 name={name} setAge={setAge} />
    </div>
  );
};

export default Component4;
