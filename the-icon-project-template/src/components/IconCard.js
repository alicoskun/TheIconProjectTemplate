import React, { Component } from 'react';

class IconCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <a href="#"><img className="card-img-top" src={this.props.src} width="130" height="130" alt="" /></a>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <p className="font-weight-bold"><a href="#" title="">{this.props.name}</a></p>
                            <p className="font-weight-bold text-success price"><span>$</span>{this.props.price}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="text-muted"><small>{this.props.iconType}</small></p>
                            <p className="text-muted"><small>Licence</small></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default IconCard;