import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  removeOneHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  removeFiveHandler = () => {
    if (this.state.counter > 4) {
      this.setState({
        counter: this.state.counter - 5,
      });
    }
  };

  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    let circleClass = "";
    this.state.counter === 0
      ? (circleClass = "circle")
      : this.state.counter % 2 === 0
      ? (circleClass = "circle even")
      : (circleClass = "circle odd");

    return (
      <main>
        <div className={circleClass}>
          <p id="counter">{this.state.counter}</p>
        </div>

        <div className="buttonContainer">
          <button onClick={this.addFiveHandler}>Add Five</button>
          <button onClick={this.addOneHandler}>Add One</button>
          <button onClick={this.removeOneHandler}>Remove One</button>
          <button onClick={this.removeFiveHandler}>Remove Five</button>
        </div>
        <button onClick={this.resetHandler}>Reset</button>
      </main>
    );
  }
}

export default Main;
