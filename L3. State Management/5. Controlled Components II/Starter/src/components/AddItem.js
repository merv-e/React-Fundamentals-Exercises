import React from 'react'
import { useState } from 'react';

const AddItem = ({addItem}) => {
    
    const [value, setValue] = useState("");

    const add = (event) => {
          event.preventDefault();
          addItem(value);
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
      </form>
    </div>
  )
}

export default AddItem

