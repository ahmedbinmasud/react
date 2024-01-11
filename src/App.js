import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <img
            src={process.env.PUBLIC_URL + '/images/result.jpg'}
            className="Result-image"
            alt="result"
          />
          <div className="Text-container">
            <p className="Intro-text">
              Hello, I'm <strong>Ahmed Bin Masud</strong> from Lahore.
            </p>
            <p className="Description-text">
              Welcome to my personal website. I'm passionate about <span className="Highlighted">React</span> and building cool things!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

