import React, { children } from "react";
import { useState } from "react";
import AuthApp from "./Context";




export default function AuthProvider({children}){


 

    const[isLogin , setIsLogin] = useState(true)

 



    
    return(
        <AuthApp.Provider value={{isLogin , setIsLogin}}>
            {children}
        </AuthApp.Provider>
    )
}


