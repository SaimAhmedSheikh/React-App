import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Components/Clock';
import LoginControl from './Components/LoginControl';

var element = React.createElement(
    'h1', 
    { className: 'greeting' }, 
    'Hello, world!'
);

element = <h1>Hello, World</h1>;  // JSX Expression

const name = "Anas";
element = (
    <div>
        <h1>Hello, World</h1>
        <h2>My name is {name}</h2>  
    </div>
);

const currentTime = new Date().toLocaleTimeString();
const clock = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {currentTime}.</h2>
    </div>
  );



ReactDOM.render(<LoginControl/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
