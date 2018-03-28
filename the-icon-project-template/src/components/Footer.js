import React, { Component } from 'react';
import logoBl from '../logo-bl.svg';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="form-inline justify-content-center logo">
                  <img src={logoBl} width="30" height="30" alt="" />
                  <h4>ICONAREA</h4>
                </div>
                <div className="form-inline justify-content-center copyright">
                  <p>Copyright 2018</p>
                  <p>All rights reserved</p>
                </div>
                <div className="form-inline justify-content-center social-media">
                  <h6>Twitter</h6>
                  <h6>Pinterest</h6>
                </div>
                <div className="form-inline justify-content-center payment-method">
                  <a><img htrf="#" src="https://cdn0.iconfinder.com/static/img/footer-visa.svg" /></a>
                  <a><img htrf="#" src="https://cdn0.iconfinder.com/static/img/footer-mastercard.svg" /></a>
                  <a><img htrf="#" src="https://cdn0.iconfinder.com/static/img/footer-paypal.svg" /></a>
                  <a><img htrf="#" src="https://cdn0.iconfinder.com/static/img/footer-secure.svg" /><p className="d-inline">Secure connection</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;