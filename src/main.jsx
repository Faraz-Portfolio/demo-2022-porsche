import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import Tag from "./Tag";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Tag />
  </>
);
