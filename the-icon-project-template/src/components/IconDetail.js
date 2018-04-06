import React, { Component } from 'react';
import './IconDetail.css';
import IconAPI from '../IconAPI'

class IconDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 128
        };
    }
    setSize32 = () => {
        this.setState({ size: 32 })
    }
    setSize64 = () => {
        this.setState({ size: 64 })
    }
    setSize128 = () => {
        this.setState({ size: 128 })
    }
    setSize256 = () => {
        this.setState({ size: 256 })
    }
    setSize512 = () => {
        this.setState({ size: 512 })
    }
    render() {
        const icon = IconAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        if (!icon) {
            return <div>Icon was not found</div>
        }
        return (
            <React.Fragment>
                <section className="section fill">
                    <div className="icon-detail">
                        <div className="icon-detail-bg">
                            <div className="icon-detail-content">
                                <div className="icon-size">
                                    <ul>
                                        <li><a>Select size</a></li>
                                        <li><a onClick={this.setSize32}>32 <em>x</em> 32</a></li>
                                        <li><a onClick={this.setSize64}>64 <em>x</em> 64</a></li>
                                        <li><a onClick={this.setSize128}>128 <em>x</em> 128</a></li>
                                        <li><a onClick={this.setSize256}>256 <em>x</em> 256</a></li>
                                        <li><a onClick={this.setSize512}>512 <em>x</em> 512</a></li>
                                    </ul>
                                </div>
                                <div className="icon-prop">
                                    <img className="card-img-top" src={icon.src} width={this.state.size} height={this.state.size} alt="" />
                                    <h1>{icon.id}</h1>
                                    <h1>{icon.name}</h1>
                                    <h1>{icon.type}</h1>
                                    <h1><span>$</span>{icon.price}</h1>
                                    <h1>{icon.backColor}</h1>
                                    <h1>{icon.author}</h1>
                                    <h1>{icon.tag.join(', ')}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default IconDetail;