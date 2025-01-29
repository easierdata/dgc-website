import React from 'react';
import './App.css';
import Landing from './panels/landing';
import Navbar from './components/navbar';
import Support from './panels/support/support';
import About from './panels/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Landing */}
      <Landing />

      {/* Support */}
      <Support />


      {/* About */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
