import React from "react";
import logo from "../../public/download.jpg";

export default function NavBar() {
  return (
  <div className="w-full border h-18 flex items-center justify-between px-6">
      <div className="flex items-center">
        <img className="h-10" src={logo} alt="" /> <span>AuthApp</span>
      </div>

      <div className="flex gap-6">
        <button className="">Home</button>
        <button className="">About</button>
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
