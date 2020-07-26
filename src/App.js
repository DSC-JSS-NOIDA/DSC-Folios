import React from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
