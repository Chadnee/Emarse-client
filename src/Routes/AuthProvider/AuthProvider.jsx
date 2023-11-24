import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const googleLogin = () => {
        setLoading(true)
      return signInWithPopup(auth, googleProvider);
    }

    const signedIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signedUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signedOut = () => {
        return signOut(auth);
    }

    const updateProfileUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            console.log('current user:', currentUser);
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const getInfo = {
        user,
        googleLogin,
        signedIn,
        signedUp,
        signedOut,
        updateProfileUser,
        loading
    }
    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;