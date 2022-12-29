import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [todos, setTodos] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const abortCont = new AbortController();

    setIsPending(true);
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { todos, isPending, error };
};

export default useFetch;
