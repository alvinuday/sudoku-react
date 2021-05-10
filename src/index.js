import React from "react";
import ReactDOM from "react-dom";
import Center from "react-center";
import "./index.css";
import SudokuGame from "./components/SudokuGame";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Center>
    <SudokuGame />
  </Center>,
  document.getElementById("root")
);
reportWebVitals();
