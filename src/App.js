import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <p>Some description</p>
        <input type="text" placeholder="Some value" />
      </Wrapper>
    </div>
  );
}

export default App;
