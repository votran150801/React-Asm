import React from 'react'
import Aside from '../components/admin/aside'
import Nav from '../components/admin/nav'

const AdminLayouts = (props) => {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AdminLTE 3 | Dashboard</title>
        {/* Google Font: Source Sans Pro */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/fontawesome-free/css/all.min.css" />
        {/* Ionicons */}
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        {/* Tempusdominus Bootstrap 4 */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
        {/* iCheck */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        {/* JQVMap */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/jqvmap/jqvmap.min.css" />
        {/* Theme style */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/dist/css/adminlte.min.css" />
        {/* overlayScrollbars */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
        {/* Daterange picker */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/daterangepicker/daterangepicker.css" />
        {/* summernote */}
        <link rel="stylesheet" href="AdminLTE-3.1.0/plugins/summernote/summernote-bs4.min.css" />
        <div className="wrapper">
          {/* Preloader */}
         
          {/* Navbar */}
        <Nav />
          {/* /.navbar */}
          {/* Main Sidebar Container */}
        <Aside />
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
                {props.children}
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer">
            <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.1.0
            </div>
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div>
        {/* ./wrapper */}
        {/* jQuery */}
        {/* jQuery UI 1.11.4 */}
        {/* Resolve conflict in jQuery UI tooltip with Bootstrap tooltip */}
        {/* Bootstrap 4 */}
        {/* ChartJS */}
        {/* Sparkline */}
        {/* JQVMap */}
        {/* jQuery Knob Chart */}
        {/* daterangepicker */}
        {/* Tempusdominus Bootstrap 4 */}
        {/* Summernote */}
        {/* overlayScrollbars */}
        {/* AdminLTE App */}
        {/* AdminLTE for demo purposes */}
        {/* AdminLTE dashboard demo (This is only for demo purposes) */}
      </div>
    );
}

export default AdminLayouts
