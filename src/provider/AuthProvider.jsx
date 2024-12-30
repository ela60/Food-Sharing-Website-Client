import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Check authentication state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('state captured', currentUser?.email);

      // jwt using
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post('https://food-sharing-server-rho.vercel.app/jwt', user,{withCredentials:true})
          .then(res => {
            console.log(res.data);
            setLoading(false);
          })
      }
      else {
        axios.post('https://food-sharing-server-rho.vercel.app/logout', {}, {
          withCredentials:true
        })
          .then(res => {
            console.log('logout', res.data);
            setLoading(false);
          })
      }

      
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    googleSignIn,
    logOut,
    loading, 
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <div><span className="loading loading-bars loading-lg"></span></div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
