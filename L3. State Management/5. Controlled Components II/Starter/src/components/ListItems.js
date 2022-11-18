import React from 'react'

const ListItems = ({items}) => {
  return (
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default ListItems
