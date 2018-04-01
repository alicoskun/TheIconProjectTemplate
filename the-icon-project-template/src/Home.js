import React, { Component } from 'react';
import Welcome from './components/Welcome';
import CustomIconSection from './components/CustomIconSection';
import IconSetSection from './components/IconSetSection';
import './App.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Welcome />
        <CustomIconSection />
        <IconSetSection />
      </React.Fragment>
    );
  }
}

export default Home;
