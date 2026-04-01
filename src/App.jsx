import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
