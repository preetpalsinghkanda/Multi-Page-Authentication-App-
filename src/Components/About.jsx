import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faInfo,
  faA,
  faB,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AuthApp from "../Context/Context";

export default function About() {
  const{setPage}=useContext(AuthApp)
  return (
    <div className="flex m-auto mx-40 py-15 flex-col">
      <div className="text-[#848a96] flex items-center gap-2 cursor-pointer" onClick={()=>setPage("home")}>
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[16px]" />
        <button className="">Back to Home</button>
      </div>

      <div className="flex py-8 flex-col items-start">
        <div className="flex items-center justify-center gap-4">
          <FontAwesomeIcon
            icon={faInfo}
            className="p-2 bg-[#eaebf9] rounded-full text-[20px] text-[#6467f2]"
          />
          <h2 className="text-4xl font-bold ">About This Project</h2>
        </div>
        <p className="py-8 text-xl">
          This is a multi-page React application built as a student Project
          demonstrating three core concepts of modern frontend development.
        </p>

        <div className="flex flex-col gap-8">
          <section className=" py-12 px-6  rounded-xl bg-white">
            <h4 className="font-bold text-xl mb-8">Project Overview</h4>

            <div className="flex flex-col gap-8 ">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faA}
                  className="p-2  bg-[#dbeafe] rounded-full text-[16px] text-[#155dfc]"
                />
                <div>
                  <h5 className="text-[20px] font-[600]">
                    React Router — Navigation & Dynamic Routing
                  </h5>
                  <p className="text-[#62666c] py-3">
                    Client-side routing with wouter, BrowserRouter equivalent,
                    active NavLinks, dynamic URL parameters with useParams(),
                    and a 404 fallback route.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faB}
                  className="p-2  bg-[#dbfce7] rounded-full text-[16px] text-[#15ae6a]"
                />
                <div>
                  <h5 className="text-[20px] font-[600]">
                    Authentication System with Context API
                  </h5>
                  <p className="text-[#62666c] py-3">
                    Global auth state using React Context, login/signup forms
                    with validation, protected routes, user session with
                    localStorage persistence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faC}
                  className="p-2  bg-[#f3e8ff] rounded-full text-[16px] text-[#9810fa]"
                />
                <div>
                  <h5 className="text-[20px] font-[600]">
                    React Router — Navigation & Dynamic Routing
                  </h5>
                  <p className="text-[#62666c] py-3">
                    Client-side routing with wouter, BrowserRouter equivalent,
                    active NavLinks, dynamic URL parameters with useParams(),
                    and a 404 fallback route.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6  rounded-xl bg-white">
            <h4 className="font-bold text-xl mb-6">Tech Stack</h4>
            <ul className="list-disc px-10 text-lg marker:text-[#6467f2] text-[#6b7284]">
              <li>React Js</li>
              <li>React Context API</li>
              <li>Tailwind CSS</li>
              <li>unknown</li>
              <li>unknown</li>
              <li>unknown</li>
              <li>unknown</li>
              <li>unknown</li>
            </ul>
          </section>

          <section className="py-12 px-6  rounded-xl bg-white">
            <h4 className="font-bold text-xl mb-6">
              Dynamic Routes Demonstrated
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 rounded p-1.5 text-sm bg-[#f0f2f4a5] px-4 text-[#62666c]">
                <span className="text-[#7667f2] font-[700]">
                  {"'/profile/:userId'"}
                </span>
                - View any user by ID
              </div>
              <div className="flex gap-2 rounded p-1.5 text-sm bg-[#f0f2f4a5] px-4 text-[#62666c]">
                <span className="text-[#7667f2] font-[700]">
                  {"'/order/:orderId'"}
                </span>
                - View order details by ID
              </div>
            </div>
            <div></div>
          </section>

          <section className="py-4 px-4 rounded-xl bg-white">
            <div className="flex items-center gap-2 text-[#62666c]"><FontAwesomeIcon icon={faGithub}/><p>Built as a learning exercise for modern React development patterns.</p></div>
          </section>
        </div>
      </div>
    </div>
  );
}
