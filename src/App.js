import './App.css';
import { useState, createRef } from 'react';

function App() {
  const inputRef = createRef();

  const [items, setItems] = useState([]);

  function addItem() {
    if (inputRef.current.value == "") {
      return
    }
    console.log(inputRef.current.value)
    var nextitems = [...items, inputRef.current.value]
    setItems(nextitems);
    inputRef.current.value = ""
  }

  function handleEnter(event) {
    if (event.key == "Enter") {
      addItem()
    }
  }

  return (
    <div>
      <header>
        <h1>To-do List</h1>
      </header>
      <input type="text" ref={inputRef} onKeyUp={handleEnter}/>
      <input type="button" value="Add Item" onClick={addItem}/>
      <ol>
        {items.map((item) =>
            <li>{item}<input type="checkbox"/></li>
          )
        }
      </ol>
    </div >
  );
}

export default App;
