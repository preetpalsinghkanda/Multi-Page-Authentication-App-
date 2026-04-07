import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function Hero() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const { page, setPage } = useContext(AuthApp);

  const pagesName = [
    { title: "Home", path: "/", desc: "This Page", page: "home" },
    { title: "About", path: "/about", desc: "App info page", page: "about" },
    {
      title: "Login",
      path: "/login",
      desc: "Authentication form",
      page: "login",
    },
    {
      title: "Sign Up",
      path: "/signup",
      desc: "Registration Form",
      page: "signup",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      desc: "Protected - login required",
      page: "dashboard",
    },
    {
      title: "Profile",
      path: "/profile",
      desc: "Your account details",
      page: "profile",
    },
    {
      title: "Order / ORD-123",
      path: "/order/ORD-123",
      desc: "Dynamic: orderId route",
    },
    { title: "404 Page", path: "not-found", desc: "Fallback route" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center py-25">
        <div className="text-[#6467f2] mb-8 flex items-center gap-2 px-10 text-[16px] font-[600] py-1 rounded-full bg-[#eaebf9]"><FontAwesomeIcon icon={faCode}  /><span>Learn + Code + Repeat</span></div>
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
          {!isSignedIn ? (
            <>
              <button
                onClick={() => {
                  setPage("signup");
                  navigate("/signup");
                }}
                className="border rounded-lg px-5 py-3 font-[700] text-white bg-[#6467f2] cursor-pointer"
              >
                Get Started →
              </button>

              <button
                onClick={() => {
                  setPage("login");
                  navigate("/login");
                }}
                className="rounded-lg px-5 py-3 font-[700] text-black cursor-pointer border border-[#e5e7eb] hover:bg-[#edf0ee]"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setPage("dashboard");
                navigate("/dashboard");
              }}
              className="border rounded-lg px-5 py-3 font-[700] text-white bg-[#6467f2] cursor-pointer"
            >
              Go to Dashboard <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>

      <section className="border-t-2 border-[#edf0ee] py-16 flex flex-col items-center justify-center">
        <h2 className="text-[25px] font-[700] w-fit mx-auto">
          Explore the Pages
        </h2>

        <div className="grid gap-x-12 gap-y-6 grid-cols-3 py-8">
          {pagesName.map((page, index) => (
            <div
              key={index}
              onClick={() => {
                if (
                  isSignedIn &&
                  (page.path === "/login" || page.path === "/signup")
                ) {
                  navigate("/dashboard");
                  setPage("dashboard");
                } else {
                  navigate(page.path);
                  setPage(page.page);
                }
              }}
              className="cursor-pointer px-5 py-4 w-72 bg-white rounded-lg"
            >
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
