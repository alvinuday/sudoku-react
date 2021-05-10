import React, { Component } from "react";
import Square from "./components/Square";
import SudokuButtons from "./components/SudokuButtons";
import Board from "./components/Board";
import SudokuGame from "./components/SudokuGame";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SudokuGame />
      </div>
    );
  }
}

export default App;
