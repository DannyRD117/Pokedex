import React, { useState, useEffect } from "react";

export const useFetch = (name = "") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setData(await response.json());
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { data, isLoading, error };
};
