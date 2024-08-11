import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  console.log("Posts component is rendered");
  const obj = {
    name: "Hrithik",
    age: 22
  };

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [next, setNext] = useState(1);

  const getPosts = async () => {
    try {
      setLoader(false);
      console.log("Get posts method is alsorendereed");
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      //console.log(res);
      setPosts(res);
      console.log(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const getNext = () => {
    setNext((prev) => prev + 30);
  };
  const resetNext = () => {
    setNext(1);
    setLoader(true);
  };

  const navigate = useNavigate();

  //Passing props using useNavigate & replacement of history.push()
  const navigateToHome = () => {
    navigate("/", { state: obj });
  };
  // replacement of history.goBack()
  const navigateBack = () => {
    navigate(-1);
  };

  // replacement of history.goForward()
  const navigateorward = () => {
    navigate(1);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <button onClick={navigateToHome}>Navigate to Home</button>
      <button onClick={navigateBack}>Navigate Back</button>
      <button onClick={navigateorward}>Navigate forward</button>

      {loader && <button onClick={getPosts}>Get the posts title</button>}
      {!(next > posts.length) && (
        <button onClick={getNext}>Get next post</button>
      )}
      {!loader &&
        posts
          .filter((val) => val.id === next)
          .map((val) => (
            <div>
              <p>{val.title}</p>
            </div>
          ))}
      {next > posts.length && (
        <button onClick={resetNext}>Reset the next value</button>
      )}
    </div>
  );
};

export default Posts;
