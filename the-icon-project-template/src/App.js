import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a tabIndex="0" className="navbar-brand">
            <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pro</a>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <input className="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0 btn-sm" type="submit">Search</button>
          </form>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="jumbotron jumbotron-fluid bg-dark">
          <div className="container">
            <h1 className="display-4 text-light">Fluid jumbotron</h1>
            <p className="lead text-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
