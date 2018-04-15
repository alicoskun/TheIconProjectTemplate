import React, { Component } from 'react'
import './IconSetDetail.css'
import IconCard from './IconCard';
import IconSetAPI from '../IconSetAPI'

class IconSetDetail extends Component {

    render() {
        const iconSet = IconSetAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        if (!iconSet) {
            return <div>Iconset was not found</div>
        }
        return (
            <React.Fragment>
                <section className="section fill">
                    <div className="icon-detail">
                        <div className="icon-detail-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10">
                                        {IconSetAPI.get(iconSet.id).icons.map(i => (
                                            <IconCard id={i.id} color={i.color} src={i.src} name={i.name} iconType={i.type} price={i.price} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default IconSetDetail