import { useState } from "react";
import Count from "./Components/Count";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Felles teller</h1>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
    </div>
  );
}

export default App;
