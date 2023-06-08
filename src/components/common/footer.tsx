import React from "react";
import { Link } from "react-router-dom";
const logoStye = {
  width: "35%",
};
const Footer = () => {
  return (
    <footer className="footer_area clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="single_widget_area d-flex mb-30">
              <div className="footer-logo mr-50" style={logoStye}>
                <Link to="/">
                  <img src="/images/core-img/logo2.png" alt="" />
                </Link>
              </div>
              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="single_widget_area mb-30">
              <ul className="footer_widget_menu">
                <li>
                  <a>Order Status</a>
                </li>
                <li>
                  <a>Payment Options</a>
                </li>
                <li>
                  <a>Shipping and Delivery</a>
                </li>
                <li>
                  <a>Guides</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_heading mb-30">
                <h6>Subscribe</h6>
              </div>
              <div className="subscribtion_form">
                <form>
                  <input
                    type="email"
                    name="mail"
                    className="mail"
                    placeholder="Your email here"
                  />
                  <button type="submit" className="submit">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_social_area">
                <a title="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a title="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a title="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a title="Pinterest">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
                <a title="Youtube">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>Copyright © All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
