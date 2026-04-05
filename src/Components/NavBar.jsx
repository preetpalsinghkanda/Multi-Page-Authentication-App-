import React, { useContext } from "react";
import logo from "../../public/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function NavBar() {
  const { authTonggle, auth, setAuth, page, setPage } = useContext(AuthApp);
  return (
    <div className="w-full border-b-2 border-[#edf0ee] h-18 flex items-center justify-between px-6 sticky top-0  bg-white/30 backdrop-blur-md ">
      <div onClick={()=>setPage("home")} className="flex items-center gap-1 cursor-pointer ">
        <FontAwesomeIcon icon={faFingerprint} className="text-[#6467f2]" />{" "}
        <span className="text-[#6467f2] font-[800] text-xl">AuthApp</span>
      </div>

      <div className="flex gap-2">
        <button
        onClick={()=>setPage("home")}
          className={`font-bold ${
            page === "home" ? "bg-[#eaebfb] text-[#6467f2]" : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"
          } px-4 py-2 rounded-lg cursor-pointer`}
        >
          Home
        </button>
        <button
          onClick={() => setPage("about")}
          className={`font-bold text-[#6c7381] cursor-pointer ${page==="about" ? "bg-[#eaebfb] text-[#6467f2]" : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"} px-4 py-2 rounded-lg cursor-pointer `}
        >
          About
        </button>

          <button
          onClick={() => setPage("profile")}
          className={`font-bold text-[#6c7381] cursor-pointer ${page==="profile" ? "bg-[#eaebfb] text-[#6467f2]" : "text-[#6c7381] hover:text-[black] hover:bg-[#d3d8e33c]"} px-4 py-2 rounded-lg cursor-pointer `}
        >
          Profile
        </button>




      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setPage("login")}
          className={`rounded-lg px-3 py-1.5 font-[700] cursor-pointer transition-all
    ${
      page === "login"
        ? "bg-[#eaebfb] text-[#6467f2]"
        : "text-[#747980] hover:bg-[#edf0ee] hover:text-black"
    }`}
        >
          login
        </button>
        <button
          onClick={() => setPage("signup")}
          className=" rounded-lg px-3 py-1.5 font-[700] text-white bg-[#6467f2] cursor-pointer hover:bg-[#6466f2d4]"
        >
          Sign Up
        </button>
        
      </div>
    </div>
  );
}
