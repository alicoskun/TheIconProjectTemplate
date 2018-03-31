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
        <section className="section fill">
          <div className="welcome">
            <div className="welcome-bg">
              <div className="welcome-items">
                <span className="welcome-item color1"></span>
                <span className="welcome-item color3"></span>
                <span className="welcome-item color6"></span>
                <span className="welcome-item color7"></span>
                <span className="welcome-item color5"></span>
                <span className="welcome-item color2"></span>
                <span className="welcome-item color12"></span>
                <span className="welcome-item color8"></span>
                <span className="welcome-item color9"></span>
                <span className="welcome-item color11"></span>
                <span className="welcome-item color2"></span>
                <span className="welcome-item color4"></span>
                <span className="welcome-item color6"></span>
                <span className="welcome-item color10"></span>
                <span className="welcome-item color1"></span>
                <span className="welcome-item color3"></span>
                <span className="welcome-item color12"></span>
                <span className="welcome-item color11"></span>
                <span className="welcome-item color7"></span>
                <span className="welcome-item color8"></span>
                <span className="welcome-item color5"></span>
                <span className="welcome-item color9"></span>
                <span className="welcome-item color10"></span>
                <span className="welcome-item color2"></span>
              </div>
              <div className="welcome-overlay">
              </div>
            </div>
            <div className="welcome-wrapper">
              <h1 className="welcome-title">iconarea</h1>
              <p className="welcome-subtitle">Search through 3 SVG icons</p>
              <div className="welcome-search">
                <div className="search-input">
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
          </div>
        </section>
        <div className="section gray">
          <div className="container text-center custom-icons">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="span12">
                  <h3 className="font-weight-bold">Custom icon designs</h3>
                  <h6 className="font-weight-light text-muted">Some custom icons made for customers</h6>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-3">
                          <IconCard color="blue" src={Daisy} name="Daisy" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard color="red" src={Fuchsia} name="Fuchsia" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard color="deeppurple" src={Tulip} name="Tulip" iconType="Flat" price="2" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-3">
                          <IconCard color="pink" src={Tulip} name="Tulip" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard color="amber" src={Clover} name="Clover" iconType="Flat" price="2" />
                        </div>
                        <div className="col-lg-3">
                          <IconCard color="green" src={Fuchsia} name="Fuchsia" iconType="Flat" price="2" />
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
        <div className="icon-sets text-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="span12">
                  <h3 className="font-weight-bold">Icon Sets</h3>
                  <h6 className="font-weight-light text-muted">Icon sets you desire</h6>
                </div>
                <div className="form-inline">
                  <h6 className="font-weight-bold">Featured icon sets</h6>
                  <h6 className="font-weight-light text-muted ml-auto"><a href="#">View more</a></h6>
                </div>
                <div className="sets">
                  <IconSetCard color="red" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="green" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="purple" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="amber" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="deeporange" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="pink" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="deeppurple" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="teal" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="blue" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="amber" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="deeporange" name="Flower" iconType="Flat" price="9" />
                  <IconSetCard color="amber" name="Flower" iconType="Flat" price="9" />
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
