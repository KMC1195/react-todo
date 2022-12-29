import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <h1 className="text-6xl m-3">Those are your todos!</h1>
      <button className="m-3 px-5 py-3 rounded bg-teal-900 text-white hover:bg-teal-800 duration-300">
        Add new
      </button>
      <Todos />
    </div>
  );
}

export default App;
