import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
