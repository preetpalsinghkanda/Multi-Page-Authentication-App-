import React, { children } from "react";
import { useState } from "react";
import AuthApp from "./Context";

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

const[page , setPage] = useState("home")




  

  return (
    <AuthApp.Provider value={{ isLogin, setIsLogin,   page , setPage }}>
      {children}
    </AuthApp.Provider>
  );
}
