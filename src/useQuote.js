import { useCallback, useState, useEffect } from "react";

export function useQuote() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const getQuote = useCallback(async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      if (response.status === 200) {
        const randomId = Math.floor(Math.random() * data.length);
        setQuote(data[randomId].text);
        setAuthor(data[randomId].author);
      } else {
        setQuote(`Error ${response.status}`);
      }
    } catch (error) {
      setQuote(`${error}`);
    }
  }, []);
  useEffect(() => {
    getQuote();
  }, [getQuote]);
  return {
    quote,
    author,
    getQuote,
  };
}
