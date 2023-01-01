import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const {
    todos: todo,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos/" + id);

  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      {isPending && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {todo && (
        <div className="m-3">
          <h1 className="text-6xl mb-6">{todo.name}</h1>
          <p>{todo.description}</p>
          <button
            onClick={deleteTodo}
            className="mt-3 px-3 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
