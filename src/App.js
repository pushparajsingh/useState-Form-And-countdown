import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";
import Counter from "./check";
import Register from "./register";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter />
      <Register />
    </div>
  );
}

export default App;
