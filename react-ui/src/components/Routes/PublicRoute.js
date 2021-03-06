import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isAuthentificated } from "../../redux/auth/authSelectors";

export default function PublicRoute({ component: Component, ...routeProps }) {
  const isAuth = useSelector(isAuthentificated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && routeProps.restricted ? (
          <Redirect to="/admin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
