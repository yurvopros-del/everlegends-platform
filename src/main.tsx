// --- GH Pages deep-link decoder (?p=...) ---
// MUST NOT reload the page, otherwise /ru/index.html -> /?p=... -> /ru/index.html loops.
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");
  if (!p) return;

  url.searchParams.delete("p");

  let decoded = "";
  try { decoded = decodeURIComponent(p); } catch { decoded = p; }

  try {
    const asUrl = new URL(decoded);
    decoded = asUrl.pathname + asUrl.search + asUrl.hash;
  } catch {}

  if (!decoded.startsWith("/")) decoded = "/" + decoded;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!decoded.startsWith(base + "/")) decoded = base + decoded;

  window.history.replaceState(null, "", decoded);
})();
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Global crash overlay (so "black page" becomes a visible error message)
function showFatal(err: unknown) {
  try {
    const msg = err instanceof Error ? (err.stack || err.message) : String(err);
    const el = document.createElement("pre");
    el.style.position = "fixed";
    el.style.inset = "0";
    el.style.margin = "0";
    el.style.padding = "16px";
    el.style.background = "#0b0b0f";
    el.style.color = "#fff";
    el.style.font = "12px/1.4 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    el.style.whiteSpace = "pre-wrap";
    el.style.zIndex = "2147483647";
    el.textContent = "FATAL RUNTIME ERROR\\n\\n" + msg;
    document.body.innerHTML = "";
    document.body.appendChild(el);
  } catch {
    // ignore
  }
}
window.addEventListener("error", (e) => showFatal((e as ErrorEvent).error || (e as ErrorEvent).message));
window.addEventListener("unhandledrejection", (e) => showFatal((e as PromiseRejectionEvent).reason));

// GitHub Pages SPA fallback decoder (paired with public/404.html)
const params = new URLSearchParams(window.location.search);
const p = params.get("p");
if (p) {
  params.delete("p");
  const rest = params.toString();
  window.history.replaceState({}, "", p + (rest ? `?${rest}` : ""));
}

try {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  showFatal(err);
}

