import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CellValue, Player } from "./utils/game";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const c: CellValue = "O";
const p: Player = c ? (c as Player) : "X";

console.log({ p });
