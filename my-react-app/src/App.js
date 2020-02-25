import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RandomCoolComponent from './components/RandomCoolComponent';
import About from './components/About';

function App(props) {

  function buttonGotClicked(date, numClicks) {

    console.log('buttonGotClicked on App.js:', date);

    props.blah.text = 'I got changed by App.js. Num clicked: ' + numClicks;

    alert('Date is:' + date);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={'/about/' + props.blah.foobar}>About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about/:superduperparam">
              <About />
            </Route>
            <Route path="/">
              <RandomCoolComponent blah={props.blah}
                onRandomButtonClick={(date, numClicks) => buttonGotClicked(date, numClicks)} />
            </Route>
          </Switch>
        </Router>
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
