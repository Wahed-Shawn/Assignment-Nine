import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log('user from authprovider:', user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const updateProfileFunc = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('from observer:', currentUser)
        })
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        googleSignIn,
        updateProfileFunc,
        resetPassword,
        signOutUser,
        loading,
        setLoading,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;