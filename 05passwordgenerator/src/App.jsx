import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("6");
  const [numberBox, setNumberBox] = useState(false);
  const [CharactersBox, setCharactersBox] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pswrd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberBox) str += "0123456789";
    if (CharactersBox) str += "!@#$%^&*()-_+={}[]|:;'<>,.?/";
    console.log(str);
    console.log(numberBox);
    for (let i = 0; i < length; i++) {
      const randomCharIndex = Math.floor(Math.random() * str.length);
      pswrd += str.charAt(randomCharIndex);
    }
    setPassword(pswrd);
  }, [length, numberBox, CharactersBox]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberBox, CharactersBox]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div id="js-align">
        <div className="js-input-btn">
          <input
            className="js-input-pass"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          ></input>
          <button className="copy-btn" onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>

        <div id="second">
          <input
            type="range"
            className="js-bar"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="length">Length: ({length})</label>

          <input
            type="checkbox"
            className="js-checkbox"
            checked={numberBox}
            onChange={() => {
              setNumberBox((prev) => !prev);
            }}
          />
          <label className="length">Number</label>

          <input
            type="checkbox"
            className="js-checkbox"
            checked={CharactersBox}
            onChange={() => {
              setCharactersBox((prev) => !prev);
            }}
          />
          <label className="length">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
