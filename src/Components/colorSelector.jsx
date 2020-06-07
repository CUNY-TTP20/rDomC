import React, { Component } from "react";
import classes from "./css/colorSelector.module.css";

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: this.props.Red,
      green: this.props.Green,
      blue: this.props.Blue,
      alpha: this.props.Alpha,
    };
  }
   handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
    this.props.onChange(
      this.state.red,
      this.state.green,
      this.state.blue,
      this.state.alpha
    );
 
  };
  render() {
    let rato = this.state.red;
    let hariyo = this.state.green;
    let nilo = this.state.blue;
    let aleph = this.state.alpha;
    let colors = [
      { color: "black", value: "rgb(0, 0, 0)" },
      { color: "white", value:" rgb(255,255,255)" },
      { color: "red", value: "rgb(255, 0, 0)" },
      { color:" green", value: "rgb(0, 0, 0)" },
      { color:" blue", value: "rgb(0, 0, 0)" },
      { color: "yellow", value: "rgb(0, 0, 0)" },
      { color: "purple", value: "rgb(0, 0, 0)" },
      { color: "grey", value: "rgb(0, 0, 0)" }, 
    ];
    let colorTable = colors.map((i) => {
      return (
        <tr>
          <td>{i.color}</td>
          <td>{i.value}</td>
        </tr>
      );
    } )
    return (
      <div className={classes.mainDiv} style={{
        background: `rgba(${rato},${hariyo},${nilo},${aleph})`,
        color: `rgba(${255-rato},${255-hariyo},${255-nilo},1)`
      }}> 
        <h1> Color Selector</h1>
        <div className={classes.sliderDiv}>
          <form onSubmit={this.handleSubmit}>
          <input
            type={"range"}
            step={"1"}
            max={"255"}
            name="red"
            min={"0"}
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          &emsp;
          <label>Red:{this.state.red}</label>
          <input
            type={"range"}
            max={"255"}
            min={"0"}
            step={"1"}
            name="green"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          &emsp;
          <label>Green:{this.state.green}</label>
          <input
            type={"range"}
            max={"255"}
            min={"0"}
            name="blue"
            step="1"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          &emsp;
          <label>Blue:{this.state.blue}</label>
          <input
            type={"range"}
            max={"1"}
            min={"0"}
            name="alpha"
            step="0.1"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          &emsp;
          <label>Alpha:{this.state.alpha}</label><br/>
          </form>
        </div>
        <h4>Some Basic Color Value</h4>
        <table className={classes.Acolor}>
          <tr>
            <th>Color</th>
            <th>Values</th>
          </tr>
          {colorTable}
        </table>
      </div>
    );
  }
}
export default ColorSelector;
