import React, {useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import Saludo from "./components/Home/home.js"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p><Saludo tutor = "Gonzalo" /></p>
        <p><Saludo tutor = "Agustin" /></p>
      </header>

      <button onClick={() => {
        if (count === 10) {
          setCount(10);
          return
        }
        setCount(count+1)}}

      >+</button><p>{count}</p>
      
      <button onClick={() => {
        if (count === 0) {
          setCount(0);
          return
        }
        setCount(count-1)}}

      >-</button>
    </div>
  );
}

export default App;
