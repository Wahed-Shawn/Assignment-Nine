import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' />

};

export default PrivateRoute;