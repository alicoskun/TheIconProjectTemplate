import React, { Component } from 'react';
import IconSingle from './IconSingle';
import Clover from '../assets/Clover.svg'
import Daisy from '../assets/Daisy.svg';
import Fuchsia from '../assets/Fuchsia.svg';
import Tulip from '../assets/Tulip.svg';

class IconSetCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="iconset-preview">
                        <a href="#">
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconSingle src={Fuchsia} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Tulip} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Clover} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconSingle src={Clover} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Fuchsia} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Tulip} />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="form-inline">
                            <p className="font-weight-bold"><a href="#" title="">{this.props.name}</a></p>
                            <p className="font-weight-bold text-success price ml-auto"><span>$</span>{this.props.price}</p>
                        </div>
                        <div className="form-inline">
                            <p className="text-muted"><small>{this.props.iconType}</small></p>
                            <p className="text-muted ml-auto"><small>Licence</small></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default IconSetCard;