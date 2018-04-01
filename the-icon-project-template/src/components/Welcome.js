import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default Welcome;