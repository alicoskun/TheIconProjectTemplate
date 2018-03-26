import React, { Component } from 'react';

class IconSingle extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="card-img-top" src={this.props.src} width="60" height="60" alt="" />
            </React.Fragment>
        );
    }
}

export default IconSingle;