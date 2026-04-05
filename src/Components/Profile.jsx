import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faUser} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div className="flex m-auto mx-70 py-15 flex-col gap-8">
      <div
        className="text-[#848a96] flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("home")}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[16px]" />
        <button className="">Back to Home</button>
      </div>

      <div className="border rounded-2xl h-[40rem] ">
        <div className="bg-[#e1e1fc] flex items-center gap-6 py-10 border px-8">
          <div className="w-20 h-20 rounded-full bg-[#6467f2] text-white flex items-center justify-center text-[24px] font-[800] ">
            PK
          </div>
          <div className="flex flex-col items-start ">
            <h3 className="text-black font-[700] text-2xl">Piyush Kushwa</h3>
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-[#6f7b88] text-[14px]">
                lightliger2@gmail.com
              </h5>
              <span className="bg-[#d2d2fc] text-[#7373da] text-[12px] px-2 rounded-full">
                Authenticated User
              </span>
            </div>
          </div>
        </div>

        <div className="border py-6 px-8">
        {" "}
        <h4 className="font-bold text-[17px]" >Account Details</h4>

        <div className="flex my-5">

          <div className="flex items-center px-3 border w-full gap-4 bg-[#fafafb]">
            <FontAwesomeIcon icon={faUser} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">Full Name</h3>
              <h2>Piyush Kushwa</h2>
            </span>
          </div>
          <div>
            <span>
              <h3>
                <h2></h2>
              </h3>
            </span>
          </div>
          <div>
            <span>
              <h3>
                <h2></h2>
              </h3>
            </span>
          </div>
          <div>
            <span>
              <h3>
                <h2></h2>
              </h3>
            </span>
          </div>
        </div>
      </div>


      </div>

      
    </div>
  );
}
