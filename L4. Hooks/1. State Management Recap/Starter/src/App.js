import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./components/ChatWindow";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <div className="container">
        <ChatWindow />
      </div>    
    </div>
  );
};

export default App;
