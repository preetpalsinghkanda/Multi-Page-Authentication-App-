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
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Auth/ProtectedRoute";
import Loading from "./Components/Loading";
import Hamburger from "./Components/Hamburger";

function App() {
  const { auth, page, isLoading } = useContext(AuthApp);
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <Hamburger/>
        {isLoading && <Loading />}
        <Routes>
          <Route>
            <Route path="/home" element={<Hero />} />
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/login"
              element={
                <Form
                  icon={faUser}
                  heading={"Welcome back"}
                  subH={"Sign in to your account"}
                  btn={"Sign in"}
                  formlast={"Don't have an account?"}
                  switchbtn={"Sign up"}
                />
              }
            />

            <Route
              path="/signup"
              element={
                <Form
                  icon={faUserPen}
                  heading={"Create an account"}
                  subH={"Sign up to get started"}
                  btn={"Create account"}
                  formlast={"Already have an account?"}
                  switchbtn={"Sign in"}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
            <Route path="not-found" element={<Error />} />

            <Route
              path="/order/:orderId"
              element={
                <ProtectedRoute>
                  <OrderProgress />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes> 

        
      </div>
    </>
  );
}

export default App;
