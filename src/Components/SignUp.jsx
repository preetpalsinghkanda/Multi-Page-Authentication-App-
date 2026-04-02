import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen ,faEye } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  return (
    <div className="flex  justify-center items-center flex-col gap-8">
      <div className="flex border flex-col justify-center items-center gap-4">
        <div className=" flex  px-2.5 py-3  rounded-full bg-[#eaebf9]">
          <FontAwesomeIcon
            icon={faUserPen}
            className="text-[20px] text-[#6467f2]"
          />
        </div>

        <div className="flex border flex-col justify-center items-center">
          <h2 className="font-[700] text-[26px]">Create an account</h2>
          <p>Sign up to get started</p>
        </div>
      </div>

      <div className="rounded bg-white px-8 py-8 border-2 flex gap-4 flex-col rounded-2xl border-[#d6d6d6]">
        <div className="flex flex-col gap-4 min-w-[24vw]">


          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[14px] text-[#000] font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jack luios"
              className= " border border-[#d6d6d6] h-10 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[14px] text-[#000] font-bold">
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="you@gmail.com"
              className= " border border-[#d6d6d6] h-10 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-[14px] text-[#000] font-bold">
              Password
            </label>
            <div className="border border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]"><input
              type="text"
              id="pass"
              placeholder="Min 6 characters"
              className= " w-full"
            />
            <FontAwesomeIcon icon={faEye} className="text-[12px] cursor-pointer text-[#7b7a7a]" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirm-password" className="text-[14px] text-[#000] font-bold">
              Confirm password
            </label>
            <div className="border border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]"><input
              type="text"
              id="pass"
              placeholder="Repeat your password "
              className= " w-full"
            />
            <FontAwesomeIcon icon={faEye} className="text-[12px] cursor-pointer text-[#7b7a7a]" />
            </div>
          </div>



        </div>
        <button className="w-full border cursor-pointer">Create account</button>
        <p className="">
          Already have an account? <span>Sign in</span>
        </p>
      </div>
    </div>
  );
}
