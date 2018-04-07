import React, { Component } from 'react';
import './Welcome.css';
import aim from '../assets/welcome/aim.svg';
import basket from '../assets/welcome/basket.svg';
import calendar from '../assets/welcome/calendar.svg';
import camera from '../assets/welcome/camera.svg';
import creditCard from '../assets/welcome/credit-card.svg';
import daisy from '../assets/welcome/daisy.svg';
import download from '../assets/welcome/download-cloud.svg';
import eiffelTower from '../assets/welcome/eiffel-tower.svg';
import footprints from '../assets/welcome/footprints.svg';
import heart from '../assets/welcome/heart.svg';
import drink from '../assets/welcome/drink.svg';
import location from '../assets/welcome/location.svg';
import magnifier from '../assets/welcome/magnifier.svg';
import notebook from '../assets/welcome/notebook.svg';
import pants from '../assets/welcome/pants.svg';
import phone from '../assets/welcome/phone.svg';
import sparkles from '../assets/welcome/sparkles.svg';
import star from '../assets/welcome/star.svg';
import thermometer from '../assets/welcome/thermometer.svg';
import tire from '../assets/welcome/tire.svg';
import tulip from '../assets/welcome/tulip.svg';
import tv from '../assets/welcome/tv.svg';
import view from '../assets/welcome/view.svg';
import wristWatch from '../assets/welcome/wrist-watch.svg';

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section fill">
                    <div className="welcome">
                        <div className="welcome-bg">
                            <div className="welcome-items">
                                <div className="welcome-item color1">
                                    <img src={calendar} />
                                </div>
                                <div className="welcome-item color3">
                                    <img src={creditCard} />
                                </div>
                                <div className="welcome-item color6">
                                    <img src={daisy} />
                                </div>
                                <div className="welcome-item color7">
                                    <img src={eiffelTower} />
                                </div>
                                <div className="welcome-item color5">
                                    <img src={footprints} />
                                </div>
                                <div className="welcome-item color2">
                                    <img src={heart} />
                                </div>
                                <div className="welcome-item color12">
                                    <img src={drink} />
                                </div>
                                <div className="welcome-item color8">
                                    <img src={magnifier} />
                                </div>
                                <div className="welcome-item color9">
                                    <img src={pants} />
                                </div>
                                <div className="welcome-item color11">
                                    <img src={sparkles} />
                                </div>
                                <div className="welcome-item color2">
                                    <img src={star} />
                                </div>
                                <div className="welcome-item color4">
                                    <img src={tulip} />
                                </div>
                                <div className="welcome-item color6">
                                    <img src={view} />
                                </div>
                                <div className="welcome-item color10">
                                    <img src={notebook} />
                                </div>
                                <div className="welcome-item color1">
                                    <img src={wristWatch} />
                                </div>
                                <div className="welcome-item color3">
                                    <img src={location} />
                                </div>
                                <div className="welcome-item color12">
                                    <img src={tv} />
                                </div>
                                <div className="welcome-item color11">
                                    <img src={basket} />
                                </div>
                                <div className="welcome-item color7">
                                    <img src={thermometer} />
                                </div>
                                <div className="welcome-item color8">
                                    <img src={aim} />
                                </div>
                                <div className="welcome-item color5">
                                    <img src={camera} />
                                </div>
                                <div className="welcome-item color9">
                                    <img src={tire} />
                                </div>
                                <div className="welcome-item color10">
                                    <img src={download} />
                                </div>
                                <div className="welcome-item color2">
                                    <img src={phone} />
                                </div>
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