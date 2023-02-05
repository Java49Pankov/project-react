import React from 'react';
import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';

function App() {
  return <div>
    <CounterUpdater></CounterUpdater>    
    <CounterSquare></CounterSquare>
    <CounterMultiply></CounterMultiply>
  </div>

}

export default App;
