import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {

  const [text, setText] = useState(""); 
  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value={text} onChange={changeText}/>
        <p className="echo">Echo:</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
