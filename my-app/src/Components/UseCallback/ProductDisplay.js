import React, { useCallback, useState } from "react";
import Product from "./Product";

const ProductDisplay = () => {
  const productList = ["Product 1", "Product 2"];
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const handleCart = useCallback(() => {
    setCart((prev) => prev + 1);
  }, [cart]);

  const handleIncrease = () => {
    console.log("Button is clicked");
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      {count}
      <button onClick={handleIncrease}>Click me</button>

      <p>cart value: {cart}</p>
      {productList.map((item) => {
        return <Product item={item} handleCart={handleCart} />;
      })}
    </div>
  );
};

export default ProductDisplay;

// Points to be noted:
// 1. produxt list is sent as props. Whenever there is a change in in count in parent it affects the child to re-render eventhough there is no change in props that is sent and received.
// 2. To avoid this use React.memo() for child component
//3. All these are before creating a add to cart button in Product.
//4.Let's say we create a add to cart button in Product. But the values are assigned in parent and it's increment function is also in parent and it is sent as props to child.
//So on counter button click the entire component re-renders and the function sent to Product child is recreated on every re-render.
//So REact.memo() thinks a new prop is recieved and rerenders ir again. HOw to overcome this?
//5.To avaoid this recreation of the function use useCallBack() and provide proper dependencies.
