import React, { useEffect, useState } from "react";
import { makeAutoObservable, observable, action } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

class Store {
  content = [];

  constructor() {
    makeAutoObservable(this, {
      content: observable,
      setContent: action
    });
  }

  setContent(value) {
    this.content = value;
  }
}
export const store = new Store();

const Posts = observer(() => {
  const { postNumber } = useParams();
  const [next, setNext] = useState(1);
  const [todoLoad, setTodoLoad] = useState(true);
  const [todoLoad2, setTodoLoad2] = useState(true);

  const getTodos = async () => {
    try {
    //   setNext(1);
      setTodoLoad(false);
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const res = await data.json();
      store.setContent(res);
    } catch (e) {
      console.log("Error in fetching: ", e);
    }
  };

  const getAlbums = async () => {
    try {
    //   setNext(1);
      setTodoLoad(false);
      const data = await fetch(`https://jsonplaceholder.typicode.com/albums`);
      const res = await data.json();
      store.setContent(res);
    } catch (e) {
      console.log(e);
    }
  };

  const showNextTodo = () => {
    if (next < store.content.length) {
      setNext((prev) => prev + 1);
    }
  };

  const restIndex = () => {
    if (next >= store.content.length) {
      setNext(1);
    }
  };

  useEffect(() => {
    console.log(`Current item index: ${next}`);
    console.log(`Total items: ${store.content.length}`);
  }, [next, store.content.length]);

  return (
    <div>
      <div>
        <button onClick={getAlbums}>Click to get Albums</button>
        <button onClick={getTodos}>Click to get Todos</button>
      </div>
      <div>
        {Array.isArray(store.content) &&
          store.content
            .filter((val) => val.id === next)
            .map((val) => (
              <div key={val.id}>
                <h2>{val.id}</h2>
                <p>{val.title}</p>
              </div>
            ))}
      </div>
      <div>
        {!todoLoad && next < store.content.length && (
          <button onClick={showNextTodo}>Click to get Next data</button>
        )}
        {next === store.content.length && (
          <button onClick={() => restIndex()}>Reset the index value</button>
        )}
      </div>
    </div>
  );
});

export default Posts;
