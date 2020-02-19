import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomCoolComponent from './components/RandomCoolComponent';

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
          <RandomCoolComponent blah={props.blah}
            onRandomButtonClick={(date, numClicks) => buttonGotClicked(date, numClicks)} />
          {/*Here is props.blah.text: {props.blah.text}*/}
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
