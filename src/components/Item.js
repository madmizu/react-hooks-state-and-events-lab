import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState("Add to Cart")

  const cartActivity = inCart ? "remove" : "add"

  function handleCart () {
    { inCart === "Add to Cart" ? setInCart("Remove From Cart") : setInCart("Add to Cart")}
  }
  return (
    <li className={cartActivity}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={cartActivity}
        onClick={handleCart}>
          {inCart}
      </button>
    </li>
  );
}

export default Item;
