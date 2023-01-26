import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button 
        data-test="increment-button"
        onClick={() => setCount(count + 1)}>Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          } else {
            setError(true);
          }
        }
      }
      >Decrement counter
      </button>
    </div>
  );
}

export default App;
