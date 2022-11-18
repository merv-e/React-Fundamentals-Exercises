import logo from "./logo.svg";
import "./App.css";
import AddItem from "./components/AddItem";
import { useState } from "react";
import DeleteItem from "./components/DeleteItem"
import ListItems from "./components/ListItems"

const App = () => {

  const [items, setItems] = useState([]);

  const noItemsFound = () => items.length === 0;

  const deleteLastItem = (event) => {
     setItems(items.slice(0, -1));
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItem addItem = {addItem}  />
      <DeleteItem deleteItem = {deleteLastItem} disabled= {noItemsFound} />
      <ListItems items={items}/>
    </div>
  );
};

export default App;
