import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    loginUser,
    setErrorMessage,
    errorMessage,
    registerUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
