import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';

const userName = prompt("Як тебе звати?", "");
// const isUserLoggedIn = true / false;
const isUserLoggedIn = true;
let users = [
  { f: "Іра", l: "Петренко" },
  { f: "Аня", l: 'Коваленко' },
  { f: "Юля", l: 'Гнатенко' }
];

function fullName(user) {
  return user.f + ' ' + user.l;
}

class App extends React.Component {
  render() {
    return <React.Fragment>
      <h1>Привіт, {userName}!</h1>
      {(isUserLoggedIn === true) ? <p>Користувач залогований</p>
        : <p>Вам потрібно залогуватись</p>}
      <h2>Список користувачів</h2>
      <ul>
        {users.map(user => <li>{fullName(user)}</li>)}
      </ul>
    </React.Fragment>
  }
}

export default App;
