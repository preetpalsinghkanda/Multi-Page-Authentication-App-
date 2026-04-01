import React from "react";
import logo from '../../public/download.jpg'


export default function NavBar(){
    return(
        <div className="w-full border h-20 flex items-center justify-evenly">


            <div className="flex items-center"><img className="h-14" src={logo} alt="" /> <span>AuthApp</span></div>

            <div className="flex gap-6">
                <button className="">Home</button>
                <button className="">About</button>
            </div>
            
           <div className="flex gap-4">
            <button className="border rounded px-4 py-2">login</button>
            <button className="border rounded px-4 py-2">Sign Up</button>
           </div>
        </div>
    )
}