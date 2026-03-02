import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <DotLoader color="#21ba3b" />
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' />

};

export default PrivateRoute;