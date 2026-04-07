import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center inset-0 w-full h-[95vh] absolute ">
     <lord-icon
    src="https://cdn.lordicon.com/itqqkpub.json"
    trigger="loop"
    delay="0"
    colors="primary:#6467f2"
    style={{width:100,height:100}}>
    </lord-icon>    
    </div>
  );
}