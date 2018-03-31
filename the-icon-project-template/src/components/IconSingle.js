import React, { Component } from 'react';

class IconSingle extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="card-img-top" src={this.props.src} width={this.props.width} height={this.props.height} alt="" />
            </React.Fragment>
        );
    }
}

export default IconSingle;