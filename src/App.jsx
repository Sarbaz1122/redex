
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import './App.css'

function App() {
  return (
    <>
   <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-blue-900 
            p-8 rounded-2xl shadow-xl text-white flex justify-center items-start sm:items-center py-10 sm:py-0">
      <div
        className="
          bg-gradient-to-r from-gray-300 via-yellow-400 to-gray-700 p-10 text-white rounded-xl shadow-lg
          w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 
          mx-auto rounded-2xl p-6 sm:p-10
          shadow-xl 
          animate-appFade
        "
      >
        <h1 className="text-white text-3xl font-bold text-center mb-6 tracking-wide">
          Todo App
        </h1>

        <AddTodo />
        <Todo />
      </div>
</div>
    </>
  );
}

export default App;









