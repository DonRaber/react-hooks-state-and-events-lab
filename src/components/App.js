import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  
  const [newAppClass, setNewAppClass] = useState(false)
  
  const modeSwitch = () => setNewAppClass((newAppClass) => !newAppClass)



// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature
const appClass = newAppClass ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {modeSwitch}>{newAppClass ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
