import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    Redirect
  } from "react-router-dom";
import { isAuthenticate, signOut } from '../../auth';

const HeaderWeb = (props) => {
  const history = useHistory(); // sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // pathname: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // set state để sau này check trạng thái đã đăng nhập hay chưa
  const { email, sub } = isAuthenticate(); // lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]); // thằng useEffect được gọi là khi thằng pathname hoặc thằng state thay đổi
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged ) {
      // nếu pathname thay đổi (!= signin) và đã đăng nhập
      return (
        <>
          <li>
            <Link 
                 exact
                 className="py-2 d-none d-md-inline-block"
                 aria-current="page"
                 to={sub == 1 ? "/admin" : "/"}
            >
              <i className="fa fa-lock left" aria-hidden="true" />
              <span className="hidden-sm-down">
                Admin
              </span>
            </Link>
          </li>
          <li>
            <Link to="/signin"
                 style={{ cursor: "pointer" }}
                 onClick={() =>
                   signOut(() => {
                     setIsLogged(false);
                     history.push("/");
                   })
                 }
            >
              <i className="fa fa-lock left" aria-hidden="true" />
              <span className="hidden-sm-down">
                Sign Out
              </span>
            </Link>
          </li>
        </>
      );
    } else if (pathname === "/signin" && isLogged) {
      // neu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/" />;
    } else {
      // ngược lại khi signout
      return (
        <>
      <li>
      <Link to="/signup"><i className="fa fa-lock left" aria-hidden="true" /><span className="hidden-sm-down">Signup</span></Link>
      </li>
      <li>
      <Link to="/signin"><i className="fa fa-lock left" aria-hidden="true" /><span className="hidden-sm-down">Login</span></Link>
      </li>
        </>
      );
    }
  };
    return (
        <div>
             <header className="header">
            {/*Topbar*/}
            <div className="header-topbar">
              <div className="header-topbar-inner">
                {/*Topbar Left*/}
                <div className="topbar-left hidden-sm-down">
                  <div className="phone"><i className="fa fa-phone left" aria-hidden="true" />Customer Support : <b>+0392698440</b></div>
                </div>
                {/*End Topbar Left*/}
                {/*Topbar Right*/}
                <div className="topbar-right">
                  <ul className="list-none">
                    {checkLogin()}
                    <li className="dropdown-nav">
                      <a href="login-register.html"><i className="fa fa-user left" aria-hidden="true" /><span className="hidden-sm-down">{email}</span><i className="fa fa-angle-down right" aria-hidden="true" /></a>
                      {/*Dropdown*/}
                      <div className="dropdown-menu">
                        <ul>
                          <li><a href="login-register.html">{email}</a></li>
                          <li><a href="#">Order History</a></li>
                          <li><a href="#">Returns</a></li>
                          <li><a href="#">My Wishlist</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                        <span className="divider" />
                        <ul>
                          <li><a href="login-register.html"><i className="fa fa-lock left" aria-hidden="true" />Login</a></li>
                          <li><a href="login-register.html"><i className="fa fa-user left" aria-hidden="true" />Create an Account</a></li>
                        </ul>
                      </div>
                      {/*End Dropdown*/}
                    </li>
                    <li className="dropdown-nav">
                      <a href="#">USD<i className="fa fa-angle-down right" aria-hidden="true" /></a>
                      {/*Dropdown*/}
                      <div className="dropdown-menu">
                        <ul>
                          <li><a href="#">USD</a></li>
                          <li><a href="#">EUR</a></li>
                          <li><a href="#">GBP</a></li>
                          <li><a href="#">AUD</a></li>
                        </ul>
                      </div>
                      {/*End Dropdown*/}
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* End Topbar Right */}
              </div>
            </div>
            {/*End Topbart*/}
            {/* Header Container */}
            <div id="header-sticky" className="header-main">
              <div className="header-main-inner">
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img src="weblayout/img/logoaophong3.png" alt="Philos" />
                  </Link>
                </div>
                {/* End Logo */}
                {/* Right Sidebar Nav */}
                <div className="header-rightside-nav">
                  {/* Login-Register Link */}
               
                  {/* End Login-Register Link */}
                  {/* Sidebar Icon */}
                  <div className="sidebar-icon-nav">
                    <ul className="list-none-ib">
                      {/* Search*/}
                      <li><a id="search-overlay-menu-btn"><i aria-hidden="true" className="fa fa-search" /></a></li>
                      {/* Whishlist*/}
                      <li><a className="js_whishlist-btn"><i aria-hidden="true" className="fa fa-heart" /><span className="countTip">10</span></a></li>
                      {/* Cart*/}
                      <li><a id="sidebar_toggle_btn">
                          <div className="cart-icon">
                            <i aria-hidden="true" className="fa fa-shopping-bag" />
                          </div>
                          <div className="cart-title">
                            <span className="cart-count">2</span>
                            /
                            <span className="cart-price strong">$698.00</span>
                          </div>
                        </a></li>
                    </ul>
                  </div>
                  {/* End Sidebar Icon */}
                </div>
                {/* End Right Sidebar Nav */}
                {/* Navigation Menu */}
                <nav className="navigation-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      
                      <li className="dropdown-nav">
                      <Link to="/san-pham">Sản Phẩm</Link>
                      {/*Dropdown*/}
                      <div className="dropdown-menu">
                        <ul>
                          {/* {props.products.map((category) =>(
                          <li><Link to={`/san-pham/${category.id}`}>{category.name}</Link></li>     
                          ))} */}
                        </ul>
                        <span className="divider" />
                        <ul>
                          <li><a href="login-register.html"><i className="fa fa-lock left" aria-hidden="true" />Login</a></li>
                          <li><a href="login-register.html"><i className="fa fa-user left" aria-hidden="true" />Create an Account</a></li>
                        </ul>
                      </div>
                      {/*End Dropdown*/}
                    </li>
                    </li>
                    <li>
                      <Link to="/lien-he">Liên Hệ</Link>         
                    </li>
                  </ul>
                </nav>
                {/* End Navigation Menu */}
              </div>
            </div>
            {/* End Header Container */}
          </header>
        </div>
    )
}

export default HeaderWeb
