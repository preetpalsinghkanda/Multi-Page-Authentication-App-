import React, { useContext } from "react";
import AuthApp from "../Context/Context";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Hamburger() {
    const navigate = useNavigate()
  const {
    setPage,
    page,
    setIsHamburgerEnabled,
    isHamburgerEnabled,
  } = useContext(AuthApp);
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();
  return (
    isHamburgerEnabled && (
      <div className="shadow-2xl border fixed top-20   my-2 mx-4 rounded-lg bg-white border-[#a4a4a42a] w-60 right-0 flex flex-col py-4 px-3 gap-2">
        <button
          onClick={() => {
            setPage("home");
            navigate("/");
            setIsHamburgerEnabled(false);
          }}
          className={`font-bold ${
            page === "home"
              ? "bg-[#eaebfb] text-[#6467f2]"
              : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"
          } px-4 py-2 rounded-lg cursor-pointer`}
        >
          Home
        </button>
        <button
          onClick={() => {
            setPage("about");
            navigate("/about");
            setIsHamburgerEnabled(false);
          }}
          className={`font-bold ${
            page === "about"
              ? "bg-[#eaebfb] text-[#6467f2]"
              : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"
          } px-4 py-2 rounded-lg cursor-pointer`}
        >
          About
        </button>

        {isSignedIn && (
          <>
            {" "}
            <button
              onClick={() => {
                setPage("dashboard");
                navigate("/dashboard");
                setIsHamburgerEnabled(false);
              }}
              className={`font-bold ${
                page === "dashboard"
                  ? "bg-[#eaebfb] text-[#6467f2]"
                  : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"
              } px-4 py-2 rounded-lg cursor-pointer`}
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setPage("profile");
                navigate("/profile");
                setIsHamburgerEnabled(false);
              }}
              className={`font-bold ${
                page === "profile"
                  ? "bg-[#eaebfb] text-[#6467f2]"
                  : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"
              } px-4 py-2 rounded-lg cursor-pointer`}
            >
              Profile
            </button>
          </>
        )}

        {!isSignedIn ? (
          <>
            <button
              onClick={() => {
                setPage("login");
                navigate("/login");
                setIsHamburgerEnabled(false);
              }}
              className={`rounded-lg px-3 py-1.5 font-[700] cursor-pointer transition-all
      ${
        page === "login"
          ? "bg-[#eaebfb] text-[#6467f2]"
          : "text-[#747980] hover:bg-[#edf0ee] hover:text-black"
      }`}
            >
              Login
            </button>

            <button
              onClick={() => {
                setPage("signup");
                navigate("/signup");
                setIsHamburgerEnabled(false);
              }}
              className="rounded-lg px-3 py-1.5 font-[700] text-white bg-[#6467f2] cursor-pointer"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <hr className="border-1 border-[#a4a4a42a]" />

            <button
              onClick={() => {
                signOut();
                setIsHamburgerEnabled(false);
              }}
              className=" justify-center cursor-pointer flex items-center gap-2 px-4 rounded-lg py-1.5 bg-[#fdecec] text-[#ef4374] font-bold"
            >
              Logout
            </button>
            
          </>
        )}
      </div>
    )
  );
}
