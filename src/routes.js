import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminRoute from "./auth/adminRoute";
import HeaderWeb from "./components/website/header";
import AdminLayouts from "./layouts/adminLayouts";
import WebsiteLayouts from "./layouts/websiteLayouts";
import AddCategory from "./pages/admin/categories/addCategory";
import EditCategory from "./pages/admin/categories/editCategory";
import ViewCategory from "./pages/admin/categories/viewCategory";
import HomeAdmin from "./pages/admin/homeAdmin";
import AddProduct from "./pages/admin/products/addProduct";
import EditProduct from "./pages/admin/products/editProduct";
import ViewProduct from "./pages/admin/products/viewProduct";
import DetaiSanPham from "./pages/website/detaiSanPham";
import HomeWebsite from "./pages/website/homeWebsite";
import LienHe from "./pages/website/lienHe";
import SanPham from "./pages/website/sanPham";
import Signin from "./pages/website/signin";
import Signup from "./pages/website/signup";

const Routes = (props) => {
  return (
            <Router>
                <Switch>
                    <Route  exact path="/admin/:path?/:path?/:path?">
                        <AdminLayouts>
                           <Switch>
                               <AdminRoute exact path="/admin" >
                                   <HomeAdmin />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewproduct">
                                   <ViewProduct {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewproduct/add">
                                   <AddProduct {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewproduct/:id/edit">
                                   <EditProduct {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewcategory">
                                   <ViewCategory {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewcategory/add">
                                   <AddCategory {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/viewcategory/:id/edit">
                                   <EditCategory {...props} />
                               </AdminRoute>
                           </Switch>
                        </AdminLayouts>
                    </Route>
                    <Route >
                        <WebsiteLayouts>
                            <Switch>
                                <Route exact path="/" >
                                    <HomeWebsite />
                                </Route>
                                <Route exact path="/san-pham">
                                    <SanPham {...props} />
                                </Route>
                                <Route exact path="/san-pham/:id/detail">
                                    <DetaiSanPham {...props} />
                                </Route>
                                <Route exact path="/lien-he" >
                                    <LienHe />
                                </Route>
                                <Route exact path="/signin">
                                    <Signin />
                                </Route>
                                <Route exact path="/signup">
                                    <Signup />
                                </Route>
                                <Route>
                                    <HeaderWeb {...props} />
                                </Route>
                            </Switch>
                        </WebsiteLayouts>
                    </Route>
                </Switch>
            </Router>
  );
};

export default Routes;
