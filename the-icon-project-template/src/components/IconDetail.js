import React, { Component } from 'react'
import './IconDetail.css'
import IconAPI from '../IconAPI'
import okButton from '../assets/ok.svg'

class IconDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 300
        }
    }
    clearActiveClass = (e) => {
        Array.from(e.target.parentNode.parentNode.childNodes, 
            li => li.firstChild.className = '')

        e.target.className = 'active'
    }
    setSize32 = (e) => {
        this.setState({ size: 32 })
        this.clearActiveClass(e)
    }
    setSize64 = (e) => {
        this.setState({ size: 64 })
        this.clearActiveClass(e)
    }
    setSize128 = (e) => {
        this.setState({ size: 128 })
        this.clearActiveClass(e)
    }
    setSize256 = (e) => {
        this.setState({ size: 256 })
        this.clearActiveClass(e)
    }
    setSize512 = (e) => {
        this.setState({ size: 512 })
        this.clearActiveClass(e)
    }
    setSizeCustom = (e) => {
        this.setState({
            size: this.refs.customSizeVal.value ?
                this.refs.customSizeVal.value < 16 ? 16 : this.refs.customSizeVal.value
                : this.state.size
        })
    }
    onChangeCustomSize = (e) => {
        e.target.value = e.target.value > 512 ? 512 : (e.target.value < 0 ? 16 : e.target.value)
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="icon-size">
                                            <ul>
                                                <li><a>Select size</a></li>
                                                <li><a onClick={this.setSize32}>32 <em>x</em> 32</a></li>
                                                <li><a onClick={this.setSize64}>64 <em>x</em> 64</a></li>
                                                <li><a onClick={this.setSize128}>128 <em>x</em> 128</a></li>
                                                <li><a onClick={this.setSize256}>256 <em>x</em> 256</a></li>
                                                <li><a onClick={this.setSize512}>512 <em>x</em> 512</a></li>
                                                <li className="custom-icon-size">
                                                    <input ref="customSizeVal" type="number" onChange={this.onChangeCustomSize} min="16" max="512" placeholder="Custom: 100" />
                                                    <a onClick={this.setSizeCustom}><img src={okButton} /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="icon-info">
                                            <div className="row">
                                                <div className="icon-prop col-lg-6 text-left d-flex flex-column">
                                                    <h1>{icon.name}</h1>
                                                    <h6>By {icon.author}</h6>
                                                    <div className="mt-auto">
                                                        <h5>{icon.type}</h5>
                                                        <h6>#{icon.tag.join(', #')}</h6>
                                                        <h6 className="text-muted">{icon.licence}</h6>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 text-center">
                                                    <img className="icon-prev" src={icon.src} alt="" />
                                                </div>
                                            </div>
                                            <div className="icon-button row text-center">
                                                <div className="col-lg-6 offset-lg-6">
                                                    <button className="btn btn-success">{`Buy this icon for $${icon.price}`}</button>
                                                    <button className="btn btn-outline-success">Add to Collection</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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