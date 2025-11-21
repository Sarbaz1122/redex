
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  return (
    <ul className="mt-8 w-full max-w-xl mx-auto">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="
            mt-4 flex justify-between items-center 
            bg-zinc-800 px-4 py-3 rounded-xl 
            shadow-md 
            hover:shadow-xl hover:scale-[1.02]
            transition-all duration-300 
          "
        >
          <div className="text-white text-lg font-medium">
            {todo.text}
          </div>

          <div className="flex items-center gap-3">

            {/* 🔵 EDIT BUTTON */}
            <button
              onClick={() => {
                const newText = prompt("Edit todo:", todo.text);
                if (newText && newText.trim() !== "") {
                  dispatch(updateTodo({ id: todo.id, newText }));
                }
              }}
              className="
                text-white bg-blue-600 py-2 px-3 rounded-lg 
                hover:bg-blue-700 transition-all 
                hover:scale-110 active:scale-95
              "
            >
              {/* Edit Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687 1.687a2.4 2.4 0 010 3.393l-8.25 8.25a2.4 2.4 0 01-1.132.63l-3.21.803a.6.6 0 01-.732-.732l.803-3.21a2.4 2.4 0 01.63-1.132l8.25-8.25a2.4 2.4 0 013.394 0z"
                />
              </svg>
            </button>

            {/* 🔴 DELETE BUTTON */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="
                text-white bg-red-600 py-2 px-3 rounded-lg 
                hover:bg-red-700 transition-all 
                hover:scale-110 active:scale-95
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397"
                />
              </svg>
            </button>

          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
