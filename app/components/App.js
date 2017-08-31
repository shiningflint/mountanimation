import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      style: {
        fontSize: 60,
        opacity: 0,
        transition: 'all 2s ease',
      }
    }
  }

  render() {
    return(
      this.state.show &&
      <h1 className="title" style={this.state.style}>Hello!</h1>
    )
  }
}

module.exports = App;
