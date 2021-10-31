import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }
    //observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])


    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(true));
    }

    return {
        user,
        logout,
        signInWithGoogle,
        isLoading
    }
}

export default useFirebase;