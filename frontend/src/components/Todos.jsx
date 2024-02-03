import React, { useEffect } from "react";
import { useTodoContext } from "../context/useTodoContext";

function Todos() {
  const { getTodos, todos } = useTodoContext();
  
  console.log(todos)

  useEffect(() => {
    getTodos();
  }, []);
  //console.log(todos)
  return (
    <div className="flex  justify-center content-center">
      <ul>
        {todos && todos.map((todo)=>(
            <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
