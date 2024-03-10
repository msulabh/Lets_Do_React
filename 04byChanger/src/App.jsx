import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div id="web-page" style={{ backgroundColor: color }}>
      <div>
        <button className="red same">red</button>
        <button className="blue same">blue</button>
        <button className="green same">green</button>
        <button className="yellow same">yellow</button>
        <button className="pink same">pink</button>
        <button className="gold same">gold</button>
      </div>
    </div>
    // </>
  );
}

export default App;
