import React from 'react';
import Navigation from './components/shared/NavigationBar.js';
import LandingPage from './components/pages/Landing.js';
import Mountain1 from './components/pages/Mount1.js';
import Mountain2 from './components/pages/Mount2.js';
import Mountain3 from './components/pages/Mount3.js';
import Footer from './components/shared/Footer.js';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <Mountain1 />
      <Mountain2 />
      <Mountain3 />
      <Footer />

    </div>
  );
}

export default App;
