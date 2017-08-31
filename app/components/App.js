import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mountStyle = this.mountStyle.bind(this);
    this.state = {
      show: true,
      style: {
        opacity: 0,
        transition: 'all 1s ease',
      }
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      show: newProps.mounted
    });
  }

  mountStyle() {
    this.setState({
      style: {
        opacity: 1,
        transition: 'all 1s ease',
      }
    });
  }

  componentDidMount() {
    setTimeout(this.mountStyle, 10);
  }

  render() {
    return(
      this.state.show &&
      <h1 className="title" style={this.state.style}>Hello!</h1>
    )
  }
}

module.exports = App;
