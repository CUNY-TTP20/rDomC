import React, { Component } from "react";
import classes from "./css/table.module.css";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 1,
      column: 1,
      red: this.props.Red,
      green: this.props.Green,
      blue: this.props.Blue,
      alpha: this.props.Alpha,
      fillAll: this.props.fb,
      selective: false,
      cr: "",
      cg: "",
      cb: "",
      ca: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      row: nextProps.Rows,
      column: nextProps.Columns,
      selective: nextProps.selective,
      cr: nextProps.Red,
      cg: nextProps.Green,
      cb: nextProps.Blue,
      ca: nextProps.Alpha,
      fillAll: nextProps.fb,
      selective: nextProps.selective,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.fillAll !== prevProps.fillAll) {
      console.log("aaaaaaaaaaaaaaaaaaa");
      this.setState({
        red: this.state.cr,
        green: this.state.cg,
        blue: this.state.cb,
        alpha: this.state.ca,
      });
    } else {
      console.log("bbbbbb");

    }
  }
  weHover(e) {
    e.target.style.width = "80px";
    e.target.style.borderColor = "blue";
    e.target.style.height = "80px";
  }
  Leave(e) {
    e.target.style.borderColor = "black";
    e.target.style.width = "70px";
    e.target.style.height = "70px";
  }
  render() {
    //main render for table
    let red = this.state.red;
    let green = this.state.green;
    let blue = this.state.blue;
    let alpha = this.state.alpha;
    let rows = this.state.row;
    let columns = this.state.column;
    let column_td = range(0, columns).map((i) => {
      return (
        <td
          onMouseOver={this.weHover}
          onMouseLeave={this.Leave}
          id={get_random_integer(200)}
          className={classes.tdName}
        ></td>
      );
    });
    let row_tr = range(0, rows).map((i) => {
      return (
        <tr
          id={i}
          style={{
            backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
          }}
        >
          {column_td}
        </tr>
      );
    });

    return (
      <div className={classes.Div}>
        <table>
          <thead>{row_tr}</thead>
        </table>
      </div>
    );
  }
}
function get_random_integer(maximum) {
  return Math.floor(Math.random() * Math.floor(maximum));
}
function range(start, end) {
  var foo = [];
  for (var i = start; i < end; i++) {
    foo.push(i);
  }
  return foo;
}
export default Table;
