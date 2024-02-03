import React, { useState } from "react";
import { useTodoContext } from "../context/useTodoContext";
import { FaPlusCircle } from "react-icons/fa";
function TodoForm() {
  const [newTodo, setNewTodo] = useState({ title: "" });
  const { addTodo, resonseMessage } = useTodoContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));
    
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
       
      //console.log(todo)
    }
  };
  return (
    <div className="flex  justify-center content-center">
      <form onSubmit={handleAddTodo} className="">
        <input
          type="text"
          name="title"
          value={newTodo.title}
          className="w-full outline-none p-2 bg-gray-100 mb-2"
          placeholder="*Enter title"
          onChange={handleInputChange}
        />
        {/* <input
          type="text"
          name="description"
          id="description"
          value={todo.description}
          placeholder="Enter discription"
          onChange={handleInputChange}
          className="w-full outline-none p-2 bg-gray-100 mb-2"
        /> */}
        <button
          type="submit"
          className="p-1 flex   text-lg px-4 text-white bg-indigo-800 mb-2 hover:bg-green-900"
        >
          ADD
        </button>
      </form>
      {resonseMessage && <p>{resonseMessage}</p>}
    </div>
  );
}

export default TodoForm;
