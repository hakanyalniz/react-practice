import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Examples from "./examples.jsx";
import StateExample from "./StateExample.jsx";
import EffectExample from "./EffectExample.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <EffectExample />
    <Examples />
    <StateExample />
  </React.StrictMode>
);

