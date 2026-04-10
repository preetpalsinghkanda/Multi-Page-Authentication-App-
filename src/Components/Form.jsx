import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faEye,
  faUser,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import AuthApp from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "@clerk/clerk-react";
import { useSignIn } from "@clerk/clerk-react";

export default function Form(props) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    signIn,
    isLoaded: isSignInLoaded,
    setActive: setActiveSignIn,
  } = useSignIn();

  const navigate = useNavigate();

  const {
    auth,
    authTonggle,
    page,
    setPage,
    name,
    setName,
    setNameErr,
    nameErr,
    NameCheck,
    emailErr,
    email,
    setEmail,
    EmailCheck,
    setEmailErr,
    setPass,
    pass,
    PassCheck,
    passErr,
    setPassErr,
    confirmPass,
    setConfirmPass,
    confirmPassCheck,
    setConfirmPassErr,
    confirmPassErr,
    setIsHidePass,
    isHidePass,
    isHideConfirmPass,
    setIsHideConfirmPass,
    isValidSignupDetails,
    setIsUserAlreadyExist,
    isUserAlreadyExist,
    setIsInvalid,
    isInvalid,
    setIsLoading,
  } = useContext(AuthApp);

// in this i used AI for loading
  
  return (
    <div className="flex  justify-center items-center flex-col gap-8 my-10">
      <div className="flex  flex-col justify-center items-center gap-2">
        <div className=" flex  px-2.5 py-3  rounded-full bg-[#eaebf9]">
          <FontAwesomeIcon
            icon={props.icon}
            className="text-[20px] text-[#6467f2]"
          />
        </div>

        <div className="flex  flex-col justify-center items-center">
          <h2 className="font-[700] text-[26px]">{props.heading}</h2>
          <p className="text-[#7b7a7a]">{props.subH}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white px-8 py-8 border-[1.7px] md:min-w-100 min-w-[90vw]  flex gap-4 flex-col  border-[#d6d6d682]">
        <div className="flex flex-col gap-4 min-w-[24vw]">
          {isInvalid && page === "login" && (
            <div className="mx-auto px-3 py-2 border bg-[#fdecec] border-[#facaca] rounded-lg">
              <p className="text-sm text-[#ef4343]">
                Invalid email or password.
              </p>
            </div>
          )}

          {isUserAlreadyExist && (
            <div className="mx-auto px-3 py-2 border bg-[#fdecec] border-[#facaca] rounded-lg">
              <p className="text-sm text-[#ef4343]">
                An account with this email already exists.
              </p>
            </div>
          )}

          {page === "signup" && (
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-[14px] text-[#000] font-bold"
              >
                Full Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                  NameCheck(e.target.value);
                }}
                value={name}
                type="text"
                id="name"
                placeholder="Jack luios"
                className={` ${nameErr ? "focus:border-[#ef4c5b] border-[#ef4c5b]" : ""} focus:border-[#b1b3f8] focus:border-2 border border-[#d6d6d6] h-10 focus:outline-0 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]`}
              />
              {nameErr && (
                <p className="text-[12px] px-1 text-[#ef4c5b]">
                  Name must be at least 2 characters
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[14px] text-[#000] font-bold"
            >
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr(EmailCheck(e.target.value));
                setIsInvalid(false);
              }}
              type="text"
              id="email"
              placeholder="you@gmail.com"
              className={` ${emailErr ? "focus:border-[#ef4c5b] border-[#ef4c5b]" : ""} focus:border-[#b1b3f8] focus:border-2 border border-[#d6d6d6] focus:outline-0 h-10 rounded-lg px-3 placeholder:font-[500] bg-[#f9fafb]`}
            />
            {emailErr && (
              <p className="text-[12px] px-1 text-[#ef4c5b]">{emailErr}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-[14px] text-[#000] font-bold">
              Password
            </label>
            <div
              className={` gap-2 ${passErr ? "focus-within:border-[#ef4c5b] border-[#ef4c5b]" : ""} border focus-within:border-[#b1b3f8] focus-within:border-2  border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]`}
            >
              <input
                onChange={(e) => {
                  setPass(e.target.value);
                  setPassErr(PassCheck(e.target.value));
                  setIsInvalid(false);
                }}
                type={isHidePass ? "password" : "text"}
                id="pass"
                placeholder="Min 8 characters"
                className="w-full focus:outline-0"
                value={pass}
              />
              <FontAwesomeIcon
                onClick={() => setIsHidePass(!isHidePass)}
                icon={isHidePass ? faEye : faEyeSlash}
                className="text-[12px] cursor-pointer text-[#7b7a7a]"
              />
            </div>
            {passErr && (
              <p className="text-[12px] px-1 text-[#ef4c5b]">{passErr}</p>
            )}
          </div>

          {page === "signup" && (
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirm-password"
                className="text-[14px] text-[#000] font-bold"
              >
                Confirm password
              </label>
              <div className="gap-2 border focus-within:border-[#b1b3f8] focus-within:border-2 border-[#d6d6d6] h-10 rounded-lg items-center flex px-3 placeholder:font-[500] bg-[#f9fafb]">
                <input
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                    setConfirmPassErr(confirmPassCheck(e.target.value));
                  }}
                  value={confirmPass}
                  type={isHideConfirmPass ? "password" : "text"}
                  id="pass"
                  placeholder="Repeat your password "
                  className=" w-full focus:outline-0"
                />
                <FontAwesomeIcon
                  onClick={() => setIsHideConfirmPass(!isHideConfirmPass)}
                  icon={isHideConfirmPass ? faEye : faEyeSlash}
                  className="text-[12px] cursor-pointer text-[#7b7a7a]"
                />
              </div>

              {confirmPassErr && (
                <p className="text-[12px] px-1 text-[#ef4c5b]">
                  {confirmPassErr}
                </p>
              )}
            </div>
          )}
        </div>

        <div id="clerk-captcha"></div>
        <button
          onClick={async () => {
            // signup
            if (page === "signup") {
              if (!isLoaded || !signUp) return;
              setIsLoading(true);
              try {
                const result = await signUp.create({
                  emailAddress: email,
                  password: pass,
                  firstName: name,
                });

                await setActive({
                  session: result.createdSessionId,
                });

                navigate("/dashboard");
              } catch (err) {
                const message = err.errors?.[0]?.message;
                if (message.includes("taken")) {
                  setIsUserAlreadyExist(true);
                } else {
                  alert(message);
                }
              } finally {
                setIsLoading(false); 
              }
            }

            // login
            if (page === "login") {
              setIsLoading(true);
              try {
                if (!isSignInLoaded) return;

                const result = await signIn.create({
                  identifier: email,
                  password: pass,
                });

                await setActiveSignIn({
                  session: result.createdSessionId,
                });

                navigate("/dashboard");
              } catch (err) {
                setIsInvalid(true);
              } finally {
                setIsLoading(false); 
              }
            }
          }}
          disabled={page === "signup" ? !isValidSignupDetails : !email || !pass}
          className=" disabled:bg-[#b1b3f8] my-2 w-full  cursor-pointer font-[700] py-2 rounded-[8px]  bg-[#6467f2] text-white"
        >
          {props.btn}
        </button>
        <p className="self-center text-[#7b7a7a] text-[16px]">
          {props.formlast}{" "}
          <span
            className="text-[#6467f2] cursor-pointer"
            onClick={() => {
              if (page === "login") {
                setPage("signup");
                navigate("/signup");
                setIsInvalid(false);
                
              } else {
                setPage("login");
                navigate("/login");
                setIsUserAlreadyExist(false);
              }
            }}
          >
            {props.switchbtn}
          </span>
        </p>
      </div>
    </div>
  );
}
