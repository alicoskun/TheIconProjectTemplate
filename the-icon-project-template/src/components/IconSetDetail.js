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
                <div className="content">
                    <div className="icon-set-nav">
                        <h4>{iconSet.name}</h4>
                    </div>
                    <div className="icons">
                        {IconSetAPI.get(iconSet.id).icons.map(i => (
                            <IconCard id={i.id} color={i.color} src={i.src} name={i.name} iconType={i.type} price={i.price} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IconSetDetail