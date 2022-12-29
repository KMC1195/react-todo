import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const AddTodo = (e) => {
    e.preventDefault();
    const blog = { name, description };

    setIsPending(true);

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
    });

    history.push("/");
    window.location.reload();
  };

  return (
    <div className="m-3">
      <h1 className="text-5xl">Create new todo</h1>
      <div className="mt-5">
        <span>Name:</span> <br />
        <input
          type="text"
          className="border-solid border-2 border-teal-700 rounded w-96 outline-none p-1 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <span>Description:</span> <br />
        <textarea
          value={description}
          className="border-solid border-2 border-teal-700 rounded w-96 outline-none p-1 h-60"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        {!isPending && (
          <button
            onClick={AddTodo}
            className="mt-3 px-5 py-3 rounded bg-teal-900 text-white hover:bg-teal-800 duration-300"
          >
            Create
          </button>
        )}
        {isPending && (
          <button className=" mt-3 px-5 py-3 rounded bg-teal-900 text-white hover:bg-teal-600 duration-300">
            Adding new todo...
          </button>
        )}
        <br />
      </div>
    </div>
  );
};

export default Create;
