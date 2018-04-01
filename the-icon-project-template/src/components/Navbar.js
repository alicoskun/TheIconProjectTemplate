import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import person from '../assets/person.svg'
import basket from '../assets/basket.svg'
import envelope from '../assets/envelope.svg'
import star from '../assets/star.svg'
import bell from '../assets/bell.svg'
import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light fixed-top navbar-expand-lg">
          <div className="navbar-brand">
            <div className="form-inline">
              <div className="form-inline logo">
                <img src={logo} width="30" height="30" alt="" />
                <h5 className="text-dark">iconarea</h5>
              </div>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContent" aria-controls="navbarToggleContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggleContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pro">Pro</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hidden-collapsed">
                <a className="nav-link" href="#">
                  <img className="nav-image" src={star} width="20" height="20" alt="" />
                </a>
              </li>
              <li className="nav-item hidden-collapsed">
                <a className="nav-link" href="#">
                  <img className="nav-image" src={envelope} width="20" height="20" alt="" />
                </a>
              </li>
              <li className="nav-item hidden-collapsed">
                <a className="nav-link" href="#">
                  <img className="nav-image" src={bell} width="20" height="20" alt="" />
                </a>
              </li>
              <li className="nav-item hidden-collapsed">
                <a className="nav-link" href="#">
                  <img className="nav-image" src={basket} width="20" height="20" alt="" />
                </a>
              </li>
              <li className="nav-item hidden-collapsed">
                <a className="nav-link" href="#">
                  <img className="nav-image" src={person} width="20" height="20" alt="" />
                </a>
              </li>
              <li className="nav-item show-collapsed">
                <a className="nav-link" href="#">Messages</a>
              </li>
              <li className="nav-item show-collapsed">
                <a className="nav-link" href="#">Notifications</a>
              </li>
              <li className="nav-item show-collapsed">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item show-collapsed">
                <a className="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;