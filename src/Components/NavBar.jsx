import React from "react";
import logo from "../../public/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
  <div className="w-full border-b-2 border-[#edf0ee] h-18 flex items-center justify-between px-6 ">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faFingerprint} className="text-[#6467f2]" /> <span className="text-[#6467f2] font-[800] text-xl" >AuthApp</span>
      </div>

      <div className="flex gap-6">
        <button className=" font-bold bg-[#eaebfb] text-[#6467f2] px-4 py-2 rounded-lg cursor-pointer">Home</button>
        <button className="font-bold text-[#6c7381] cursor-pointer">About</button>
      </div>

      <div className="flex gap-4">
        <button className=" rounded-lg px-3 py-1.5 font-[700] text-[#747980] cursor-pointer transition-all   hover:bg-[#edf0ee] hover:text-black">
          login
        </button>
        <button className="border rounded-lg px-3 py-1.5 font-[700] text-white bg-[#6467f2] cursor-pointer ">
          Sign Up
        </button>

      </div>
    </div>
  );
}
