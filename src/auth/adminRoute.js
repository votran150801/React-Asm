import React from "react";
import { Redirect, Route } from "react-router";
import { isAuthenticate } from "../auth/index";

const AdminRoute = ({ children , ...rest }) => {
  return (
    <Route
    {...rest}
      render={() => {
        return isAuthenticate() && isAuthenticate().sub == 1 ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signin" }} />
        );
      }}
    />
  );
};

export default AdminRoute;
