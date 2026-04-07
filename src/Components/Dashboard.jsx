import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faUser,
  faCalendar,
  faDolly,
  faBoxOpen,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@clerk/clerk-react";
import AuthApp from "../Context/Context";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const{name , email  , FinalDate } = useContext(AuthApp)
  const { user } = useUser();
const navigate = useNavigate();


  
  return (
    <div className="m-auto  mx-10  my-12 ">
      <div className="flex flex-row gap-3 items-center">
        <div className=" flex items-center justify-center h-12 w-12 rounded-full bg-[#eaebf9]">
          <FontAwesomeIcon
            icon={faLayerGroup}
            className="text-[22px] text-[#6d70f2]"
          />
        </div>
        <div>
          <h2 className="font-extrabold text-2xl">Dashboard</h2>
          <p className="text-md text-[#6b7280]">Welcome back, {user?.fullName || user?.firstName || "No Name"}!</p>
        </div>
      </div>

      <div className="w-full  my-8  flex gap-6 ">
        <div className="border border-[#d9dbde] rounded-xl bg-white flex flex-col flex-1 px-5 py-4 gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#41454d] font-[600]">User ID</h3>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span className="font-bold ">{user.id.slice(0, 15)}...</span>
        </div>
        <div className="border border-[#d9dbde] rounded-xl bg-white flex flex-col flex-1 px-5 py-4 gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#41454d] font-[600]">Member Since</h3>
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <span className="font-bold ">{FinalDate}</span>
        </div>

        <div className="border border-[#d9dbde] rounded-xl bg-white flex flex-col flex-1 px-5 py-4 gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#41454d] font-[600]">Orders</h3>
            <FontAwesomeIcon icon={faDolly} />
          </div>
          <span className="font-bold ">3</span>
        </div>
      </div>

      <div className="flex w-full gap-8 ">
        <div className=" flex flex-2 px-4 w-full  flex-col border border-[#d9dbde] rounded-xl bg-white">
          <div className="flex items-center gap-2 py-3.5 ">
            <FontAwesomeIcon icon={faBoxOpen} className="text-xl" />
            <h4 className="font-bold text-lg">Recent Orders</h4>
          </div>

          <hr className="text-[#e4e6eb]" />

          <div className="flex items-center gap-2 py-4  justify-between">
            <div>
              <h6 className="font-[600]">Digital Marketing Course</h6>
              <div className="text-xs flex items-center gap-1 text-[#6b7280]">
                <FontAwesomeIcon icon={faClock} />
                <span>2026-02-15</span>
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="px-2  rounded-full bg-[#dbfce7] text-[#008236] font-[600]">
                Delivered
              </span>
              <span onClick={()=>{navigate("/order/ORD-001")}} className="text-[#6467f2] cursor-pointer hover:underline">View</span>
            </div>
          </div>

          <hr className="text-[#e4e6eb]" />

          <div className="flex items-center gap-2 py-4  justify-between">
            <div>
              <h6 className="font-[600]">Context API Masterclass</h6>
              <div className="text-xs flex items-center gap-1 text-[#6b7280]">
                <FontAwesomeIcon icon={faClock} />
                <span>2026-03-24</span>
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="px-2  rounded-full bg-[#fef9c2] text-[#a65f00] font-[600]">
                Processing
              </span>
              <span onClick={()=>{navigate("/order/ORD-002")}} className="text-[#6467f2] cursor-pointer hover:underline">View</span>
            </div>
          </div>

          <hr className="text-[#e4e6eb]" />

          <div className="flex items-center gap-2 py-4  justify-between">
            <div>
              <h6 className="font-[600]">MERN Stack by tutedude</h6>
              <div className="text-xs flex items-center gap-1 text-[#6b7280]">
                <FontAwesomeIcon icon={faClock} />
                <span>2026-04-01</span>
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="px-2  rounded-full bg-[#dbeafe] text-[#1447e6] font-[600]">
                Shipped
              </span>
              <span onClick={()=>{navigate("/order/ORD-003")}} className="text-[#6467f2] cursor-pointer hover:underline">View</span>
            </div>
          </div>
        </div>

        <div className=" rounded-xl flex-1 py-6 px-4 bg-white border-[#d9dbde] border">
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faUser} />
            <span className="font-bold text-lg">Your Account</span>
          </div>
          <div className="flex flex-col py-2 gap-4">
            <div>
              <h6 className="text-[#6b7280] text-sm">Name</h6>
              <p className="text-md">{user?.fullName || user?.firstName || "Name notFound"}</p>
            </div>
            <div>
              <h6 className="text-[#6b7280] text-sm">Email</h6>
              <p className="text-md">{user?.primaryEmailAddress?.emailAddress || "Email notFound"}</p>
            </div>
           
          </div>
           <hr className="text-[#e4e6eb]" />
            <button onClick={()=>navigate("/profile")} className="bg-[#efeffd] text-[#7173f2] w-full my-4 py-2 rounded-lg cursor-pointer">View Profile</button>
        </div>
      </div>
    </div>
  );
}
