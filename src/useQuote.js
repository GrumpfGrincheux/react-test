import { useCallback, useState, useEffect } from "react";

export function useQuote() {
  const [quote, setQuote] = useState();
  const getQuote = useCallback(async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      let data = await response.json();
      setQuote(data.fact);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getQuote();
  }, [getQuote]);
  return quote;
}