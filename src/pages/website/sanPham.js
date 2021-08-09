import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const SanPham = (props) => {
    return (
        <div>
        {/* Bread Crumb */}
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="breadcrumb-link">
                  <Link to="/">Home</Link>
                  <Link to="/san-pham">San Pham</Link>
                 
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
              {/* Product Content */}
              <div className="col-md-9 push-md-3">
                {/* Title */}
                <div className="list-page-title">
                  <h2 className>Men Polos &amp; Tees <small>120 Products</small></h2>
                </div>
                {/* End Title */}
                {/* Product Filter */}
                <div className="product-filter-content">
                  <div className="product-filter-content-inner">
                    {/*Product Filter Button*/}
                    <div className="product-filter-dropdown-btn "><a href="javascript:void(0)" data-toggle-target="filter-slide-toggle" className="btn btn-sm btn-gray slide-toggle-btn"><i className="fa fa-bars left" aria-hidden="true" />Filter</a></div>
                    {/*Product Sort By*/}
                    <form className="product-sort-by">
                      <label htmlFor="short-by">Short By</label>
                      <select name="short-by" id="short-by" className="nice-select-box">
                        <option value="default_sorting" selected="selected">Default sorting</option>
                        <option value="sort_by_popularity">Popularity</option>
                        <option value="sort_by_average_rating">Average rating</option>
                        <option value="sort_by_newness">New product</option>
                        <option value="price_low_to_high">Price: low to high</option>
                        <option value="price_high_to_low">Price: high to low</option>
                      </select>
                    </form>
                    {/*Product Show*/}
                    <form className="product-show">
                      <label htmlFor="product-show">Show</label>
                      <select name="product-show" id="product-show" className="nice-select-box">
                        <option value={15} selected="selected">15</option>
                        <option value={18}>18</option>
                        <option value={21}>21</option>
                        <option value={24}>24</option>
                        <option value="all">Show All</option>
                      </select>
                    </form>
                    {/*Product List/Grid Icon*/}
                    <div className="product-view-switcher">
                      <label>View</label>
                      <div className="product-view-icon product-grid-switcher product-view-icon-active">
                        <a className href="#"><i className="fa fa-th" aria-hidden="true" /></a>
                      </div>
                      <div className="product-view-icon product-list-switcher">
                        <a className href="#"><i className="fa fa-th-list" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Product Filter */}
                {/* Product filters Toggle*/}
                <div className="container product-filter-dropdown toggle-content" id="filter-slide-toggle">
                  <div className="row col mlr-0">
                    {/* Shop Categories */}
                    <div className="widget-sidebar col-sm-12 col-md-6 col-lg-3">
                      <h6 className="widget-title">Categories</h6>
                      <ul className="widget-content widget-product-categories jq-accordian">
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a className="javascript:void(0)">Clothings<span className="jq-accordionIcon" /></a>
                          <ul className="children" style={{display: 'none'}}>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Coats &amp; Jackets</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Sportswear</a></li>
                            <li><a href="#">Swimwear</a></li>
                            <li><a href="#">Trousers</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Man<span className="jq-accordionIcon" /></a>
                          <ul style={{display: 'none'}}>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Coats &amp; Jackets</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Sportswear</a></li>
                            <li><a href="#">Swimwear</a></li>
                            <li><a href="#">Trousers</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Jacket</a></li>
                        <li><a href="#">New arrivals</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="sdsd">Socks</a></li>
                      </ul>
                    </div>
                    {/* End Shop Categories */}
                    {/* Filter Price */}
                    <div className="widget-sidebar widget-filter-price col-sm-12 col-md-6 col-lg-3">
                      <h6 className="widget-title">Select Price</h6>
                      <ul className="widget-content">
                        <li>
                          <a href="#">All</a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>0.00</span>
                            -
                            <span className="amount"><span className="currencySymbol">$</span>500.00</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>500.00</span>
                            -
                            <span className="amount"><span className="currencySymbol">$</span>1100.00</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>1100.00</span>
                            -
                            <span className="amount"><span className="currencySymbol">$</span>1600.00</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>1600.00</span>
                            -
                            <span className="amount"><span className="currencySymbol">$</span>2100.00</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>2100.00</span>
                            -
                            <span className="amount"><span className="currencySymbol">$</span>2600.00</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="amount"><span className="currencySymbol">$</span>2600.00</span>
                            +
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End Filter Price */}
                    {/* Filter Color */}
                    <div className="widget-sidebar widget-filter-color col-sm-12 col-md-6 col-lg-3">
                      <h6 className="widget-title">Select Color</h6>
                      <ul className="widget-content">
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#ff4040'}} /></div>
                            Red</a>
                          <span className="color-count">(9)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#000'}} /></div>
                            Black</a>
                          <span className="color-count">(112)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#ff9000'}} /></div>
                            Orange</a>
                          <span className="color-count">(56)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#ffcf3d'}} /></div>
                            Yellow</a>
                          <span className="color-count">(24)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#55b0da'}} /></div>
                            Blue</a>
                          <span className="color-count">(18)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#9ada55'}} /></div>
                            Green</a>
                          <span className="color-count">(72)</span>
                        </li>
                        <li>
                          <a href="#">
                            <div className="filter-color-switcher"><span style={{backgroundColor: '#7a463b'}} /></div>
                            Brown</a>
                          <span className="color-count">(5)</span>
                        </li>
                      </ul>
                    </div>
                    {/* End Filter Color */}
                    {/* Filter Size */}
                    <div className="widget-sidebar widget-filter-size col-sm-12 col-md-6 col-lg-3">
                      <h6 className="widget-title">Select Size</h6>
                      <ul className="widget-content ">
                        <li>
                          <a href="#">L</a>
                          <span>(24)</span>
                        </li>
                        <li>
                          <a href="#">M</a>
                          <span>(34)</span>
                        </li>
                        <li>
                          <a href="#">S</a>
                          <span>(45)</span>
                        </li>
                        <li>
                          <a href="#">X</a>
                          <span>(102)</span>
                        </li>
                        <li>
                          <a href="#">XL</a>
                          <span>(60)</span>
                        </li>
                        <li>
                          <a href="#">XS</a>
                          <span>(78)</span>
                        </li>
                        <li>
                          <a href="#">XXL</a>
                          <span>(35)</span>
                        </li>
                      </ul>
                    </div>
                    {/* End Filter Size */}
                  </div>
                </div>
                {/* End Product filters Toggle*/}
                {/* Product Grid */}
                <div className="row product-list-item">
                  {/* item.1 */}
                  {props.products.map((product) =>(
                  <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                    {/*Product Item*/}
                    <div className="product-item">
                      <div className="product-item-inner">
                        <div className="product-img-wrap">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="product-button">
                          <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                          <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                          <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                        </div>
                      </div>
                      <div className="product-detail">
                        <a className="tag" href="#">Men Fashion</a>
                        <p className="product-title"><Link to={`san-pham/${product.id}/detail`}>{product.name}</Link></p>
                        <div className="product-rating">
                          <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                            <span style={{width: '60%'}} />
                          </div>
                          <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                        </div>
                        <p className="product-description">
                         {product.desc}
                        </p>
                        <h5 className="item-price">{product.price}</h5>đ
                      </div>
                    </div>
                    {/* End Product Item*/}
                  </div>
                
                 
                  ))}
                  
                </div>
                {/* End Product Grid */}
                <div className="pagination-wraper">
                  <p>Showing 1 - 15 of 120 results</p>
                  <div className="pagination">
                    <ul className="pagination-numbers">
                      {/*<li>
                                            <a href="#" class="prev page-number"><i class="fa fa-angle-double-left"></i></a>
                                        </li>*/}
                      <li>
                        <a href="#" className="page-number current">1</a>
                      </li>
                      <li>
                        <a href="#" className="page-number">2</a>
                      </li>
                      <li>
                        <a href="#" className="page-number">3</a>
                      </li>
                      <li>
                        <span className="page-number dots">...</span>
                      </li>
                      <li>
                        <a href="#" className="page-number">29</a>
                      </li>
                      <li>
                        <a href="#" className="next page-number"><i className="fa fa-angle-double-right" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Product Content */}
              {/* Sidebar */}
              <div className="sidebar-container col-md-3 pull-md-9">
                {/* Categories */}
                <div className="widget-sidebar">
                  <h6 className="widget-title">Shop Categories</h6>
                  <ul className="widget-content widget-product-categories jq-accordian">
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a>Clothings</a>
                      <ul className="children">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Coats &amp; Jackets</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sportswear</a></li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Trousers</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Man</a>
                      <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Coats &amp; Jackets</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sportswear</a></li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Trousers</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Jacket</a></li>
                    <li><a href="#">New arrivals</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="sdsd">Socks</a></li>
                  </ul>
                </div>
                {/* Filter By Price */}
                <div className="widget-sidebar widget-price-range">
                  <h6 className="widget-title">Filter By Price</h6>
                  <form className="widget-content" method="get" action="#">
                    <div className="price-range-slider" />
                    <div className="price-range-amount">
                      <input id="price_range_min" name="price_range_min" defaultValue data-min={140} placeholder="Min price" style={{display: 'none'}} type="text" />
                      <input id="price_range_max" name="price_range_max" defaultValue data-max={1100} placeholder="Max price" style={{display: 'none'}} type="text" />
                      <div id="price-range-from-to">
                      </div>
                    </div>
                    <button className="btn btn-xs btn-black pull-right" type="submit">Filter</button>
                  </form>
                </div>
                {/* Filter By Color */}
                <div className="widget-sidebar widget-filter-color">
                  <h6 className="widget-title">Filter By Color</h6>
                  <ul className="widget-content">
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#ff4040'}} /></div>
                        Red</a>
                      <span className="color-count">(9)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#000'}} /></div>
                        Black</a>
                      <span className="color-count">(112)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#ff9000'}} /></div>
                        Orange</a>
                      <span className="color-count">(56)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#ffcf3d'}} /></div>
                        Yellow</a>
                      <span className="color-count">(24)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#55b0da'}} /></div>
                        Blue</a>
                      <span className="color-count">(18)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#9ada55'}} /></div>
                        Green</a>
                      <span className="color-count">(72)</span>
                    </li>
                    <li>
                      <a href="#">
                        <div className="filter-color-switcher"><span style={{backgroundColor: '#7a463b'}} /></div>
                        Brown</a>
                      <span className="color-count">(5)</span>
                    </li>
                  </ul>
                </div>
                {/* Filter By Size */}
                <div className="widget-sidebar widget-filter-size">
                  <h6 className="widget-title">Filter By Size</h6>
                  <ul className="widget-content">
                    <li>
                      <a href="#">L</a>
                      <span>(24)</span>
                    </li>
                    <li>
                      <a href="#">M</a>
                      <span>(34)</span>
                    </li>
                    <li>
                      <a href="#">S</a>
                      <span>(45)</span>
                    </li>
                    <li>
                      <a href="#">X</a>
                      <span>(102)</span>
                    </li>
                    <li>
                      <a href="#">XL</a>
                      <span>(60)</span>
                    </li>
                    <li>
                      <a href="#">XS</a>
                      <span>(78)</span>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                      <span>(35)</span>
                    </li>
                  </ul>
                </div>
                {/* Filter By Tag */}
                <div className="widget-sidebar widget-filter-tag">
                  <h6 className="widget-title">Popular Tag</h6>
                  <ul className="widget-content">
                    <li>
                      <a href="#">Shirt</a>
                    </li>
                    <li>
                      <a href="#">Bag</a>
                    </li>
                    <li>
                      <a href="#">Vintage</a>
                    </li>
                    <li>
                      <a href="#">Sweaters</a>
                    </li>
                    <li>
                      <a href="#">t-shirt</a>
                    </li>
                    <li>
                      <a href="#">white</a>
                    </li>
                    <li>
                      <a href="#">Black</a>
                    </li>
                    <li>
                      <a href="#">New</a>
                    </li>
                    <li>
                      <a href="#">Popular</a>
                    </li>
                  </ul>
                </div>
                {/* Widget Product */}
                <div className="widget-sidebar widget-product">
                  <h6 className="widget-title">Popular Product</h6>
                  <ul className="widget-content">
                    {/*Item*/}
                    <li>
                      <a className="product-img" href="#">
                        <img src="weblayout/img/product-img/big/product_125470007.jpg" alt="" />
                      </a>
                      <div className="product-content">
                        <a className="product-link" href="#">Alpha Block Black Polo Sleem T-Shirt</a>
                        <div className="star-rating">
                          <span style={{width: '80%'}} />
                        </div>
                        <span className="product-amount">$399.00</span>
                      </div>
                    </li>
                    {/*Item*/}
                    <li>
                      <a className="product-img" href="#">
                        <img src="weblayout/img/product-img/big/product_125470006.jpg" alt="" />
                      </a>
                      <div className="product-content">
                        <a className="product-link" href="#">Red Printed Round Neck T-Shirt</a>
                        <div className="star-rating">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="product-amount">$399.00</span>
                      </div>
                    </li>
                    {/*Item*/}
                    <li>
                      <a className="product-img" href="#">
                        <img src="weblayout/img/product-img/big/product_125470005.jpg" alt="" />
                      </a>
                      <div className="product-content">
                        <a className="product-link" href="#">Maroon Solid Henley T-Shirts</a>
                        <div className="star-rating">
                          <span style={{width: '100%'}} />
                        </div>
                        <span className="product-amount">$399.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget-sidebar widget-banner">
                  <a href="#" className="banner-image-wrap">
                    <img src="weblayout/img/banner/banner_115146.jpg" alt="" />
                  </a>
                </div>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </section>
        {/* End Page Content */}
      </div>
    )
}

export default SanPham
