import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Loop from "./components/MainSwiper/Loop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Loop />
  </StrictMode>
);
