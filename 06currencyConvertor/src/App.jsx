import { useState } from "react";
import UseCurrencyInfo from "./customhook/Hooks";
import InputBox from "./components/InputBox.jsx";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);
  // console.log(typeof currencyInfo[to]);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    // console.log(amount * currencyInfo["to"])
  };

  // console.timeLog(to);
  // console.log(convertedAmount);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   console.log(currencyOptions);
          //   // value = { amount };
          //   // onchange={(e)=>{}}
          // }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyType={from}
                totalCurrenciesType={currencyOptions}
                updateCurrencyType={(currency) => setFrom(currency)}
                upateAmount={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyType={to}
                totalCurrenciesType={currencyOptions}
                updateCurrencyType={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
