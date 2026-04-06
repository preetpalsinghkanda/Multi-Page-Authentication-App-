import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUserCheck,
  faArrowRightFromBracket,
  faBoxOpen,
  faHashtag,
  faCircleCheck,
  faClock,
  faCalendar,
  faTruck,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function OrderProgress() {
  const { setPage } = useContext(AuthApp);

  const steps = [
    { label: "Order Placed", status: "completed", icon: faCircleCheck },
    { label: "Processing", status: "completed", icon: faClock },
    { label: "Shipped", status: "pending", icon: faTruck },
    { label: "Delivered", status: "pending", icon: faBox },
  ];
  return (
    <div className="flex m-auto mx-70 py-10 flex-col gap-8 ">
      <div
        className="text-[#848a96] flex items-center gap-2 cursor-pointer"
        onClick={() => setPage("dashboard")}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[16px]" />
        <button className="cursor-pointer">Back to Dashboard</button>
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
                <h3 className="text-[#6b7280] text-[14px] font-bold">
                  URL Parameter — orderId
                </h3>
                <h2 className="text-[#6467f2] font-bold text-sm">ORD-001</h2>
              </span>
            </div>

            <div className="max-w-sm  px-3 pt-3">
              <h2 className="text-xl font-semibold mb-6">Order Status</h2>

              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={index} className="flex items-start mb-8 relative">
                      <div
                        className={`z-10 flex items-center justify-center w-8 h-8 rounded-full 
        ${
          step.status === "completed"
            ? "bg-green-100 text-green-600"
            : "bg-gray-100 text-gray-400"
        }`}
                      >
                        <FontAwesomeIcon icon={Icon} className="w-4 h-4" />
                      </div>

                      <div className="ml-4">
                        <p
                          className={`font-medium ${
                            step.status === "completed"
                              ? "text-black"
                              : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </p>

                        {step.status === "completed" && (
                          <p className="text-sm text-gray-500">Completed</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center px-3  py-3 rounded-xl  w-full gap-4 bg-[#f3f3f487]">
              <FontAwesomeIcon icon={faCalendar} className="text-[#6b7280]" />
              <span className="flex flex-col items-start">
                <h3 className="text-[#6b7280] text-[14px] font-bold">
                  Estimated Delivery
                </h3>
                <h2 className="text-black font-bold">Thursday, April 9</h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
