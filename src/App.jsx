import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Form from "./Components/Form";
import AuthApp from "./Context/Context";
import Error from "./Components/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";
import OrderProgress from "./Components/OrderProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { isLogin, auth, page } = useContext(AuthApp);
  return (
    <>
      <BrowserRouter>
        <div className="max-w-6xl mx-auto">
          <NavBar />
          <Routes>
            <Route>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />

              <Route path="/login" element={<Form
                  icon={faUser}
                  heading={"Welcome back"}
                  subH={"Sign in to your account"}
                  btn={"Sign in"}
                  formlast={"Don't have an account?"}
                  switchbtn={"Sign up"}
                />}/>
                
                <Route path="/signup" element={<Form
                  icon={faUserPen}
                  heading={"Create an account"}
                  subH={"Sign up to get started"}
                  btn={"Create account"}
                  formlast={"Already have an account?"}
                  switchbtn={"Sign in"}
                />}/>

                <Route path="/profile" element={<Profile />}/>
                <Route  path="/dashboard" element={<Dashboard />}/>
                <Route path="*" element={<Error />}/>
           
  {/*               
                
              )}
              
              
              
             

              <OrderProgress /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
