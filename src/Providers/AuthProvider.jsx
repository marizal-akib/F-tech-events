/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
    const googleProvider = new GoogleAuthProvider();

    const googlePopupSignIn = () =>{
        setLoading(true)
      return  signInWithPopup(auth, googleProvider)
    }


    const createUser= ( email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user State Changed",currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }


    },[])



    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googlePopupSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;