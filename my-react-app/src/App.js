import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RandomCoolComponent from './components/RandomCoolComponent';
import About from './components/About';

function NoMatch404(props) {

  return (
    <div>404 no matching URL</div>
  );

}

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
        {/*
        <HashRouter> - like angularjs, appends hash # in URL.
        or
        <BrowserRouter basename="/path/to/here">
        - Also needs "homepage": "/path/to/here" set in package.json
        https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
        https://muffinman.io/react-router-subfolder-on-server/
        */}
        <BrowserRouter basename="/react">
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
            <Route path="/" exact>
              <RandomCoolComponent blah={props.blah}
                onRandomButtonClick={(date, numClicks) => buttonGotClicked(date, numClicks)} />
            </Route>
            <Route path="/about/:superduperparam">
              <About someprop={'Hello world'} />
            </Route>
            {/*
            fallback 404 page
            https://tylermcginnis.com/react-router-handling-404-pages/
            */}
            <Route component={NoMatch404} />
          </Switch>
        </BrowserRouter>
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
