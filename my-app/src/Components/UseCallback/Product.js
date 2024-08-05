import React, { memo } from "react";

const Product = (props) => {
  const { item = "", handleCart = () => {} } = props || "";
  console.log("The item received: ", item);
  return (
    <div
      className="product"
      style={{
        width: "50px",
        border: "5px solid black",
        padding: "25px",
        margin: "20px",
      }}
    >
      {item}
      <button onClick={handleCart}> Add to cart</button>
    </div>
  );
};

export default memo(Product);
