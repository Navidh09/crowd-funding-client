import React from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "nyon",
    age: 29,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
