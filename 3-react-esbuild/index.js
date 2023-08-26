import React from "react";
import { createRoot } from 'react-dom/client';
import { useState } from "react";

// Create counter app
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Render the app
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />);
