import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faEye , faUser} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function Form(props) {


  const{isLogin , setIsLogin} = useContext(AuthApp)

  return (
    <div className="flex  justify-center items-center flex-col gap-8 my-10">
      <div className="flex  flex-col justify-center items-center gap-2">
        <div className=" flex  px-2.5 py-3  rounded-full bg-[#eaebf9]">
          <FontAwesomeIcon
            icon={props.icon}
            className="text-[20px] text-[#6467f2]"
          />
        </div>

        <div className="flex  flex-col justify-center items-center">
          <h2 className="font-[700] text-[26px]">{props.heading}</h2>
          <p className="text-[#7b7a7a]">{props.subH}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white px-8 py-8 border-[1.7px] flex gap-4 flex-col  border-[#d6d6d682]">
        <div className="flex flex-col gap-4 min-w-[24vw]">

          {!isLogin && <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[14px] text-[#000] font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jack luios"
              className=" border border-[#d6d6d6] h-10 focus:outline-0 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]"
            />
          </div>}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[14px] text-[#000] font-bold"
            >
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="you@gmail.com"
              className=" border border-[#d6d6d6] focus:outline-0 h-10 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-[14px] text-[#000] font-bold">
              Password
            </label>
            <div className="border border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]">
              <input
                type="text"
                id="pass"
                placeholder="Min 6 characters"
                className=" w-full focus:outline-0"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="text-[12px] cursor-pointer text-[#7b7a7a]"
              />
            </div>
          </div>

          {!isLogin && <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm-password"
              className="text-[14px] text-[#000] font-bold"
            >
              Confirm password
            </label>
            <div className="border border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]">
              <input
                type="text"
                id="pass"
                placeholder="Repeat your password "
                className=" w-full focus:outline-0"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="text-[12px] cursor-pointer text-[#7b7a7a]"
              />
            </div>
          </div>}

        </div>
        <button className=" my-2 w-full  cursor-pointer font-[700] py-2 rounded-[8px] bg-[#b1b3f8] text-white">
          {props.btn}
        </button>
        <p className="self-center text-[#7b7a7a] text-[16px]">
          {props.formlast}{" "}
          <span className="text-[#6467f2] cursor-pointer" onClick={()=>setIsLogin(!isLogin)}>{props.switchbtn}</span>
        </p>
      </div>
    </div>
  );
}
