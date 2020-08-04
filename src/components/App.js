import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Addpost from './Addpost.js';
import './App.css';
import Button from './Button.js';
import Posts from './Posts.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="addpost">
        <Addpost />
        <Button type="primary" small label="POST" />
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
}

export default App;
