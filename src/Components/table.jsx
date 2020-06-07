import React, { Component } from "react";
import classes from "./css/table.module.css";
let iker = 0;
let selected_list =[]
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
      Selective: this.props.Selective,
      cr: "",
      cg: "",
      cb: "",
      ca: "",
    };
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      row: nextProps.Rows,
      column: nextProps.Columns,
      Selective: nextProps.Selective,
      cr: nextProps.Red,
      cg: nextProps.Green,
      cb: nextProps.Blue,
      ca: nextProps.Alpha,
      fillAll: nextProps.fb,
      
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.fillAll !== prevProps.fillAll) {
      // console.log("aaaaaaaaaaaaaaaaaaa");
      this.setState({
        red: this.state.cr,
        green: this.state.cg,
        blue: this.state.cb,
        alpha: this.state.ca,
      });
    }
    
    else if (this.props.Selective !== prevProps.Selective) {
      selected_list.map((i) => {
        i.style.backgroundColor = `rgba(${this.state.cr},${this.state.cg},${this.state.cb},${this.state.ca})`;
      })
    }
    else {
      console.log("something");
    }
  }
  td_clicked(e) {
    selected_list.push(e.target);    
    console.log(selected_list);
    e.target.removeEventListener("mouseleave", e.target.onMouseLeave);
  }
  weHover(e) {
    e.target.style.width = "80px";
    e.target.style.borderColor = "blue";
    e.target.style.height = "80px";
    e.target.addEventListener("mouseleave", e.target.onMouseLeave);
  }
  onMouseLeave(e) {
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
    let row_tr = range(0, rows).map((i) => {
      return (
        <tr
          className={classes.tdName}
        >
          {range(0, columns).map((i) => {
            let ar = iker++;
            return (
              <td
                onClick={this.td_clicked}
                onMouseOver={this.weHover}
                onMouseLeave={this.Leave}
                refs={`tdname${ar}`}
                style={{
                  backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
                }}
              ></td>
            );
          })}
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
async function changeColor(red, green, blue, alpha) {
  console.log(red, green, blue, alpha);
  for (let i of selected_list) {
    if (document.getElementById(i) === null) {
      console.log("inside")
   
    } else {
      console.log(i)
    }  

  }
}
export default Table;
