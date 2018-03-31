import React, { Component } from 'react';

class IconCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`card ${ this.props.color }`}>
                    <a href="#"><img className="card-img-top" src={this.props.src} width={130} height={130} alt="" /></a>
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

export default IconCard;