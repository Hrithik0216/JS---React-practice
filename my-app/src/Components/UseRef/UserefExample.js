import React, { useRef, useEffect, useState } from "react";

const Example = () => {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const valRef = useRef("");
  const [val, setval] = useState("");

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    valRef.current = val;
  }, [val]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="To show how the focus on ref works"
      ></input>
      <input type="text" onChange={(e) => setval(e.target.value)}></input>
      <p>The current value: {val} </p>
      <p>The old value: {valRef.current}</p>
      <div>
        <video ref={videoRef} src="sample.mp4"></video>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default Example;
