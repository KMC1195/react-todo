const Create = () => {
  return (
    <div className="m-3">
      <h1 className="text-5xl">Create new todo</h1>
      <div className="mt-5">
        <span>Name:</span> <br />
        <input
          type="text"
          className="border-solid border-2 border-teal-700 rounded w-96 outline-none p-1 mb-3"
        />{" "}
        <br />
        <span>Description:</span> <br />
        <textarea className="border-solid border-2 border-teal-700 rounded w-96 outline-none p-1 h-60" />{" "}
        <br />
        <button className=" mt-3 px-5 py-3 rounded bg-teal-900 text-white hover:bg-teal-800 duration-300">
          Create
        </button>{" "}
        <br />
      </div>
    </div>
  );
};

export default Create;
