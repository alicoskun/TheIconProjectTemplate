import React, { Component } from 'react';
import IconAPI from '../IconAPI'

class IconDetail extends Component {
    render() {
        const icon = IconAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        if (!icon) {
            return <div>Sorry, but the icon was not found</div>
        }
        return (
            <React.Fragment>
                <section className="section fill">
                    <div className="welcome">
                        <div className="welcome-bg">
                            <img className="card-img-top" src={icon.src} width={130} height={130} alt="" />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default IconDetail;