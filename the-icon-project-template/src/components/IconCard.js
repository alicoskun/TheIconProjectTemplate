import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Star from '../assets/star.svg';

class IconCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`card ${this.props.color}`}>
                    <Link to={`/icon/${this.props.id}`}><img className="card-img-top" src={this.props.src} width={130} height={130} alt="" /></Link>
                    <div className="card-body">
                        <div className="form-inline">
                            <p className="font-weight-bold"><Link to={`/icon/${this.props.id}`}>{this.props.name}</Link></p>
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
            </React.Fragment>
        );
    }
}

export default IconCard;