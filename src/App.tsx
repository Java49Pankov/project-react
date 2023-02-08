import React from 'react';

import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import {useSelector} from 'react-redux';
import { Input } from './components/Input';
function App() {
  const auth: string = useSelector<any, string>(state => state.auth.authenticated);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  return <div>
    {auth && <div>
      <p>Username is {auth}</p>
        { auth.includes("admin") && <Input placeHolder={'Enter operand'} inputProcess={function (value: string):
         string {
        setOperand(+value);
        return '';
      } }></Input>}
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string):
         string {
        setFactor(+value);
        return '';
      } }></Input>
      </div>}
    <div>
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSquare></CounterSquare>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>
  {auth && <Logout></Logout>}
  {!auth && <Login></Login>}
  </div>

}
export default App;
