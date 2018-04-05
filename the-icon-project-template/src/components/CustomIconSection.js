import React, { Component } from 'react';
import IconCard from './IconCard';
import './CustomIconSection.css';
import IconAPI from '../IconAPI'

class CustomIconSection extends Component {
    render() {
        return (
            <React.Fragment>
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
                                                {IconAPI.getFirstThree().map(i => (
                                                    <div key={i.id} className="col-lg-3">
                                                        <IconCard id={i.id} color={i.color} src={i.src} name={i.name} iconType={i.type} price={i.price} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row d-flex justify-content-center">
                                                {IconAPI.getSecondThree().map(i => (
                                                    <div key={i.id} className="col-lg-3">
                                                        <IconCard id={i.id} color={i.color} src={i.src} name={i.name} iconType={i.type} price={i.price} />
                                                    </div>
                                                ))}
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
            </React.Fragment>
        );
    }
}

export default CustomIconSection;