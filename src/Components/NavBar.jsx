import React, { useContext } from "react";
import logo from "../../public/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function NavBar() {
  const { authTonggle , auth , setAuth} = useContext(AuthApp);
  return (
    <div className="w-full border-b-2 border-[#edf0ee] h-18 flex items-center justify-between px-6 sticky top-0  bg-white/30 backdrop-blur-md ">
      <div className="flex items-center gap-1 ">
        <FontAwesomeIcon icon={faFingerprint} className="text-[#6467f2]" />{" "}
        <span className="text-[#6467f2] font-[800] text-xl">AuthApp</span>
      </div>

      <div className="flex gap-6">
        <button className=" font-bold bg-[#eaebfb] text-[#6467f2] px-4 py-2 rounded-lg cursor-pointer">
          Home
        </button>
        <button className="font-bold text-[#6c7381] cursor-pointer">
          About
        </button>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setAuth("login")}
          className={`rounded-lg px-3 py-1.5 font-[700] cursor-pointer transition-all
    ${
      auth === "login"
        ? "bg-[#eaebfb] text-[#6467f2]"
        : "text-[#747980] hover:bg-[#edf0ee] hover:text-black"
    }`}
        >
          login
        </button>
        <button
          onClick={() => setAuth("signup")}
          className="border rounded-lg px-3 py-1.5 font-[700] text-white bg-[#6467f2] cursor-pointer hover:bg-[#6466f2d4]"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
