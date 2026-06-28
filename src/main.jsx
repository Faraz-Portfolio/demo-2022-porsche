import { createRoot } from "react-dom/client";
import App from "./App";
import { UI } from "./UI";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <UI />
  </>
);
