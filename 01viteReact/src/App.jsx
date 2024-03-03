import { useState } from "react";
import Check from "./Check.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>WELCOME TO REACT</div>
      <Check />
    </>
  );
}

export default App;
