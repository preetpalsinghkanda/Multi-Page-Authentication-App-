import React, { children } from "react";
import { useState } from "react";
import AuthApp from "./Context";

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const [page, setPage] = useState("home");

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  function NameCheck(value) {
    if (value.trim().length < 2) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  }

  function EmailCheck(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Enter a valid email address";
    } else {
      return "";
    }
  }

  return (
    <AuthApp.Provider
      value={{
        isLogin,
        setIsLogin,
        name,
        setName,
        page,
        setPage,
        nameErr,
        setNameErr,
        NameCheck,
        setEmail,
        email,
        emailErr,
        setEmailErr,
        EmailCheck,
      }}
    >
      {children}
    </AuthApp.Provider>
  );
}
