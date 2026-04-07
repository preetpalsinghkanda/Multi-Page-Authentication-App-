import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faUser , faEnvelope , faCalendar , faUserCheck , faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

export default function Profile() {
 
  const{name , email  , FinalDate , firstLastLetter}=useContext(AuthApp);
     const { user } = useUser();
  const{signOut} = useClerk();
    const navigate = useNavigate()
    const{setPage}=useContext(AuthApp)
  return (
    <div className="flex m-auto mx-70 py-10 flex-col gap-8 ">
      
      <div
        className="text-[#848a96] flex items-center gap-2 cursor-pointer"
        onClick={() => {setPage("home"); navigate("/")}}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[16px]" />
        <button className="cursor-pointer">Back to Home</button>
      </div>

      <div className=" rounded-2xl   ">
        <div className="bg-[#e1e1fc] flex items-center gap-6 py-10 rounded-t-2xl px-8">
          <div className="w-20 h-20 rounded-full bg-[#6467f2] text-white flex items-center justify-center text-[24px] font-[800] ">
            {firstLastLetter}
          </div>
          <div className="flex flex-col items-start ">
            <h3 className="text-black font-[700] text-2xl">{name}</h3>
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-[#6f7b88] text-[14px]">
                {email}
              </h5>
              <span className="bg-[#d2d2fc] text-[#7373da] text-[12px] px-2 rounded-full">
                Authenticated User
              </span>
            </div>
          </div>
        </div>

        <div className=" py-6 px-8 bg-white rounded-b-2xl">
        {" "}
        <h4 className="font-bold text-[17px]" >Account Details</h4>

        <div className="flex flex-col my-5 gap-4">

          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faUser} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">Full Name</h3>
              <h2 className="text-black font-bold">{name}</h2>
            </span>
          </div>

          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">Email Address</h3>
              <h2 className="text-black font-bold">{email}</h2>
            </span>
          </div>

          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faCalendar} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">Member Since</h3>
              <h2 className="text-black font-bold">{FinalDate}</h2>
            </span>
          </div>

          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faUserCheck} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">User ID</h3>
              <h2 className="text-black font-bold">{user.id}</h2>
            </span>
          </div>
        
        </div>
        <hr className="border-1 border-[#a4a4a464]" />

        <button onClick={()=> signOut()} className="cursor-pointer flex items-center gap-2 px-4 rounded-lg py-1.5 mt-5 bg-[#fdecec] text-[#ef4374] font-bold"> <FontAwesomeIcon icon={faArrowRightFromBracket} />Sign out</button>

      </div>


      </div>

      
    </div>
  );
}
