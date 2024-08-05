import React, { memo, useCallback, useRef, useEffect } from "react";
import { useRenderCount } from "@uidotdev/usehooks";

const Child = (props) => {
  const { count = 0, setCount = () => {} } = props || {};

  const renderCount = useRenderCount();
  const renderRef = useRef(0);

  const increase = useCallback(() => {
    setCount((prevCOunt) => prevCOunt + 1);
  }, [setCount]);
  useEffect(() => {
    renderRef.current += 1;
  });
  return (
    <div>
      {count}
      <button onClick={increase}>Click me</button>{" "}
      <p>The render count is: {renderCount}</p>
      <p>The render count using useRef is: {renderRef.current}</p>
    </div>
  );
};

export default Child;
