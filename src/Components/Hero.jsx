import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-30">
      <h1 className="text-[54px] font-[800] text-base/16">Multi-Page Auth App <span className="w-fit mx-auto block  text-[#6467f2]">Built for Learning</span></h1>
     <p className="max-w-xl mx-auto text-center font-[600] text-[18px] my-8 text-[#6b7280]">
  A complete demonstration of client-side routing, user authentication with Context API, protected pages, dynamic routes, and component testing with React Testing Library.
</p>

<div className="flex gap-5"><button className="border rounded-lg px-5 py-3 font-[700] text-white bg-[#6467f2] cursor-pointer ">{`Get Started ->`}</button><button className="rounded-lg px-5 py-3 font-[700] text-black cursor-pointer transition-all  border border-[#e5e7eb] hover:bg-[#edf0ee]">Login</button></div>

<section className="border-t-2">

</section>

    </div>
  );
}
