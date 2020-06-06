import React, { Component } from "react";
import Table from "./table";
import ColorSelector from "./colorSelector";
import classes from "./css/mainPanel.module.css";
class MainPanel extends Component {
  state = {
    Red: 255,
    Green: 255,
    Blue: 255,
    Alpha: 1,
    Rows: 1,
    Columns: 1,
  };
  addRows    = (event) => {
    this.setState({ Rows: this.state.Rows + 1 });
  };
  addColumns = (event) => {
    console.log("enter");

    this.setState((state) => ({ Columns: this.state.Columns + 1 }));
  };
  deleteRows = (event) => {
    if (this.state.Rows > 1) {
      this.setState((state) => ({ Rows: this.state.Rows - 1 }));
    }
  };
  deleteColumns = (event) => {
    if (this.state.Columns > 1) {
      this.setState((state) => ({ Columns: this.state.Columns - 1 }));
    }
  };
  changeColors = (Red, Green, Blue, Alpha) => {
    this.setState({ Red: Red, Green: Green, Blue: Blue, Alpha: Alpha });
  };
  render() {
    return (
      <div className={classes.mainDiv}>
        <div
          className={classes.Top}
          style={{
            backgroundColor: `rgba(${this.state.Red},${this.state.Green},${this.state.Blue},${this.state.Alpha}`,
            color: `rgba(${255 - this.state.Red},${255 - this.state.Green},${
              255 - this.state.Blue
            },1`,
          }}
        >
          <button name="Rows" onClick={this.addRows}>
            Insert Rows
          </button>

          <button name="Columns" onClick={this.addColumns}>
            Insert Columns
          </button>

          <button onClick={this.deleteRows}>Delete Rows</button>

                <button onClick={this.deleteColumns}>Delete Columns</button>
                <button onSubmit={this.changeColors}>Fill Color </button>
                <button> Convert Selected</button>
        </div>
        <div className={classes.tableDiv}>
          <Table
            Rows={this.state.Rows}
            Columns={this.state.Columns}
            Red={this.state.Red}
            Green={this.state.Green}
            Blue={this.state.Blue}
            Alpha={this.state.Alpha}
          />
        </div>
        <div className={classes.colorTable}>
          <ColorSelector
            onSubmit={this.changeColors}
            Red={this.state.Red}
            Green={this.state.Green}
            Blue={this.state.Blue}
            Alpha={this.state.Alpha}
          />
        </div>
      </div>
    );
  }
}
export default MainPanel;
