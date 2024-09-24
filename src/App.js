// src/App.js
import React from 'react';
import Listing from './components/Listing'; // Adjust the path as necessary
import './App.css'; // Assuming you have an App.css for global styles

const App = () => {
  return (
    <div className="App">
      <h1>Reddit Post Listings</h1>
      <Listing />
    </div>
  );
};

export default App;
