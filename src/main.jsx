import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Find the root element in your index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
