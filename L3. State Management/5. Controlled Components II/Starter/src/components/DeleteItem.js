import React from 'react'

const DeleteItem = ({deleteItem, noItemsFound }) =>  {
  
    return (
      <div>
        <button onClick={deleteItem} disabled={noItemsFound}>
        Delete Last Item
      </button>
      </div>
    )
  }


  
  export default DeleteItem
  