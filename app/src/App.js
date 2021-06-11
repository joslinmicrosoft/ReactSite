import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at this really cool spinny thing we have here. 2021-06-10 17:49
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Everything is fine.
        </a>
        <a 
          className="App-link"
          href="/.auth/login/aad"
        >
        Log in with Azure AD
        </a>

      </header>
    </div>
  );
}

export default App;
