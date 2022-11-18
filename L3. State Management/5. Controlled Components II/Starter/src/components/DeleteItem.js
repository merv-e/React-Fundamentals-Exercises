import React from 'react'

const DeleteItem = ({items, setItems}) =>  {
  
    const noItemsFound = () => items.length === 0;

    const deleteLastItem = (event) => {
        setItems(items.slice(0, -1));
    };

    return (
      <div>
        <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
      </div>
    )
  }
  
  export default DeleteItem
  