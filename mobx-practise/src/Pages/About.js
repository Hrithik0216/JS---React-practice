import React from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  console.log("About component is rendered");
  const history = useHistory;
  console.log("History is ", history);
  return <div>About</div>;
};

export default About;
