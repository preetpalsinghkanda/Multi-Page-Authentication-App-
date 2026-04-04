import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";

export default function Hero() {
  const { page, setPage } = useContext(AuthApp);

  const pagesName = [
    { title: "Home", desc: "This Page" },
    { title: "About", desc: "App info page" },
    { title: "Login", desc: "Authentication form" },
    { title: "Sign Up", desc: "Registration Form" },
    { title: "Dashboard", desc: "Protected - login required" },
    { title: "Profile", desc: "Your account details" },
    { title: "Profile/42", desc: "Dynamic: userId route" },
    { title: "Order / ORD-123", desc: "Dynamic: orderId route" },
    { title: "Counter", desc: "Testable component" },
    { title: "404 Page", desc: "Fallback route" },
  ];

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
          <button
            onClick={() => setPage("signup")}
            className="border rounded-lg px-5 py-3 font-[700] text-white bg-[#6467f2] cursor-pointer "
          >{`Get Started ->`}</button>
          <button
            onClick={() => setPage("login")}
            className="rounded-lg px-5 py-3 font-[700] text-black cursor-pointer transition-all  border border-[#e5e7eb] hover:bg-[#edf0ee]"
          >
            Login
          </button>
        </div>
      </div>

      <section className="border-t-2 border-[#edf0ee] py-16 flex flex-col items-center justify-center">
        <h2 className="text-[25px] font-[700] w-fit mx-auto">
          Explore the Pages
        </h2>

        <div className="grid gap-x-12 gap-y-6 grid-cols-3 py-8">
          {pagesName.map((page, index) => (
            <div key={index} className="px-3 py-3 w-72 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h5 className="font-[600]">{page.title}</h5>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#848a96]"
                />
              </div>
              <p className="text-[14px] text-[#6b7280]">{page.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
