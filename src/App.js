import React from 'react';
import Profile from './components/Profile';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Profile />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
