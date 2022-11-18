import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import UserList from "./components/UserList";


const App = () => {

  const [userName, setUserName] = useState([]);

  const handleUserName = (user) => {
    setUserName([...user, user]);
  }; 



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <Users 
      userName={userName} onAddUserName={handleUserName} />
      
      {/* <UserList games={games} userName={userName} numOfGames={() => numOfGames()} /> */}
    </div>
  );
};

export default App;
