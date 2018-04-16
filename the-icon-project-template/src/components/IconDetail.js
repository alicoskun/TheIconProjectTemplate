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
        Array.from(e.target.parentNode.parentNode.nodeName === 'UL' ?
            e.target.parentNode.parentNode.childNodes : e.target.parentNode.parentNode.parentNode.childNodes,
            li => li.firstChild.className = '')

        e.target.className = 'active'
    }
    setSize = (e, size) => {
        this.setState({ size: size })
        this.clearActiveClass(e)
        this.refs.sizeOverlay.textContent = size
    }
    setSizeCustom = (e) => {
        let size = this.refs.customSizeVal.value ?
            this.refs.customSizeVal.value < 16 ? 16 : this.refs.customSizeVal.value
            : this.state.size

        this.setState({
            size: size
        })
        this.clearActiveClass(e)
        this.refs.sizeOverlay.textContent = size
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
                <div className="content">
                    <div className="icon-nav">
                        <ul>
                            <li><a onClick={(event) => this.setSize(event, 16)}>16 <em>x</em> 16</a></li>
                            <li><a onClick={(event) => this.setSize(event, 32)}>32 <em>x</em> 32</a></li>
                            <li><a onClick={(event) => this.setSize(event, 64)}>64 <em>x</em> 64</a></li>
                            <li><a onClick={(event) => this.setSize(event, 128)}>128 <em>x</em> 128</a></li>
                            <li><a onClick={(event) => this.setSize(event, 256)}>256 <em>x</em> 256</a></li>
                            <li className="custom-icon-size">
                                <input ref="customSizeVal" type="number" onChange={this.onChangeCustomSize} min="16" max="512" placeholder="Custom: 100" />
                                <a onClick={this.setSizeCustom}><img src={okButton} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="icon-info">
                                    <div className="row">
                                        <div className="icon-prop col-lg-6 text-left d-flex flex-column">
                                            <h1>{icon.name}</h1>
                                            <h6>By {icon.author}</h6>
                                            <div className="mt-auto icon-sub-detail">
                                                <h5>{icon.type}</h5>
                                                <h6>#{icon.tag.join(', ')}</h6>
                                                <h6 className="text-muted">{icon.licence}</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="icon-prev d-flex justify-content-center">
                                                <img src={icon.src} width={this.state.size} alt="" />
                                            </div>
                                            <div className="icon-size-overlay text-right text-muted">
                                                <h6>size: <span ref="sizeOverlay">300</span>px</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-button row text-center">
                                        <div className="col-lg-12">
                                            <button className="btn btn-success">{`Buy this icon for $${icon.price}`}</button>
                                            <button className="btn btn-outline-success">Add to Collection</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IconDetail