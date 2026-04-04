import React from "react";


export default function Error(){
    return(
        <div>
            <div></div>
            <h2>404</h2>
            <span>Page Not Found</span>
            <p>This route doesn't exist. In React Router, I added a fallback Route without a path to catch all unmatched URLs.</p>
            <button>  <span>Go Home</span></button>
        </div>
    )
}