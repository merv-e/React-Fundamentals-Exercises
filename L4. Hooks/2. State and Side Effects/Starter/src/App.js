import logo from "./logo.svg";
import "./App.css";
import GenerateNumbers from "./components/GenerateNumbers";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2> 
      <GenerateNumbers />
      </div>
    </div>
  );
};

export default App;
