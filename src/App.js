import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Button";
import { Quote } from "./Quote";
import { useCounter } from "./useCounter";
import { useEffect } from "react";
import { Container } from "./Container";
import { useQuote } from "./useQuote";

const name = "Grumpf";

function App() {
  const counter1 = useCounter();
  const counter2 = useCounter();
  const quote = useQuote();
  useEffect(() => {
    console.log("Hello");
  }, [counter1.increment]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Quote>
            <p>{quote}</p>
          </Quote>
        </div>
        <Container>
          <div>
            <p>{counter1.counter}</p>
            <Button
              className="_green"
              onClick={() => counter1.increment()}
              number={counter1.counter}
            >
              Increment
            </Button>
            <Button
              onClick={() => counter1.decrement()}
              number={counter1.counter}
            >
              Decrement
            </Button>
          </div>
          <div>
            <p>{counter2.counter}</p>
            <Button
              onClick={() => counter2.increment()}
              number={counter2.counter}
            >
              Increment
            </Button>
            <Button
              onClick={() => counter2.decrement()}
              number={counter2.counter}
            >
              Decrement
            </Button>
          </div>
        </Container>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name}
        </a>
      </header>
    </div>
  );
}

export default App;
