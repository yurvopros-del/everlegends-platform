import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);
