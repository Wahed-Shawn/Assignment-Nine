import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    console.log('user from authprovider:', user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        googleSignIn,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;