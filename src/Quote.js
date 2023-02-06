import { useQuote } from "./useQuote";
import { Button } from "./Button";

export function Quote() {
  const quote = useQuote();
  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <Button onClick={() => quote.getQuote()}>New quote</Button>
    </div>
  );
}
