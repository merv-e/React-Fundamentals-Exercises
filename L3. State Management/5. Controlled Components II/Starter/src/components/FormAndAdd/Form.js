import React from 'react'
import { useState } from 'react';
import DeleteItem from '../DeleteItem';
import ListItems from '../ListItems';

const Form = () => {
    
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const add = (event) => {
          event.preventDefault();
          setItems([...items, value]);
          setValue("");
        };
        
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const inputIsEmpty = () => value === "";  
    
    return (
    <div>
        <form onSubmit={add}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
          <button disabled={inputIsEmpty()}>Add</button>
          <DeleteItem items={items} setItems={setItems} />
          <ListItems items={items} />
      </form>
    </div>
  )
}

export default Form

