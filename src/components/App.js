import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Addpost from './Addpost.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Addpost />

      </header>
    </div>
  );
}

export default App;
