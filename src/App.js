import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Link } from 'arwes';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello World!
        </p>
            <Link
              href="https://reactjs.org"
            >
              Learn React
        </Link>
          </header>
        </div>
      </Arwes>
    </ThemeProvider>

  );
}

export default App;
