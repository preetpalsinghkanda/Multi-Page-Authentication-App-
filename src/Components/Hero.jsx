import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center py-30">
        <h1 className="text-[54px] font-[800] text-base/16">
          Multi-Page Auth App{" "}
          <span className="w-fit mx-auto block  text-[#6467f2]">
            Built for Learning
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-center font-[600] text-[18px] my-8 text-[#6b7280]">
          A complete demonstration of client-side routing, user authentication
          with Context API, protected pages, dynamic routes, and component
          testing with React Testing Library.
        </p>

        <div className="flex gap-5">
          <button className="border rounded-lg px-5 py-3 font-[700] text-white bg-[#6467f2] cursor-pointer ">{`Get Started ->`}</button>
          <button className="rounded-lg px-5 py-3 font-[700] text-black cursor-pointer transition-all  border border-[#e5e7eb] hover:bg-[#edf0ee]">
            Login
          </button>
        </div>
      </div>

      <section className="border-t-2 border-[#edf0ee] py-16 border flex flex-col items-center justify-center" >
        <h2 className="text-[25px] font-[700] w-fit mx-auto">
          Explore the Pages
        </h2>
        <div className="grid gap-4.5 grid-cols-3">
          <div className="border">
            <div className="flex items-center justify-between border">
              <h5>Home</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>This Page</p>
          </div>
          <div>
            <div className="flex items-center justify-between border">
              <h5>About</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>App info page</p>
          </div>
          <div>
            <div className="flex items-center justify-between border">
              <h5>login</h5>
               <FontAwesomeIcon icon={faArrowRight} />
              
            </div>
            <p>Authentication form</p>
          </div>
          <div>
           <div className="flex items-center justify-between border">
              <h5>Sign Up</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Registartion Form</p>
          </div>
          <div>
          <div className="flex items-center justify-between border">
              <h5>Dashboard</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Protected - login required</p>
          </div>
          <div>
            <div className="flex items-center justify-between border">
              <h5>Profile</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Your account details</p>
          </div>
          <div>
            <div className="flex items-center justify-between border">
              <h5>Profile/42</h5>
               <FontAwesomeIcon icon={faArrowRight} />
              
            </div>
            <p>Dynamic:userld route</p>
          </div>
          <div>
            <div className="flex items-center justify-between border">
              <h5>Order / ORD-123</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Dynamic:orderld route</p>
          </div>
          <div>
           <div className="flex items-center justify-between border">
              <h5>Counter</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Testable component</p>
          </div>
          <div>
           <div className="flex items-center justify-between border">
              <h5>404 Page</h5>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p>Fallback route</p>
          </div>
        </div>
      </section>
    </div>
  );
}
