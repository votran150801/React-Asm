import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory,
    useLocation
  } from "react-router-dom";
import { isAuthenticate } from '../../auth';
const Aside = () => {
  const history = useHistory(); // sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // pathname: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // set state để sau này check trạng thái đã đăng nhập hay chưa
  const { email, sub } = isAuthenticate(); // lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]); // thằng useEffect được gọi là khi thằng pathname hoặc thằng state thay đổi
  const check = () => {
    if (pathname !== "/signin" && isLogged ) {
        return (
          <div className="info">
            <a href="f" className="d-block">{email}</a>
          </div>
        )
    }
  }
    return (
        <div>
             <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        
        <a href="index3.html" className="brand-link">
          <img src="AdminLTE-3.1.0/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Admin Website</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="AdminLTE-3.1.0/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            {check()}
           
            
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2 ">
            <ul className="nav nav-pills nav-sidebar flex-column position-sticky pt-3" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
             
              <li className="nav-item">
                <Link exact  activeClassName="active" aria-current="page" to="/admin" className="nav-link bg-none">
                  <i className="nav-icon fas fa-th" />
                  
                  <p>
                    Home
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link   activeClassName="active" aria-current="page" to="/admin/viewProduct" className="nav-link bg-none">
                  <i className="nav-icon fas fa-copy" />
                  
                  <p>
                    Products
                  </p>
                </Link>
                
               
              </li>
              <li className="nav-item">
                <Link to="/admin/viewcategory" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Categories
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Forms 
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables
                  </p>
                </a>       
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
        </div>
    )
}

export default Aside
