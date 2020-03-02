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
        {/*
        <HashRouter> - like angularjs, appends hash # in URL.
        or
        <BrowserRouter basename="/path/to/here">
        - Also needs "homepage": "/path/to/here" set in package.json
        https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
        https://muffinman.io/react-router-subfolder-on-server/
        */}
        <BrowserRouter basename="/react">
          <div className="mainContainer">
            <nav className="navContainer">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/">Fill in some form</Link>
                </li>
                <li className="nav-item">
                  {/*
                  <Link className="nav-link"
                    to={'/about/' + props.blah.foobar}>About</Link>
                  */}
                  <Link className="nav-link"
                    to={{
                      pathname: '/about/' + props.blah.foobar,
                      state: {
                        someUserDefined: 'Custom data that entered as state object: ' + props.blah.foobar
                      }
                    }}>About</Link>
                </li>
              </ul>
            </nav>
            <div className="contentContainer">
              <Switch className="wow">
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
            </div>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
