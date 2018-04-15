import React, { Component } from 'react';
import IconSingle from './IconSingle';
import { Link } from 'react-router-dom'
import Clover from '../assets/Clover.svg'
import Daisy from '../assets/Daisy.svg';
import Fuchsia from '../assets/Fuchsia.svg';
import Tulip from '../assets/Tulip.svg';
import Star from '../assets/star.svg';

class IconSetCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`card ${this.props.color}`}>
                    <div className="iconset-preview">
                        <Link to={`/iconset/${this.props.id}`}>
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
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="form-inline">
                            <Link to={`/iconset/${this.props.id}`}>
                                <p className="font-weight-bold"><a href="#" title="">{this.props.name}</a></p>
                            </Link>
                            <p className="font-weight-bold text-success price ml-auto"><span>$</span>{this.props.price}</p>
                        </div>
                        <div className="form-inline">
                            <p className="text-muted"><small>{this.props.iconType}</small></p>
                            <a className="add-favourite ml-auto" href="#">
                                <img className="" src={Star} width="15" height="15" alt="" />
                            </a>
                            {/* <p className="text-muted ml-auto"><small>Licence</small></p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer">
                        <div className="form-inline">
                            <a className="mr-auto" href="#">
                                <p>Ali Coşkun</p>
                            </a>                            
                            <a className="add-favourite ml-auto" href="#">
                                <img className="" src={Star} width="15" height="15" alt="" />
                            </a>
                        </div>
                    </div> */}
            </React.Fragment>
        );
    }
}

export default IconSetCard;