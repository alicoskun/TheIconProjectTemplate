import React, { Component } from 'react';
import Navbar from './components/Navbar';
import IconCard from './components/IconCard';
import IconSetCard from './components/IconSetCard';
import Footer from './components/Footer';
import './App.css';
import Clover from './assets/Clover.svg';
import Daisy from './assets/Daisy.svg';
import Fuchsia from './assets/Fuchsia.svg';
import Tulip from './assets/Tulip.svg';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-shadow">
          <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="container">
              <div className="title form-inline justify-content-center">
                <img src={logo} width="70" height="70" alt="" />
                <h1 className="display-4 text-light">ICONAREA</h1>
              </div>
              <div className="search-input d-flex justify-content-center">
                <div className="input-group col-lg-6">
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
          <div className="container text-center custom-icons">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="span12">
                  <h4 className="font-weight-bold">Custom icon designs</h4>
                  <h6 className="font-weight-light text-muted">Some custom icons made for customers</h6>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-3">
                          <IconCard src={Daisy} name="Daisy" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard src={Fuchsia} name="Fuchsia" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard src={Tulip} name="Tulip" iconType="Flat" price="2" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-3">
                          <IconCard src={Tulip} name="Tulip" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard src={Clover} name="Clover" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard src={Fuchsia} name="Fuchsia" iconType="Flat" price="2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-sets">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="form-inline">
                  <h6 className="font-weight-bold">Featured icon sets</h6>
                  <h6 className="font-weight-light text-muted ml-auto"><a href="#">View more</a></h6>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                  <div className="col-lg-4">
                    <IconSetCard name="Flower" iconType="Flat" price="9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
