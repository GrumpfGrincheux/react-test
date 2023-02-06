import { Container } from "./Container";
import { Button } from "./Button";
import { useEffect } from "react";
import { useCounter } from "./useCounter";

export function CounterPage() {
  const counter1 = useCounter();
  const counter2 = useCounter();
  useEffect(() => {
    console.log("Hello");
  }, [counter1.increment]);
  return (
    <Container>
      <div>
        <p>{counter1.counter}</p>
        <Button
          className="App__quote-button"
          color="green"
          number={counter1.counter}
          onClick={() => counter1.increment()}
        >
          Increment
        </Button>
        <Button onClick={() => counter1.decrement()}>Decrement</Button>
      </div>
      <div>
        <p>{counter2.counter}</p>
        <Button onClick={() => counter2.increment()}>Increment</Button>
        <Button onClick={() => counter2.decrement()}>Decrement</Button>
      </div>
    </Container>
  );
}
