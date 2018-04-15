import React, { Component } from 'react';
import IconSetCard from './IconSetCard';
import './IconSetSection.css';
import IconSetAPI from '../IconSetAPI'

class IconSetSection extends Component {
    render() {
        return (
            <React.Fragment>
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
                                    {IconSetAPI.all().map(i => (
                                        <IconSetCard id={i.id} color={i.color} src={i.src} name={i.name} iconType={i.type} price={i.price} />
                                    ))}
                                    {/* <IconSetCard color="red" name="Flower" iconType="Flat" price="9" />
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
                                    <IconSetCard color="amber" name="Flower" iconType="Flat" price="9" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default IconSetSection;