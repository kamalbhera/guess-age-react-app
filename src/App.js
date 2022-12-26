import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  var serverURL = "https://api.agify.io/";

  function getTranslationURL(txt) {
    return serverURL + "?name=" + txt;
  }

  function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
  }

  function clickEventHandler() {
    var inputText = text;

    fetch(getTranslationURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        var age = json.age;
        setResult(age);
      })
      .catch(errorHandler);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <textarea
        placeholder="Enter your name here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={() => clickEventHandler()}>Guess my age</button>
      <div>{result}</div>
      </header>
    </div>
  );
}

export default App;
