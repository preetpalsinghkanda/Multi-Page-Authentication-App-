import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Form from "./Components/Form";
import AuthApp from "./Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faEye , faUser} from "@fortawesome/free-solid-svg-icons";

function App() {

  const{isLogin , auth}= useContext(AuthApp)
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        {/* <Hero /> */}
        {/* <About/> */}
        
        {auth==="login" ? ( <Form icon={faUser} heading={"Welcome back"} subH={"Sign in to your account"} btn={"Sign in"} formlast={"Don't have an account?"} switchbtn={"Sign up"}/>) : (<Form icon={faUserPen} heading={"Create an account"} subH={"Sign up to get started"} btn={"Create account"} formlast={"Already have an account?"} switchbtn={"Sign in"}/>)}
        
        
      </div>
    </>
  );
}

export default App;
