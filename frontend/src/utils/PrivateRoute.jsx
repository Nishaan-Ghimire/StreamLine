import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({path,element})=>{

    const isAuthenticated = true;

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" />
    );

};

export default PrivateRoute;