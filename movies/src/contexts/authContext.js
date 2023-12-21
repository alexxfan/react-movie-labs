import React, { useState, createContext } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [loginErr, setLoginErr] = useState(null);
  const [authErr, setAuthErr] = useState(null);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    await login(username, password).then((res) => {
      if (res.token) {
        setToken(res.token)
        setIsAuthenticated(true);
        setUserName(username);
      }
      if (!res.success) {
        setLoginErr(res.msg)
      }
    })
  };

  const register = async (username, password) => {
    return await signup(username, password).then((res) => {
      if (res.success === true) {
        return true;
      } else {
        setAuthErr(res.msg)
        return false;
      }
    });
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        authToken,
        register,
        signout,
        userName,
        authErr,
        setAuthErr,
        loginErr
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;