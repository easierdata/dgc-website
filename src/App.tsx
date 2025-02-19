import React from 'react';
import './App.css';
import Landing from './panels/landing';
import Navbar from './components/navbar';
import Support from './panels/support/support';
import About from './panels/about';
import Footer from './components/footer';
import Contributors from './panels/contibutors';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Landing */}
      <Landing />

      {/* About */}
      <About />

      {/* Support */}
      <Support />

      {/* Contributors */}
      <Contributors />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
