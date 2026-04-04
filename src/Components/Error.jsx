import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function Error() {
  const{setPage} = useContext(AuthApp)
  return (
    <div className="flex flex-col my-24 items-center mx-auto ">
      <div className="px-3.5 bg-[#f8e8e8] py-4.5  rounded-full flex items-center justify-center mb-6">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="text-[36px] text-[#ef4343]"
        />
      </div>
      <h2 className="text-6xl font-[800]">404</h2>
      <span className="text-xl font-[700] my-3">Page Not Found</span>
      <p className="text-[#5f5f5f] max-w-md text-center">
        This route doesn't exist. In React Router, I added a fallback Route
        without a path to catch all unmatched URLs.
      </p>
      <button onClick={()=>setPage("home")} className="bg-[#6467f2] text-white rounded-lg px-4 py-2.5 cursor-pointer mt-8">
        <FontAwesomeIcon icon={faHouse} /> <span>Go Home</span>
      </button>
    </div>
  );
}
