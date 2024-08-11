import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  console.log("Settings component is rendered");

  const navigate = useNavigate();
  return (
    <div>
      <p>Settings</p>
      <button onClick={() => navigate("/")}>Navigate to Home</button>
    </div>
  );
};

export default Settings;
