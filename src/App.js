import { useState } from "react";
import Counting from "./Counting";

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  let obj = {
    name: "First",
    count,
  };
  return (
    <div className="App">
      <button onClick={Increment}>Add</button>
      <Counting {...obj} />
      <Counting name="Second" count={count} />
      <Counting name="Third" count={count} />
    </div>
  );
}

export default App;
