import React from 'react';
import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { useSelector } from 'react-redux';
import { Input } from './components/Input';

function App() {
  const auth: string = useSelector<any, string>(state => state.auth.userName);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  const ADMIN = "admin"

  function validateName(userName: string): boolean {
    return userName.includes(ADMIN);
  }

  return <div>
    {auth && <div>
      <p>user name: {auth}</p>
      <Input placeHolder={'Enter operand'} inputProcess={function (value: string): string {
        setOperand(+value);
        return '';
      }}></Input>
      <Input placeHolder={'Enter factor'} inputProcess={function (value: string): string {
        setFactor(+value);
        return '';
      }}></Input>
    </div>}
    {auth && <div>
      <CounterUpdater operand={operand}></CounterUpdater>
      <CounterSquare></CounterSquare>
      <CounterMultiply factor={factor}></CounterMultiply>
    </div>}
    {auth && <Logout></Logout>}
    {!auth && <div>
      <p>Please enter user name + admin:</p>
      <Login loginName={validateName} ></Login>
    </div>
    }
  </div>
}

export default App;
