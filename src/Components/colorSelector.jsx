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
  };
    render() {
        let rato = this.state.red;
        let hariyo = this.state.green;
        let nilo = this.state.blue;
        let aleph = this.state.alpha;
    return (
      <div>
            <div
                style={{background:`rgba(${rato},${hariyo},${nilo},${aleph})`}}
          className={classes.colorDiv}
        >{`${this.state.red},${this.state.green},${this.state.blue},${this.state.alpha}`}</div>
        <div className={classes.sliderDiv}>
          <input
            type={"range"}
            step={"1"}
            max={"255"}
            name="red"
            min={"0"}
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          <h5>Red:{this.state.red}</h5>
          <input
            type={"range"}
            max={"255"}
            min={"0"}
            step={"1"}
            name="green"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          <h5>Green:{this.state.green}</h5>
          <input
            type={"range"}
            max={"255"}
            min={"0"}
            name="blue"
            step="1"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          <h5>Blue:{this.state.blue}</h5>
          <input
            type={"range"}
            max={"1"}
            min={"0"}
            name="alpha"
            step="0.1"
            className={classes.slider}
            onChange={this.handleChange}
          ></input>
          <h5>Alpha:{this.state.alpha}</h5>
        </div>
      </div>
    );
  }
}
export default ColorSelector;
