import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Landing */}
      <header className="Hero">
        <div className="Hero-Left-Block">
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold'
          }}>
            The Decentralized Geospatial Collaborative (DGC)
          </h1>
          <h1 style={{
            fontSize: '1.2rem',
            color: 'gray'
          }}>
            A collaboration between Astral and The EASIER Data Initiative.
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="Hero-Logo">
          <h1>LOGO</h1>
        </div>
      </header>

      {/* Support */}
      <h1>With Support From</h1>
      <div className='Support-Logos'>
        <h1>LOGO 1</h1>
        <h1>LOGO 2</h1>
        <h1>LOGO 3</h1>
      </div>


      {/* About */}
      <div className='Container'>
        <h1>About</h1>
        <div className='About'>
          <div>
            <h1>Section 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <h1>Section 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='Footer-Container'>
        <div className='Footer-Links'>
          <h1>Social</h1>
          <h1>Link 1</h1>
          <h1>Link 2</h1>
          <h1>Link 3</h1>
        </div>
        <div className='Footer-Links'>
          <h1>Contact</h1>
          <h1>Link 1</h1>
          <h1>Link 2</h1>
          <h1>Link 3</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
