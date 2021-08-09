import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const LienHe = () => {
    return (
        <div>
        {/* Bread Crumb */}
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="breadcrumb-link">
                  <a href="#">Home</a>
                  <span>Lien He</span>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Bread Crumb */}
        {/* Page Content */}
        <section className="content-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="map" className="map style1 mb-45" >
                
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9182623415354!2d105.77405431473159!3d21.0359562859945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b67424c151%3A0xacd1201ddb2e3ec3!2zTmfDtSA3NSBI4buTIFTDuW5nIE3huq11LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1627631820644!5m2!1svi!2s" width={1110} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-xs-30">
                <h2 className="normal"><span>Stay In Touch</span></h2>
                <p className="mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                <h6>Company address</h6>
                <p className="mb-25">
                  1 Wintergreen Dr. Huntley,
                  <br />
                  NY 11510,
                  <br />
                  United States
                </p>
                <h6>Contact Information</h6>
                <ul className="Contact-information mb-25">
                  <li><i className="fa fa-envelope" aria-hidden="true" />info@sky.com</li>
                  <li><i className="fa fa-phone" aria-hidden="true" />(013) 456789</li>
                </ul>
                <hr />
                <div className="product-share mtb-30">
                  <ul className="list-none">
                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li><a href="http://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                    <li><a href="http://plus.google.com/" target="_blank"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="http://pinterest.com/" target="_blank"><i className="fa fa-pinterest" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 offset-md-2">
                <h2 className="normal"><span>Liên Hệ</span></h2>
                <form className="Contact-form">
                  <div className="form-field-wrapper">
                    <label>Họ và Tên<span className="required">*</span></label>
                    <input id="author" className="input-md form-full-width" name="author" placeholder=" EnterYour Name (required)" defaultValue size={30}  required type="text" />
                  </div>
                  <div className="form-field-wrapper">
                    <label>Email<span className="required">*</span></label>
                    <input id="author-email" className="input-md form-full-width" name="author" placeholder="Enter Your Email Address (required)" defaultValue size={30}  required type="email" />
                  </div>
                  <div className="form-field-wrapper">
                    <label>Chủ đề<span className="required">*</span></label>
                    <input id="subject" className="input-md form-full-width" name="author" placeholder="Enter Your Subject (required)" defaultValue size={30} required type="text" />
                  </div>
                  <div className="form-field-wrapper">
                    <label>Nội dung<span className="required">*</span></label>
                    <textarea id="comment" className="form-full-width" name="comment" placeholder="Enter Your Subject (required)" cols={45} rows={8}required defaultValue={""} />
                  </div>
                  <div className="form-field-wrapper">
                    <input name="submit" id="submit" className="submit btn btn-md btn-color" defaultValue="Submit" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Page Content */}
        {/* End Page Content Wraper */}
        {/* Footer Section ------------*/}
        <footer className="footer section-padding">
          {/* Footer Info */}
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 mb-sm-45">
                <div className="footer-block about-us-block">
                  <img src="weblayout/img/logo_white.png" width={125} alt="" />
                  
                  <p>Gumbo beet greens corn soko endive gum gourd. Parsley allot courgette tatsoi pea sprouts fava bean soluta nobis est ses eligendi optio.</p>
                  <ul className="footer-social-icon list-none-ib">
                    <li><a href="http://facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                    <li><a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mb-sm-45">
                <div className="footer-block information-block">
                  <h6>Information</h6>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Latest News</a></li>
                    <li><a href="#">Our Sitemap</a></li>
                    <li><a href="#">Terms &amp; Condition</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mb-sm-45">
                <div className="footer-block links-block">
                  <h6>Our Links</h6>
                  <ul>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Gift Vouchers</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Special Event</a></li>
                    <li><a href="#">Retunrs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mb-sm-45">
                <div className="footer-block extra-block">
                  <h6>Extra</h6>
                  <ul>
                    <li><a href="#">New Collection</a></li>
                    <li><a href="#">Women Dresses</a></li>
                    <li><a href="#">Kids Collection</a></li>
                    <li><a href="#">Mens Collection</a></li>
                    <li><a href="#">Custom Service</a></li>
                    <li><a href="#">Shipping policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="footer-block contact-block">
                  <h6>Contact</h6>
                  <ul>
                    <li><i className="fa fa-map-marker" aria-hidden="true" />1 Wintergreen Dr. Huntley
                      <br />
                      IL 60142, Usa</li>
                    <li><i className="fa fa-envelope" aria-hidden="true" /><a href="mailto:info@sky.com">info@sky.com</a></li>
                    <li><i className="fa fa-phone" aria-hidden="true" />(013) 456789</li>
                    <li><i className="fa fa-fax" aria-hidden="true" />89567989</li>
                  </ul>
                </div>
              </div>
            </div>
          </div></footer></div>
    )
}

export default LienHe
