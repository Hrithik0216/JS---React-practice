import { useState, useEffect } from "react";

const useTodos = (url) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json(); // Await the JSON response
        setTodos(data); // Set the todos once the data is parsed
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false); // Ensure loading is set to false even in case of an error
      }
    };
    
    getTodos();
  }, []);

  return { todos, loading };
};

export default useTodos;
