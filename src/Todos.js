import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Todos = () => {
  const { todos, isPending, error } = useFetch("http://localhost:8000/todos");

  return (
    <div>
      <div className="flex justify-center align-center flex-col">
        {todos &&
          todos.map((todo) => (
            <div
              className="border-solid border-4 py-3 w-95% m-3 rounded border-teal-700 flex"
              key={todo.id}
            >
              <h1 className="text-4xl text-center p-3 inline">{todo.name}</h1>
              <Link to={`/${todo.id}`}>
                <button className="px-2 border-solid border-2 h-12 mt-2 ml-3 border-black rounded">
                  Details...
                </button>
              </Link>
            </div>
          ))}
      </div>
      {isPending && (
        <span className="text-5xl m-3 flex justify-center">Loading...</span>
      )}
      {error && (
        <span className="text-5xl m-3 flex justify-center text-red-700">
          {error}
        </span>
      )}
    </div>
  );
};

export default Todos;
