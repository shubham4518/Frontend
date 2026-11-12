

import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (children) => {
    const AcessToken = localStorage.getItem("AccessToken");
  return AccessToken ? children : <Navigate to="/Signin" />;
}

export default PrivateRoute