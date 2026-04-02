import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        {/* <Hero /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
