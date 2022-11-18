import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import Form from "./components/FormAndAdd/Form";
// import DeleteItem from "./components/DeleteItem";
// import ListItems from "./components/ListItems";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <Form />
    </div>
  );
};

export default App;
