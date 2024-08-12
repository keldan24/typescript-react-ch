import { Component } from 'react';

// Step 1: Define an interface for the component's state
interface CounterState {
  count: number; 
}

// Step 2: Define an interface for the props
interface CounterProps {}

// Step 3: Define the class component with state and props types
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with a type
  state: CounterState = {
    count: 0
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method with proper return type
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
