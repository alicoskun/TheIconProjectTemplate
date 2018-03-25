import React, { Component } from 'react';
import person from '../assets/person.svg'
import basket from '../assets/basket.svg'
import envelope from '../assets/envelope.svg'
import star from '../assets/star.svg'
import bell from '../assets/bell.svg'

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">
            <div className="form-inline">
              <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
              <h5 className="text-light">ICONAREA</h5>
              <div className="nav-search search-input">
                <div className="input-group">
                  <input className="form-control py-2 border-0" type="search" placeholder="Search for icons" aria-label="Search" />
                  <span className="input-group-append">
                    <button className="btn btn-outline-secondary border-0" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContent" aria-controls="navbarToggleContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggleContent">
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hidden-collapsed active">
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