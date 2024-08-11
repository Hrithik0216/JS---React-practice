import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  console.log("Home component is rendered");
  const location = useLocation();

  console.log("location: ", location);
  // replacement of history.location.pathname
  console.log("location: ", location.pathname);

  return (
    <div>
      <p>My name is {location?.state?.name}</p>
    </div>
  );
};

export default Home;
