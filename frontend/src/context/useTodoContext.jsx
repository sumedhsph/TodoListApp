import { createContext, useContext, useState, useEffect } from "react";
import customFetch from "../utils";
import axios from "axios";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [resonseMessage, setResonseMessage] = useState("");
  const [todos, setTodos] = useState([]);


  const addTodo = async (todo) => {
    console.log(todo)
    try {
      // const response = await axios.get("http://localhost:8080/api/v1/todos?query=reactjs&complete=false")
      const response = await axios.post(
        "http://localhost:4000/api/todos",
        todo
      );
      //console.log(response.data);
      //setTodos(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/todos"
      );
      setTodos(res.data);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    addTodo,
    getTodos,
    resonseMessage,
    todos
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

//custom hook to use context
export const useTodoContext = () => {
  return useContext(TodoContext);
};
