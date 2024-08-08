import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/authProvider';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    console.log(user)
    return user ? children : <Navigate to="/Welcome"/>;
};

export default ProtectedRoute;