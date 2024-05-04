import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const buttonStyle = { backgroundColor: "lightcoral" };
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <div>
        {count > 0 && (
          <button style={buttonStyle} onClick={() => setCount(0)}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
