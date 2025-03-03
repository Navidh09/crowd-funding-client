import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    googleLogin,
    loginUser,
    setErrorMessage,
    errorMessage,
    registerUser,
    setUser,
    user,
    logOutUser,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
