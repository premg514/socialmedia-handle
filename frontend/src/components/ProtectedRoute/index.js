import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    // Otherwise, render the child components (e.g., the dashboard)
    return children;
};

export default ProtectedRoute;
