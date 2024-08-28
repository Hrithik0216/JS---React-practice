import React, { useEffect, useState } from "react";
import { makeAutoObservable, observable, action } from "mobx";
import { observer } from "mobx-react-lite";

class Store {
  content = [];
  next = 1;

  constructor() {
    makeAutoObservable(this, {
      content: observable,
      next: observable,
      setContent: action,
      setNext: action
    });
  }

  setNext(value = 1) {
    this.next = value;
  }

  setContent(value = []) {
    this.content = value;
  }
}

export const store = new Store();

const Posts = observer(() => {
  const [loading, setLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      store.setContent(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const showNextTodo = () => {
    if (store.next < store.content.length) {
      store.next = store.next + 1;
    }
  };

  const resetIndex = () => {
    store.setNext(1);
  };

  useEffect(() => {
    console.log(`Current item index: ${store.next}`);
    console.log(`Total items: ${store.content.length}`);
  }, [store.next, store.content.length]);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            fetchData(`https://jsonplaceholder.typicode.com/albums`)
          }
        >
          Click to get Albums
        </button>
        <button
          onClick={() =>
            fetchData(`https://jsonplaceholder.typicode.com/todos`)
          }
        >
          Click to get Todos
        </button>
      </div>
      <div>
        {!loading &&
          Array.isArray(store.content) &&
          store.content
            .filter((val) => val.id === store.next)
            .map((val) => (
              <div key={val.id}>
                <h2>{val.id}</h2>
                <p>{val.title}</p>
              </div>
            ))}
      </div>
      <div>
        {!loading && store.next < store.content.length && (
          <button onClick={showNextTodo}>Click to get Next data</button>
        )}
        {store.next === store.content.length && (
          <button onClick={resetIndex}>Reset the index value</button>
        )}
      </div>
    </div>
  );
});

export default Posts;
