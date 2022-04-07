import useAuth from 'hooks/useAuth';
import Home from 'pages/Home';
import React, { Component } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';

export interface IRouteFC {
  isAuthenticated?: boolean;
  component?: any;
  restProps?: any;
}

function PrivateRoute({ children }: any) {
  const auth:any = useAuth();

  return auth.isAuthAdmin ? children : <Navigate to="/" />;
}

export default PrivateRoute;
