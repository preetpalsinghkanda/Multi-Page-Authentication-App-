import React, { children, useEffect } from "react";
import { useState } from "react";
import AuthApp from "./Context";
import { useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function AuthProvider({ children }) {
  const { isSignedIn, user } = useUser();

  const [page, setPage] = useState("home");

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");

  const [confirmPass, setConfirmPass] = useState("");
  const [confirmPassErr, setConfirmPassErr] = useState("");

  const [isHidePass, setIsHidePass] = useState(true);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState(true);

  const [isValidSignupDetails, setIsValidSignupDetails] = useState(false);

  const [isUserAlreadyExist, setIsUserAlreadyExist] = useState(false);

  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const [isInvalid, setIsInvalid] = useState(false);

  const[isHamburgerEnabled , setIsHamburgerEnabled] = useState(false)

  const createdDate = new Date(user?.createdAt);

  const FinalDate = createdDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (location.pathname === "/signup") {
      setPage("signup");
    } else if (location.pathname === "/login") {
      setPage("login");
    } else if (location.pathname === "/dashboard") {
      setPage("dashboard");
    } else if (location.pathname === "/about") {
      setPage("about");
    } else if (location.pathname === "/profile") {
      setPage("profile");
    }
  }, [location.pathname]);

  function checkUserDetails() {
    const isValid =
      !nameErr &&
      !emailErr &&
      !passErr &&
      !confirmPassErr &&
      name &&
      email &&
      pass &&
      confirmPass;

    if (isValid && pass === confirmPass) {
      setIsValidSignupDetails(true);
    } else {
      setIsValidSignupDetails(false);
    }
  }

  useEffect(() => {
    checkUserDetails();
  }, [
    name,
    email,
    pass,
    confirmPass,
    nameErr,
    emailErr,
    passErr,
    confirmPassErr,
  ]);

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

  function PassCheck(value) {
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    } else {
      return "";
    }
  }

  function confirmPassCheck(value) {
    if (value.trim().length === 0) {
      return "Please confirm your password";
    } else if (pass.trim() !== value.trim()) {
      return "Passwords do not match";
    } else {
      return "";
    }
  }

  const firstLastLetter = (name = "") => {
    const words = name.trim().split(" ");
    return words.length === 1
      ? words[0][0]
      : words[0][0] + words[words.length - 1][0];
  };

  return (
    <AuthApp.Provider
      value={{
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
        pass,
        setPass,
        PassCheck,
        passErr,
        setPassErr,
        setConfirmPass,
        confirmPass,
        confirmPassCheck,
        confirmPassErr,
        setConfirmPassErr,
        isHidePass,
        setIsHidePass,
        isHideConfirmPass,
        setIsHideConfirmPass,
        isValidSignupDetails,
        setIsValidSignupDetails,
        isUserAlreadyExist,
        setIsUserAlreadyExist,
        isInvalid,
        setIsInvalid,
        isLoading,
        setIsLoading,
        FinalDate,
        firstLastLetter,
        isHamburgerEnabled,
        setIsHamburgerEnabled,
      }}
    >
      {children}
    </AuthApp.Provider>
  );
}
