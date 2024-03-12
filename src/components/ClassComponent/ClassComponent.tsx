import { Component } from "react"

interface CounterState {
  count: number;
}
class ClassComponent extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <p>ClassComponent</p>
        <p>Number of Clicks: {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ClassComponent