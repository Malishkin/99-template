import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
  "Click me 1",
  "Click me 2",
  "Click me 3",
  "Click me 4",
  "Click me 5",
  "Click me 6",
  "Click me 7",
];
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => (
        <Button key={index} onClick={incrementCount} text={text} />
      ))}
    </div>
  );
}

export default App;
