import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import User from './User';

function App() {
  //const [count, setCount] = useState(0);
  const [Counter, setCounter] = useState(0);

  return (
    <>
      <h2>Counter Val: {Counter}</h2>
      <User />
      <button onClick={() => setCounter(Counter + 1)}>
        Increase Counter Value f
      </button>
    </>
  );
}

export default App;
