import React, { Component } from 'react';

interface TimerState {
  timerValue: number;
  intervalId: number | null;
}
export default class Counter extends Component<{}, TimerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      timerValue: 0,
      intervalId: null,
    };
  }

  startTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState((prevState) => ({
          timerValue: prevState.timerValue + 1,
        }));
      }, 1000);
      this.setState({ intervalId });
    }
  };

  stopTimer = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  render() {
    return (
      <div>
        <h1>Timer: {this.state.timerValue} seconds</h1>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}
