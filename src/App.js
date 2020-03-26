import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import NavbarComponent from './components/NavbarComponents'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home />
      
    </div>
  );
}

export default App;
