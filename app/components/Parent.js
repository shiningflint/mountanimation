import React from "react";
import App from "./App";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      showChild: true
    }
  }

  buttonClick(e) {
    this.setState({
      showChild: !this.state.showChild
    });
  }

  render() {
    return(
      <div>
        <App />
        <button onClick={this.buttonClick}>
          {this.state.showChild ? "Unmount" : "Mount"}
        </button>
      </div>
    );
  }
}

module.exports = Parent;
