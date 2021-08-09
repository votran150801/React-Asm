import React from 'react'

const FooterWeb = () => {
    return (
        <div>
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
            </div>
            {/* End Footer Info */}
            {/* Footer Newsletter */}
            <div className="container">
              <div className="footer-newsletter">
                <h4>Subscribe Newsletter</h4>
                <form className="footer-newslettr-inner">
                  <input className="input-md fancy" name="footeremail" title="Enter Email Address.." placeholder="Enter Email Address.." type="text" />
                  <button className="btn btn-md btn-color fancy">Sing Up</button>
                </form>
              </div>
            </div>
            {/* End Footer Newsletter */}
            {/* Footer Copyright */}
            <div className="container">
              <div className="copyrights">
                <p className="copyright">© Created by <a href="http://nileforest.com/" target="_blank">NileForest</a>. Philos Responsive Woocommerce Theme 2017</p>
                <p className="payment">
                  <img src="weblayout/img/payment_logos.png" alt="payment" />
                </p>
              </div>
            </div>
            {/* End Footer Copyright */}
          </footer>
        </div>
    )
}

export default FooterWeb
