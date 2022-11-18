import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { useState } from "react";


const App = () => {

  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
}; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <Users 
      userName={userName} handleUserNameChange={handleUserNameChange} />
    </div>
  );
};

export default App;
