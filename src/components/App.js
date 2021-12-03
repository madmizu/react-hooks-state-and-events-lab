import React, {useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [toggleMode, setToggleMode] = useState("App light")
 

  function handleToggleMode () {toggleMode === "App light" ? setToggleMode("App dark") : setToggleMode("App light")}

  return (
    <div className={toggleMode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleMode}>
          { toggleMode === ("App light") ? "Dark Mode" : "Light Mode" }
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
