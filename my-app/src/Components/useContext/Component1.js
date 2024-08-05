import React, { createContext, useState } from "react";
import Component3 from "./Component3";
import Component4 from "./Component4";

export const userContext = createContext();
const Component1 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>From Component 1</h1>
      <p>The name is :{name}</p>
      <p>My age is :{age}</p>
      <userContext.Provider value={{ name, setName, setAge, age }}>
        <Component3 />
        <Component4 />
      </userContext.Provider>
    </div>
  );
};

export default Component1;
