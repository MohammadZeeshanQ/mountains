import React from 'react';
import Navigation from './components/shared/NavigationBar.js';
import LandingPage from './components/pages/Landing.js';
import Footer from './components/shared/Footer.js';

function App() {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <Footer />

    </div>
  );
}

export default App;
