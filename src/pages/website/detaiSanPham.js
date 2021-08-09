import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { getAllCate, getCate } from '../../api/categoryAPI';
import { getAll, getPro } from '../../api/productAPI';
const DetaiSanPham = (props) => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    const getProduct = async () => {
      try {
        const { data } = await getPro(id);
        
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const [ category , setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();

        setCategory(data);
      }catch(error){}
    }
    getCategory();
  }, []);
 
    return (
        <div>
        {/* Bread Crumb */}
        <section className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="breadcrumb-link">
                  <a href="#">Home</a>
                  <a href="#">Categories</a>
                  <span>Men Polos &amp; Tees</span>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Bread Crumb */}
        {/* Page Content */}
        <section id="product-ID_XXXX" className="content-page single-product-content">
          {/* Product */}
          
          <div id="product-detail" className="container">
            <div className="row">
              {/* Product Image */}
              <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="product-page-image">
                  {/* Slick Image Slider */}
                  <div className="product-image-slider product-image-gallery" id="product-image-gallery" data-pswp-uid={3}>
                    <div className="item">
                      <a className="product-gallery-item" href="img/product-img/single/product_12547007_1.jpg" data-size data-med="img/product-img/single/product_12547007_1.jpg" data-med-size>
                        <img src={product.image} alt="image 1" />
                      </a>
                    </div>
                   
                  </div>
                  {/* End Slick Image Slider */}
                  <a href="javascript:void(0)" id="zoom-images-button" className="zoom-images-button"><i className="fa fa-expand" aria-hidden="true" /></a>
                </div>
                {/* Slick Thumb Slider */}
              
                {/* End Slick Thumb Slider */}
              </div>
              {/* End Product Image */}
              {/* Product Content */}        
              
              <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="product-page-content">
                  <h2 className="product-title">{product.name}</h2>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <div className="product-price">
                    <span><span className="product-price-sign"></span><span className="product-price-text">{product.price}</span>đ</span>
                  </div>
                  <p className="product-description">
                      {product.desc}
                  </p>
                  <div className="row product-filters">
                    <form className="col-md-6 filters-color">
                      <label htmlFor="select-color">Select Color</label>
                      {/*<select name="select-color" id="select-color" class="nice-select-box select-color">
                                            <option value="" selected="selected">Choose an option</option>
                                            <option value="#f00">Red</option>
                                            <option value="blue">Blue</option>
                                            <option value="orange">Orange</option>
                                            <option value="green">Green</option>
                                            <option value="black">Black</option>
                                            <option value="gray">Gray</option>
                                        </select>*/}
                      <div className="color-selector">
                        <div className="entry active" style={{background: '#000'}}>&nbsp;</div>
                        <div className="entry" style={{background: '#7eabe9'}}>&nbsp;</div>
                        <div className="entry" style={{background: '#f27123'}}>&nbsp;</div>
                        <div className="entry" style={{background: '#d1d1d1'}}>&nbsp;</div>
                      </div>
                    </form>
                    <form className="col-md-6 filters-size">
                      <label htmlFor="select-size">Select Size</label>
                      {/*<select name="select-size" id="select-size" class="nice-select-box">
                                            <option value="" selected="selected">Choose an option</option>
                                            <option value="l">L</option>
                                            <option value="m">M</option>
                                            <option value="s">S</option>
                                            <option value="x">X</option>
                                            <option value="xl">XL</option>
                                            <option value="xs">XS</option>
                                            <option value="xxl">XXL</option>
                                        </select>*/}
                      <div className="size-selector">
                        <div className="entry active">S</div>
                        <div className="entry">M</div>
                        <div className="entry">L</div>
                        <div className="entry">X</div>
                        <div className="entry">XL</div>
                      </div>
                    </form>
                  </div>
                  <form className="single-variation-wrap">
                    <div className="product-quantity">
                      <span data-value="+" className="quantity-btn quantityPlus" />
                      <input className="quantity input-lg" step={1} min={1} max={9} name="quantity" defaultValue={1} title="Quantity" type="number" />
                      <span data-value="-" className="quantity-btn quantityMinus" />
                    </div>
                    <button type="submit" className="btn btn-lg btn-black"><i className="fa fa-shopping-bag" aria-hidden="true" />Add to cart</button>
                  </form>
                  <div className="single-add-to-wrap">
                    <a className="single-add-to-wishlist"><i className="fa fa-heart left" aria-hidden="true" /><span>Add to Wishlist</span></a>
                    <a className="single-add-to-compare "><i className="fa fa-refresh left" aria-hidden="true" /><span>Add to Compare</span></a>
                  </div>
                  <div className="product-meta">
                    <span>SKU : <span className="sku" itemProp="sku">005687</span></span>
                    <span>Category : <span className="category" itemProp="category">{product.cate_id}</span></span>
                  </div>
                  <div className="product-share">
                    <span>Share :</span>
                    <ul>
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://nileforest.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                      <li><a href="http://twitter.com/share?url=http://nileforest.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                      <li><a href="http://plus.google.com/share?url=http://nileforest.com/" target="_blank"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="mailto:?subject=Check this http://nileforest.com/" target="_blank"><i className="fa fa-envelope" /></a></li>
                      <li><a href="../../../pinterest.com/pin/create/button/index68d2.html?url=http://nileforest.com/exampleImage.jpg" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
          {/* End Product */}
          {/* Product Content Tab */}
          <div className="product-tabs-wrapper container">
            <ul className="product-content-tabs nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="active" href="#tab_description" role="tab" data-toggle="tab">Descriptiont</a>
              </li>
              <li className="nav-item">
                <a className href="#tab_additional_information" role="tab" data-toggle="tab">Additional Information</a>
              </li>
              <li className="nav-item">
                <a className href="#tab_reviews" role="tab" data-toggle="tab">Reviews (<span>3</span>)</a>
              </li>
              <li className="nav-item">
                <a className href="#tab_custom" role="tab" data-toggle="tab">Custom Tab</a>
              </li>
            </ul>
            <div className="product-content-Tabs_wraper tab-content container">
              <div id="tab_description" role="tabpanel" className="tab-pane fade in active">
                {/* Accordian Title */}
                <h6 className="product-collapse-title" data-toggle="collapse" data-target="#tab_description-coll">Description</h6>
                {/* End Accordian Title */}
                {/* Accordian Content */}
                <div id="tab_description-coll" className="shop_description product-collapse collapse container">
                  <div className="row">
                    <div className=" col-md-6">
                      <p>
                        Etiam molestie sit amet arcu vel dictum. Integer mattis est nec porta porttitor. Maecenas condimentum sapien eget urna condimentum, non sagittis ante dapibus. Donec congue libero ut ex malesuada auctor. Vivamus at urna et erat aliquam pharetra. Nulla facilisi. Morbi feugiat tortor finibus elit aliquet tempor.
                        Generated 5 paragraphs, 453 words, 3065 bytes of Lorem Ipsum
                      </p>
                      <h4>Vivamus at urna</h4>
                      <ul>
                        <li>Etiam molestie sit amet arcu vel dictum</li>
                        <li>Integer mattis est nec porta porttitor</li>
                        <li>Maecenas condimentum sapien eget urna condimentum</li>
                        <li>Donec congue libero ut ex malesuada auctor</li>
                        <li>Generated 5 paragraphs, 453 words</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Etiam molestie sit amet arcu vel dictum. Integer mattis est nec porta porttitor. Maecenas condimentum sapien eget urna condimentum, non sagittis ante dapibus. Donec congue libero ut ex malesuada auctor. Vivamus at urna et erat aliquam pharetra. Nulla facilisi. Morbi feugiat tortor finibus elit aliquet tempor.
                        Generated 5 paragraphs, 453 words, 3065 bytes of Lorem Ipsum
                      </p>
                      <h4>hadding four</h4>
                      <h5>hadding five</h5>
                      <h6>hadding six</h6>
                    </div>
                  </div>
                </div>
                {/* End Accordian Content */}
              </div>
              <div id="tab_additional_information" role="tabpanel" className="tab-pane fade">
                {/* Accordian Title */}
                <h6 className="product-collapse-title" data-toggle="collapse" data-target="#tab_additional_information-coll">Additional Information</h6>
                {/* End Accordian Title */}
                {/* Accordian Content */}
                <div id="tab_additional_information-coll" className="container product-collapse collapse">
                  <table className="shop_attributes">
                    <tbody>
                      <tr>
                        <th>Color</th>
                        <td>Black, Gray, White</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td>5 kg</td>
                      </tr>
                      <tr>
                        <th>Dimensions</th>
                        <td>60 x 40 x 60 cm</td>
                      </tr>
                      <tr>
                        <th>Washcare</th>
                        <td>Dry Clean</td>
                      </tr>
                      <tr>
                        <th>Composition</th>
                        <td>100% Polyester</td>
                      </tr>
                      <tr>
                        <th>Lining composition</th>
                        <td>100% Polyester</td>
                      </tr>
                      <tr>
                        <th>Other info</th>
                        <td>Ullamcorper nisl mus integer mollis vestibulu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Accordian Content */}
              </div>
              <div id="tab_reviews" role="tabpanel" className="tab-pane fade">
                {/* Accordian Title */}
                <h6 className="product-collapse-title" data-toggle="collapse" data-target="#tab_reviews-coll">Reviews (0)</h6>
                {/* End Accordian Title */}
                {/* Accordian Content */}
                <div id="tab_reviews-coll" className=" product-collapse collapse container">
                  <div className="row">
                    <div className="review-form-wrapper col-md-6">
                      <h6 className="review-title">Add a Review </h6>
                      <form className="comment-form">
                        <div className="form-field-wrapper">
                          <label>Your Rating</label>
                          <p className="stars">
                            <span>
                              <a className="star-1" href="#">1</a>
                              <a className="star-2" href="#">2</a>
                              <a className="star-3" href="#">3</a>
                              <a className="star-4 active" href="#">4</a>
                              <a className="star-5" href="#">5</a>
                            </span>
                          </p>
                        </div>
                        <div className="form-field-wrapper">
                          <label>Your Review <span className="required">*</span></label>
                          <textarea id="comment" className="form-full-width" name="comment" cols={45} rows={8} aria-required="true" required defaultValue={""} />
                        </div>
                        <div className="form-field-wrapper">
                          <label>Name <span className="required">*</span></label>
                          <input id="author" className="input-md form-full-width" name="author" defaultValue size={30} aria-required="true" required type="text" />
                        </div>
                        <div className="form-field-wrapper">
                          <label>Email <span className="required">*</span></label>
                          <input id="email" className="input-md form-full-width" name="email" defaultValue size={30} aria-required="true" required type="email" />
                        </div>
                        <div className="form-field-wrapper">
                          <input name="submit" id="submit" className="submit btn btn-md btn-color" defaultValue="Submit" type="submit" />
                        </div>
                      </form>
                    </div>
                    <div className="comments col-md-6">
                      <h6 className="review-title">Customer Reviews</h6>
                      {/*<p class="review-blank">There are no reviews yet.</p>*/}
                      <ul className="commentlist">
                        <li id="comment-101" className="comment-101">
                          <img src="weblayout/img/avatar.jpg" className="avatar" alt="author" />
                          <div className="comment-text">
                            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                              <span style={{width: '100%'}} />
                            </div>
                            <p className="meta">
                              <strong itemProp="author">James Koster</strong>
                              &nbsp;—&nbsp;
                              <time itemProp="datePublished" dateTime>April 25, 2016</time>
                            </p>
                            <div className="description" itemProp="description">
                              <p>Wow Amazing!</p>
                            </div>
                          </div>
                        </li>
                        <li id={102} className="comment-102">
                          <img src="weblayout/img/avatar.jpg" className="avatar" alt="author" />
                          <div className="comment-text">
                            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                              <span style={{width: '80%'}} />
                            </div>
                            <p className="meta">
                              <strong itemProp="author">Michel</strong>
                              &nbsp;—&nbsp;
                              <time itemProp="datePublished" dateTime>April 14, 2016</time>
                            </p>
                            <div className="description" itemProp="description">
                              <p>Wow Special!</p>
                            </div>
                          </div>
                        </li>
                        <li id="comment-103" className="comment-103">
                          <img src="weblayout/img/avatar.jpg" className="avatar" alt="author" />
                          <div className="comment-text">
                            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                              <span style={{width: '60%'}} />
                            </div>
                            <p className="meta">
                              <em>Your comment is awaiting approval</em>
                              {/* <strong itemprop="author">Kerry</strong>
                                                    &nbsp;&mdash;&nbsp;
                                                    <time itemprop="datePublished" datetime="">march 19, 2016</time>*/}
                            </p>
                            <div className="description" itemProp="description">
                              <p>When an unknown printer took a galley!</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Accordian Content */}
              </div>
              <div id="tab_custom" role="tabpanel" className="tab-pane fade">
                {/* Accordian Title */}
                <h6 className="product-collapse-title" data-toggle="collapse" data-target="#tab_custom-coll">Custom</h6>
                {/* End Accordian Title */}
                {/* Accordian Content */}
                <div id="tab_custom-coll" className="product-collapse collapse container">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="weblayout/img/blog/blog_02.jpg" alt="shipping delivery" />
                    </div>
                    <div className="col-md-8">
                      <h3 className="normal"><span>When an unknown printer took a galley of type.</span></h3>
                      <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged. </p>
                      <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged. </p>
                      <a href="#" className="btn btn-sm btn-black mt-20">More Now</a>
                    </div>
                  </div>
                </div>
                {/* End Accordian Content */}
              </div>
            </div>
          </div>
          {/* End Product Content Tab */}
          {/* Product Carousel */}
     
            
          <div className="container product-carousel">
            <h2 className="page-title">Related Products</h2>
            <div id="new-tranding" className="product-item-4 owl-carousel owl-theme nf-carousel-theme1">
              {/* item.1 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470001.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">{product.name}</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
              {/* item.2 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470002.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price"><del>$79.00</del>$39.00</h5>
                </div>
              </div>
              {/* item.3 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470003.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
              {/* item.4 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470004.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
              {/* item.5 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470005.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
              {/* item.6 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470006.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
              {/* item.7 */}
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-img-wrap">
                    <img src="weblayout/img/product-img/big/product_125470007.jpg" alt="" />
                  </div>
                  <div className="product-button">
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                  </div>
                </div>
                <div className="product-detail">
                  <a className="tag" href="#">Men Fashion</a>
                  <p className="product-title"><Link to="san-pham/detail">United Colors of Benetton</Link></p>
                  <div className="product-rating">
                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                      <span style={{width: '60%'}} />
                    </div>
                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                  </div>
                  <p className="product-description">
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                  </p>
                  <h5 className="item-price">$39.00</h5>
                </div>
              </div>
            </div>
          </div>
          {/* End Product Carousel */}
          <div className="row product-list-item">
          {props.products.filter((value) => value.cate_id === product.cate_id).map((value) => {                                         
          return (
            
                  <div className="product-item-element col-sm-6 col-md-6 col-lg-3">
                      <div className="product-item ">
                          <div className="product-item-inner">
                           <div className="product-img-wrap">
                                <img src={`${value.image}`}  className="img-fluid w-100" alt=".." />
                            </div>
                            <div className="product-button">
                              <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                              <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                              <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                            </div>
                          </div>
                      <div className="product-detail">
                      <a className="tag" href="#">Men Fashion</a>
                      <p className="product-title"><Link to="san-pham/detail">{value.name}</Link></p>
                      <div className="product-rating">
                        <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                          <span style={{width: '60%'}} />
                        </div>
                        <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                      </div>
                      <p className="product-description">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
                      </p>
                      <h5 className="item-price">{value.price}</h5>
                    </div>
                    </div> 
                </div> 
           
          )
                
           })}   
             </div>   
        </section>
        {/* End Page Content */}
      </div>
    )
}

export default DetaiSanPham
