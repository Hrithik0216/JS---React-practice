import React from "react";

const Component2 = (props) => {
  const { name = "", setAge = () => {} } = props || "";
  const handleIncreaseAge = () => {
    setAge((prev) => prev + 1);
  };
  const handleDecreaseAge = () => {
    setAge((prev) => prev - 1);
  };
  return (
    <div>
      <h1>From Component 2</h1>
      <p>The name is :{name}</p>
      <button onClick={handleIncreaseAge}>Click me to increase the age</button>
      <button onClick={handleDecreaseAge}>Click me to increase the age</button>
    </div>
  );
};

export default Component2;
