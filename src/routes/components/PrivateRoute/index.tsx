import Home from 'pages/Home';
import React, { Component } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';

export interface IRouteFC {
  isAuthenticated?: boolean;
  component?: any;
  restProps?: any;
}

const PrivateRoute: React.FC<IRouteFC> = (props) => {
  const { isAuthenticated, component, ...restProps } = props;
  const navigate = useNavigate();
  console.log(component);
  //   return <Route
  //     {...restProps}
  //     // element={isAuthenticated ? Component : navigate("/")}
  //   ></Route>;
  return <Route path="/test" element={<Home />} />;
};

export default PrivateRoute;
