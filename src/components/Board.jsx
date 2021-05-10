import React, { Component } from "react";
import Square from "./Square";
import SudokuButtons from "./SudokuButtons";

class Board extends Component {
  handleSquareValueChange = (i, j, newValue) => {
    this.props.onSquareValueChange(i, j, newValue);
  };

  generateBoard = () => {
    const board = [];
    const boardState = this.props.boardState;

    for (let i = 0; i < boardState.length; i++) {
      let currentRow = [];
      for (let j = 0; j < boardState[i].length; j++) {
        const conflicts = this.props.conflicts;
        const conflict = conflicts.has(i + "" + j) ? true : false;
        let currentSquare = (
          <Square
            key={"" + i + j}
            value={boardState[i][j].cellValue}
            editable={boardState[i][j].editable}
            conflict={conflict}
            rowIndex={i}
            colIndex={j}
            onValueChange={this.handleSquareValueChange}
          />
        );
        currentRow.push(currentSquare);
      }
      board.push(<tr key={i}>{currentRow}</tr>);
    }
    return board;
  };

  render() {
    const board = this.generateBoard();
    return (
      <div>
        <table className="Board">
          <tbody>{board}</tbody>
        </table>
        <SudokuButtons
          historyLength={this.props.historyLength}
          onUndoClick={this.props.onUndoClick}
          onNewGameClick={this.props.onNewGameClick}
          onVerifyClick={this.props.onVerifyClick}
        />
      </div>
    );
  }
}

export default Board;
