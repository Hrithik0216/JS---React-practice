import React, { useState, useRef, useEffect } from "react";

const StateManagement = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [content, setContent] = useState("");
  const contentref = useRef(null);
  const inputRef = useRef(null);

  function calculation() {
    setCount((prev) => prev + Number(value));
  }

  useEffect(() => {
    contentref.current = content;
  }, [content]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          ref={inputRef}
        ></input>
        <input ref={inputRef}></input>

        <button onClick={calculation}> Button</button>
        <p>count: {count}</p>
      </div>

      <div>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Counter Button</button>
      </div>

      <div>
        <input
          value={content}
          placeholder="Enter any text"
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <p>current value: {content}</p>
        <p>Previoud value: {contentref.current}</p>
      </div>
    </div>
  );
};

export default StateManagement;
