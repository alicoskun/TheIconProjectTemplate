import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="jumbotron jumbotron-fluid bg-dark">
          <div className="container">
            <div className="title form-inline justify-content-center">
              <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="70" height="70" alt="" />
              <h1 className="display-4 text-light">ICONAREA</h1>
            </div>
            <div className="search-input d-flex justify-content-center">
              <div className="input-group col-md-6">
                <input className="form-control py-2  border-0" type="search" placeholder="Search for icons" aria-label="Search" />
                <span className="input-group-append">
                  <button className="btn btn-outline-secondary border-0" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="asd">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
