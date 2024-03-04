import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const Customreactelement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    title: "Go to Google.com",
  },
  "Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
  Customreactelement
);
