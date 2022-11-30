import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import UseCheckRole from '../../CustomHook/UseCheckRole/UseCheckRole';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, isloading] = UseCheckRole(user?.email)
    const location = useLocation();

    if (loading || isloading) {
        return <h3>Loading</h3>
    }

    if (user && role === 'admin') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;