import { useState } from "react";
import "./App.css";

function App() {
  let [updatePassenger, setUpdatePassenger] = useState(3); // Hooks

  const add = () => {
    //Increse the Passenger by 1
    if (updatePassenger < 20) {
      updatePassenger += 1;
      setUpdatePassenger(updatePassenger);
    }
  };

  const sub = () => {
    //Decrese the Passenger by 1
    if (updatePassenger > 0) {
      updatePassenger -= 1;
      setUpdatePassenger(updatePassenger);
    }
  };
  return (
    <>
      <p>WELCOME TO JHELUM EXPRESS (JAMMU -- PUNE)</p>
      <p>TOTAL PASSENGERS: {updatePassenger}</p>
      <div>
        <button onClick={add} id="in-btn">
          IN
        </button>
      </div>
      <div>
        <button onClick={sub} id="out-btn">
          OUT
        </button>
      </div>
    </>
  );
}

export default App;
