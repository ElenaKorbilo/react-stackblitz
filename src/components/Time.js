import React from "react";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: new Date()
    };
  }

  componentDidMount() {
    this.handlerOfTimer = setInterval(() => this.timerAction(), 1000);
  }

  timerAction() {
    this.setState({ currDate: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.handlerOfTimer);
  }

  render() {
    return (
      <div>
        <h1>{this.state.currDate.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
