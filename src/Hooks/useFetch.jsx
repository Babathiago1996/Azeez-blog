import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(url, { signal: abortCont.signal });
          if (!response.ok) {
            throw Error("could not fetch data from this resource");
          }
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("fetch abort");
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        }
      }, 1000);
    };
    fetchData();
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};
export default useFetch;
