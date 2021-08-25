import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "b130f1a984msh3bf6b8bb1daccabp1bd710jsn7ccaa16a87d9",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la info",
        });
      });
  }, [url]);

  return state;
};
