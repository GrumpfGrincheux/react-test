import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Button";
import { CatFact } from "./CatFact";
import { useCounter } from "./useCounter";
import { useEffect } from "react";
import { Container } from "./Container";
import { Quote } from "./Quote";

const name = "Grumpf";

function App() {
  const counter1 = useCounter();
  const counter2 = useCounter();
  useEffect(() => {
    console.log("Hello");
  }, [counter1.increment]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <CatFact></CatFact>
          <Quote></Quote>
        </Container>
        <Container>
          <div>
            <p>{counter1.counter}</p>
            <Button onClick={() => counter1.increment()}>Increment</Button>
            <Button onClick={() => counter1.decrement()}>Decrement</Button>
          </div>
          <div>
            <p>{counter2.counter}</p>
            <Button onClick={() => counter2.increment()}>Increment</Button>
            <Button onClick={() => counter2.decrement()}>Decrement</Button>
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
