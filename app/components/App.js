import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.state = {
      show: true,
      active: ""
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
    this.setState({active: ""})
  }

  mountStyle() {
    this.setState({active: " active"})
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
      <div className={"title"+this.state.active}
        onTransitionEnd={this.transitionEnd}>
        <h1>Hello!</h1>
      </div>
    )
  }
}

module.exports = App;
