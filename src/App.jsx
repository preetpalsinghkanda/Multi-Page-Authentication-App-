import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        {/* <Hero /> */}
        {/* <About/> */}
        <SignUp/>
      </div>
    </>
  );
}

export default App;
