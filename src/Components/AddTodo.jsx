
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    
    // <form onSubmit={addTodoHandler} className="mt-12 space-x-6 ml-1 mt-30">
    //   <input
    //     type="text"
    //     className="border p-3"
    //     placeholder="Add todo..."
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //   />
    //   <button className="bg-blue-500 text-white px-3 py-3 rounded ">
    //     Add Todo
        
    //   </button>
    // </form>
    <form
      onSubmit={addTodoHandler}
      className="
        flex flex-col sm:flex-row justify-center sm:ml-12 items-center 
        gap-4 sm:gap-3 mt-12
        animate-fadeIn
      "
    >
      <input
        type="text"
        className="
          bg-gray-800 rounded-xl border border-gray-700 
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
          text-base outline-none text-gray-100 py-2 px-4 
          w-10/12 sm:w-auto
          transition-all duration-300 ease-in-out
          focus:scale-105
        "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="
          text-white bg-indigo-600 py-2 px-6 rounded-xl text-lg
          hover:bg-indigo-700 hover:scale-105 
          active:scale-95
          transition-all duration-300
          shadow-md hover:shadow-xl
        "
      >
        Add Todo
      </button>
</form>

    
  );
}

export default AddTodo;
