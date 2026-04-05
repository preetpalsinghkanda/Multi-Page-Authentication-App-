import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserCheck , faArrowRightFromBracket , faBoxOpen  , faHashtag} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";


export default function OrderProgress(){
    const{setPage} = useContext(AuthApp)
    return(
         <div className="flex m-auto mx-70 py-10 flex-col gap-8 ">
      <div
        className="text-[#848a96] flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("home")}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[16px]" />
        <button className="cursor-pointer">Back to Home</button>
      </div>

      <div className=" rounded-2xl   ">
        
        <div className="bg-[#ffe2cd] flex items-center gap-5 py-6 rounded-t-2xl px-8">
          <div className="w-18 h-18 rounded-full bg-[#ff6900] text-white flex items-center justify-center text-[24px] font-[800] ">
            <FontAwesomeIcon icon={faBoxOpen} className="text-[30px]" />
          </div>
          <div className="flex flex-col items-start ">
            <h3 className="text-black font-[700] text-2xl">Order Details</h3>
            <p className="text-xs">ORD-001</p>
            
          </div>
        </div>

        <div className=" py-3 px-8 bg-white rounded-b-2xl">
        
        

        <div className="flex flex-col my-5 gap-4">

          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faHashtag} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">URL Parameter — orderId</h3>
              <h2 className="text-[#6467f2] font-bold text-sm">ORD-001</h2>
            </span>
          </div>





          <div>
            <h4>Order Status</h4>
            

          </div>

         



          <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
            <FontAwesomeIcon icon={faUserCheck} className="text-[#6b7280]" />
            <span className="flex flex-col items-start">
              <h3 className="text-[#6b7280] text-[14px] font-bold">User ID</h3>
              <h2 className="text-black font-bold">user_1775384966950</h2>
            </span>
          </div>
        
        </div>
        <hr className="border-1 border-[#a4a4a464]" />

        <button className=" flex items-center gap-2 px-4 rounded-lg py-1.5 mt-5 bg-[#fdecec] text-[#ef4374] font-bold"> <FontAwesomeIcon icon={faArrowRightFromBracket} />Sign out</button>

      </div>


      </div>

      
    </div>
  );
}

