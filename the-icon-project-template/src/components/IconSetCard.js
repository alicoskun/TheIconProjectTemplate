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
                <div className={`card ${this.props.color}`}>
                    <div className="iconset-preview">
                        <a href="#">
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconSingle src={Fuchsia} width={60} height={60} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Tulip} width={60} height={60} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Clover} width={60} height={60} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconSingle src={Clover} width={60} height={60} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Fuchsia} width={60} height={60} />
                                </div>
                                <div className="col-lg-4">
                                    <IconSingle src={Tulip} width={60} height={60} />
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
                {/* <div className="card-footer">
                        <div className="form-inline">
                            <a className="mr-auto" href="#">
                                <p>Ali Coşkun</p>
                            </a>
                            <a className="add-favourite" href="#">
                                <img className="nav-image" src={starBl} width="15" height="15" alt="" />
                            </a>
                        </div>
                    </div> */}
            </React.Fragment>
        );
    }
}

export default IconSetCard;