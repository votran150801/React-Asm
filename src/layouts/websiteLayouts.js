import React from 'react'
import FooterWeb from '../components/website/footer'
import HeaderWeb from '../components/website/header'

const WebsiteLayouts = (props) => {
    return (
        <div>
        {/* Mirrored from theme.nileforest.com/html/philos/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 24 Feb 2021 13:54:14 GMT */}
        <meta charSet="utf-8" />
        <title>Philos - Responsive Ecommerce Html Template</title>
        <meta name="description" content="Philos Template" />
        <meta name="keywords" content="philos, WooCommerce, bootstrap, html template, philos template" />
        <meta name="author" content="philos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        {/*[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]*/}
        {/* Favicone Icon */}
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
        <link rel="icon" type="img/png" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />
        {/* CSS */}
        <link href="weblayout/css/plugins/bootstrap.css" rel="stylesheet" type="text/css" />
        {/* bootstrap css */}
        <link href="weblayout/css/plugins/font-awesome.min.css" rel="stylesheet" type="text/css" />
        {/* fontawesome css */}
        <link href="weblayout/css/plugins/animate.css" rel="stylesheet" type="text/css" />
        {/* animate css */}
        <link href="weblayout/css/style.css" rel="stylesheet" type="text/css" />
        {/* template css */}
        <link href="weblayout/plugins/rev_slider/css/settings-ver.5.3.1.css" rel="stylesheet" type="text/css" />
        {/* Slider Revolution Css Setting */}
        {/* Newsletter Popup --------------------------------------------------*/}
        <section id="nlpopup" data-expires={30} data-delay={10}>
          {/*Close Button*/}
          <a href="javascript:void(0)" className="nlpopup_close nlpopup_close_icon">
            <img src="weblayout/img/close-icon-white.png" alt="Newsletter Close" /></a>
          {/*End Close Button*/}
          <h3 className="mb-40">Join Our Mailing List </h3>
          <p className="black mb-20">
            But I must explain to you how all this mistaken<br />
            idea of denouncing pleasure pain.
          </p>
          <form>
            <input className="input-md" name="footeremail" title="Enter Email Address.." placeholder="example@domain.com" type="email" />
            <button className="btn btn-md btn-color">Subscribe</button>
          </form>
          <label className="mt-20">
            Sign up For Exclusive Updates, New Arrivals<br />
            And Insider-Only Discount.</label>
          <a className="nlpopup_close nlpopup_close_link mt-40">✖ Close</a>
        </section>
        {/* Overlay */}
        <div id="nlpopup_overlay" />
        {/* End Newsletter Popup ----------------------------------------------*/}
        {/* Sidebar Menu (Cart Menu) ----------------------------------------------*/}
        <section id="sidebar-right" className="sidebar-menu sidebar-right">
          <div className="cart-sidebar-wrap">
            {/* Cart Headiing */}
            <div className="cart-widget-heading">
              <h4>Shopping Cart</h4>
              {/* Close Icon */}
              <a href="javascript:void(0)" id="sidebar_close_icon" className="close-icon-white" />
              {/* End Close Icon */}
            </div>
            {/* End Cart Headiing */}
            {/* Cart Product Content */}
            <div className="cart-widget-content">
              <div className="cart-widget-product ">
                {/* Empty Cart */}
                <div className="cart-empty">
                  <p>You have no items in your shopping cart.</p>
                </div>
                {/* EndEmpty Cart */}
                {/* Cart Products */}
                <ul className="cart-product-item">
                  {/* Item */}
                  <li>
                    {/*Item Image*/}
                    <a href="#" className="product-image">
                      <img src="weblayout/img/product-img/small/product_12547554.jpg" alt="" /></a>
                    {/*Item Content*/}
                    <div className="product-content">
                      {/* Item Linkcollateral */}
                      <a className="product-link" href="#">Alpha Block Black Polo T-Shirt</a>
                      {/* Item Cart Totle */}
                      <div className="cart-collateral">
                        <span className="qty-cart">1</span>&nbsp;<span>×</span>&nbsp;<span className="product-price-amount"><span className="currency-sign">$</span>399.00</span>
                      </div>
                      {/* Item Remove Icon */}
                      <a className="product-remove" href="javascript:void(0)"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                    </div>
                  </li>
                  {/* Item */}
                  <li>
                    {/*Item Image*/}
                    <a href="#" className="product-image">
                      <img src="weblayout/img/product-img/small/product_12547555.jpg" alt="" /></a>
                    {/*Item Content*/}
                    <div className="product-content">
                      {/* Item Linkcollateral */}
                      <a className="product-link" href="#">Red Printed Round Neck T-Shirt</a>
                      {/* Item Cart Totle */}
                      <div className="cart-collateral">
                        <span className="qty-cart">2</span>&nbsp;<span>×</span>&nbsp;<span className="product-price-amount"><span className="currency-sign">$</span>299.00</span>
                      </div>
                      {/* Item Remove Icon */}
                      <a className="product-remove" href="javascript:void(0)"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                    </div>
                  </li>
                </ul>
                {/* End Cart Products */}
              </div>
            </div>
            {/* End Cart Product Content */}
            {/* Cart Footer */}
            <div className="cart-widget-footer">
              <div className="cart-footer-inner">
                {/* Cart Total */}
                <h4 className="cart-total-hedding normal"><span>Total :</span><span className="cart-total-price">$698.00</span></h4>
                {/* Cart Total */}
                {/* Cart Buttons */}
                <div className="cart-action-buttons">
                  <a href="cart.html" className="view-cart btn btn-md btn-gray">View Cart</a>
                  <a href="checkout.html" className="checkout btn btn-md btn-color">Checkout</a>
                </div>
                {/* End Cart Buttons */}
              </div>
            </div>
            {/* Cart Footer */}
          </div>
        </section>
        {/*Overlay*/}
        <div className="sidebar_overlay" />
        {/* End Sidebar Menu (Cart Menu) ------------------------------------------*/}
        {/* Search Overlay Menu ---------------------------------------------------*/}
        <section className="search-overlay-menu">
          {/* Close Icon */}
          <a href="javascript:void(0)" className="search-overlay-close" />
          {/* End Close Icon */}
          <div className="container">
            {/* Search Form */}
            <form role="search" id="searchform" action="http://theme.nileforest.com/search" method="get">
              <div className="search-icon-lg">
                <img src="weblayout/img/search-icon-lg.png" alt="" />
              </div>
              <label className="h6 normal search-input-label" htmlFor="search-query">Enter keywords to Search Product</label>
              <input defaultValue name="q" type="search" placeholder="Search..." />
              <button type="submit">
                <img src="weblayout/img/search-lg-go-icon.png" alt="" />
              </button>
            </form>
            {/* End Search Form */}
          </div>
        </section>
        {/* End Search Overlay Menu ----------------------------------------------*/}
        {/*==========================================*/}
        {/* wrapper */}
        {/*==========================================*/}
        <div className="wraper">
          {/* Header */}
          <HeaderWeb />
          {/* End Header */}
          {/* Page Content Wraper */}
          <div className="page-content-wraper">
                {props.children}
          </div>
          {/* End Page Content Wraper */}
          {/* Footer Section ------------*/}
        <FooterWeb />
          {/* End Footer Section ------------*/}
        </div>
        {/* End wrapper =============================*/}
        {/*==========================================*/}
        {/* JAVASCRIPT */}
        {/*==========================================*/}
        {/* jquery library js */}
        {/*modernizr Js*/}
        {/*Slider Revolution Js File*/}
        {/*Bootstrap tooltips require Tether (Tether Js)*/}
        {/* bootstrap js */}
        {/* OWL carousel js */}
        {/* Slick Slider js */}
        {/* Plugins All js */}
        {/* custom js */}
        {/* end jquery */}
        {/* Mirrored from theme.nileforest.com/html/philos/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 24 Feb 2021 13:58:01 GMT */}
      </div>
    )
}

export default WebsiteLayouts
