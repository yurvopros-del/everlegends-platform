import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// GitHub Pages SPA fallback decoder (paired with public/404.html)
const params = new URLSearchParams(window.location.search);
const p = params.get("p");
if (p) {
  params.delete("p");
  const rest = params.toString();
  window.history.replaceState({}, "", p + (rest ? `?${rest}` : ""));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
