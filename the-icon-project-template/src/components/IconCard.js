import React, { Component } from 'react';
import IconDetail from './IconDetail';
import { Link, Route } from 'react-router-dom'

class IconCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`card ${this.props.color}`}>
                    <Link to='/icon'><img className="card-img-top" src={this.props.src} width={130} height={130} alt="" /></Link>
                    <div className="card-body">
                        <div className="form-inline">
                            <p className="font-weight-bold"><Link to='/icon/:number'>{this.props.name}</Link></p>
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

export default IconCard;