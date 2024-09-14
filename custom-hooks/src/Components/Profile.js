import React from "react";
import useTodos from "./Utils/useTodos";

const Profile = () => {
  const { loading, todos } = useTodos('https://jsonplaceholder.typicode.com/todos');
  if (loading) {
    return <div>....loading</div>;
  }
  return (
    <>
      <ul>
        {todos.map((val) => (
          <li key={val.id}>{val.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Profile;
