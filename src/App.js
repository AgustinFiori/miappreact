import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import Saludo from "./components/Home/home.js"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p><Saludo tutor = "Gonzalo" /></p>
        <p><Saludo tutor = "Agustin" /></p>
      </header>
    </div>
  );
}

export default App;
