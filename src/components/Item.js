import React, {useState} from "react";

function Item({ name, category }) {

  const [itemStatus, setItemStatus] = useState(false)

  const addItem = () => setItemStatus((itemStatus) => !itemStatus)

  const currentItemStatus = itemStatus ? 'in-cart' : ''

  return (
    <li className={currentItemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem} className="add">{itemStatus ? 'Add to Cart' : 'Remove Item'}</button>
    </li>
  );
}

export default Item;
