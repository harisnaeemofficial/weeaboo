import * as React from "react";

export interface IClockStates {
  date: Date;
  num: number;
}

export class Clock extends React.Component<{}, IClockStates> {

  private timerID: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = {
      date: new Date(),
      num: 0,
    };
  }

  public componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>Number: {this.state.num}</h2>
      </div>
    );
  }

  private tick() {
    this.setState((prevState) => {
      return {
        date: new Date(),
        num: prevState.num += 1,
      };
    });
  }
}
