import React, { children } from "react";
import { useState } from "react";
import AuthApp from "./Context";

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const [auth, setAuth] = useState("signup");

  function authTonggle() {
    if (auth === "signup") {
      setAuth("login");
    } else {
      setAuth("signup");
    }
  }

  return (
    <AuthApp.Provider value={{ isLogin, setIsLogin, auth, setAuth , authTonggle }}>
      {children}
    </AuthApp.Provider>
  );
}
