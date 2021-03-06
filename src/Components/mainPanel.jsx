import React, { Component } from "react";
import Table from "./table";
import ColorSelector from "./colorSelector";
import classes from "./css/mainPanel.module.css";
class MainPanel extends Component {
  state = {
    Red: 55,
    Green: 55,
    Blue: 255,
    Alpha: 1,
    Rows: 1,
    Columns: 1,
    fillAll: false,
    Selective: false,
  };
  addRows = (event) => {
    this.setState({ Rows: this.state.Rows + 1 });
  };
  addColumns = (event) => {
    console.log("enter");

    this.setState((state) => ({ Columns: this.state.Columns + 1 }));
  };
  deleteRows = (event) => {
    if (this.state.Rows > 1) {
      this.setState((state) => ({ Rows: this.state.Rows - 1 }));
    } else {
      alert("need at least one row");
    }
  };
  deleteColumns = (event) => {
    if (this.state.Columns > 1) {
      this.setState((state) => ({ Columns: this.state.Columns - 1 }));
    } else {
      alert("need at least one column");
    }
    };
    convertSelected = (e) => {
        this.setState({ Selective: !this.state.Selective });
    }
  changeColors = (Red, Green, Blue, Alpha) => {
    this.setState({ Red: Red, Green: Green, Blue: Blue, Alpha: Alpha });
  };
    fillColor = (event) => {
        console.log(this.state.fillAll);
        console.log("clicked");
      this.setState({ fillAll: !this.state.fillAll });
     console.log("clicked");
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
          <button onClick={this.fillColor}>Fill Color </button>
                <button onClick={this.convertSelected}> Convert Selected</button>
        </div>
        <div className={classes.tableDiv}>
          <Table
                    Rows={this.state.Rows}
                    Columns={this.state.Columns}
                    Red={this.state.Red}
                    Green={this.state.Green}
                    Blue={this.state.Blue}
                    Alpha={this.state.Alpha}
                    fillAll={this.state.fillAll}
                    Selective={this.state.Selective}
          />
        </div>
        <div className={classes.colorTable}>
          <ColorSelector
            onChange={this.changeColors}
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
