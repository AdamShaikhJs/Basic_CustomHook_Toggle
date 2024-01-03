import React from 'react';
import useToggle from './useToggle.js';
import './style.css';

export default function App() {
  const { show, toggle } = useToggle();
  return (
    <div>
      <h1> React Basic Custom hooks!</h1>
      <button onClick={toggle}> toggle button</button>
      <hr />
      {show && <h2> show toggle content </h2>}
    </div>
  );
}
