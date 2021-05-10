import React, { Component } from "react";
/* import styles from "./mystyle.module.css"; */
/* import "./SudokuButtons.css"; */
import { Button } from "@material-ui/core";
class SudokuButtons extends Component {
  render() {
    const btnStyle = {
      marginTop: 25,
      marginLeft: 18,
      margin: 10,
      "&:hover": {
        color: "red",
      },
    };

    return (
      <div className="SudokuButtons">
        <Button
          className="gameBtn"
          color="primary"
          variant="outlined"
          style={btnStyle}
          onClick={this.props.onVerifyClick}
        >
          Verify
        </Button>
        <Button
          className="gameBtn"
          color="secondary"
          variant="outlined"
          disabled={this.props.historyLength < 1}
          style={btnStyle}
          onClick={this.props.onUndoClick}
        >
          Undo
        </Button>
        <Button
          className="gameBtn"
          color="primary"
          variant="contained"
          style={btnStyle}
          onClick={this.props.onNewGameClick}
        >
          New Game
        </Button>
      </div>
    );
  }
}

export default SudokuButtons;
