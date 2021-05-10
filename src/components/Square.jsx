import React, { Component } from "react";
class Square extends Component {
  generateSquareContent = () => {
    //square can be edited by user if its value is '0'

    const disabled = !this.props.editable;
    const squareValue = this.props.value === "0" ? "" : this.props.value;

    //styling borders
    const style = {};
    const ri = this.props.rowIndex;
    const ci = this.props.colIndex;
    if (ri > 0 && ri % 3 === 0) {
      style["borderTop"] = "2px solid black";
    }
    if (ci > 0 && ci % 3 === 0) {
      style["borderLeft"] = "2px solid black";
    }
    if (this.props.conflict) {
      if (this.props.editable) {
        style["background"] = "red";
      } else {
        style["border"] = "1px solid red";
      }
    }
    return (
      <td>
        <input
          className="Square"
          style={style}
          type="text"
          disabled={disabled}
          onChange={this.handleSquareValueChange}
          value={squareValue}
        />
      </td>
    );
  };

  handleSquareValueChange = (event) => {
    const newSquareValue = event.target.value;
    if (this.isValidInput(newSquareValue)) {
      const ri = this.props.rowIndex;
      const ci = this.props.colIndex;
      this.props.onValueChange(ri, ci, newSquareValue);
    }
  };
  isValidInput = (i) => {
    return i === "" || (i.length === 1 && isNumber(i));
  };
  render() {
    return this.generateSquareContent();
  }
}
const isNumber = (num) => {
  return !isNaN(num);
};

export default Square;
