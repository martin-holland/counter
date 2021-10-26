import React, { Component } from "react";

class Main extends Component {
    state = {
        counter: 0,
    }

    addFiveHandler = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    addOneHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    removeOneHandler = () => {
        this.setState({
            counter: this.state.counter - 1 
        })
    }

    removeFiveHandler = () => {
        this.setState({
            counter: this.state.counter - 5
        })
    }

    resetHandler = () => {
        this.setState({
            counter: this.state.counter = 0
        })
    }

    

    render() {

        // Can also use:
        let circleClass = "";
        this.state.counter === 0
            ? (circleClass = "circle")
            : this.state.counter % 2 === 0
            ? (circleClass = "circle even")
            : (circleClass = "circle odd")

        // let circleClass = "";

        // if (this.state.counter === 0) {
        //     circleClass = "circle";
        // }
        // else if (this.state.counter % 2 === 0) {
        //     circleClass = "circle even"
        // } else {
        //     circleClass = "circle odd"
        // }


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

        )
    }
}

export default Main;