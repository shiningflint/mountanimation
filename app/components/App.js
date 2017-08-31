import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.state = {
      show: true,
      style: {
        opacity: 0,
        maxHeight: 0,
        margin: 0,
        transition: 'all 1s ease',
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.mounted) {
      return this.unMountStyle();
    } else {
      this.setState({
        show: true
      });
      setTimeout(this.mountStyle, 10);
    }
  }

  unMountStyle() {
    this.setState({
      style: {
        opacity: 0,
        maxHeight: 0,
        margin: 0,
        transition: 'all 1s ease',
      }
    })
  }

  mountStyle() {
    this.setState({
      style: {
        opacity: 1,
        maxHeight: 200,
        margin: "21px 0",
        transition: 'all 1s ease',
      }
    });
  }

  transitionEnd() {
    if (!this.props.mounted) {
      this.setState({
        show: false
      })
    }
  }

  componentDidMount() {
    setTimeout(this.mountStyle, 10);
  }

  render() {
    return(
      this.state.show &&
      <h1 className="title"
        style={this.state.style}
        onTransitionEnd={this.transitionEnd}>
        Hello!
      </h1>
    )
  }
}

module.exports = App;
