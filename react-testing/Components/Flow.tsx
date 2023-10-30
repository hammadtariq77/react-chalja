"use client";
import React, { useState } from "react";
const Flow = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between px-5 items-center md:hidden bg-red-500 py-3 ">
        <div>logo</div>

        <div className="flex gap-2 items-center ">
          <div>
            <button className="bg-blue-600 py-2 text-sm text-white px-4">
              Connet
            </button>
          </div>
          {!open ? (
            <img
              className="w-5  h-5"
              src="/open.png"
              alt=""
              onClick={() => setOpen(true)}
            />
          ) : (
            <img
              className="w-7 h-6"
              src="/close.png"
              alt=""
              onClick={() => setOpen(false)}
            />
          )}

          {open && (
            <div className="absolute left-0  top-12 flex flex-col justify-center items-center text-2xl w-full gap-8 z-50 h-[70vh] bg-sky-400 text-black">
              <h1>home</h1>
              <h1 onClick={() => setOpen(false)}> about</h1>
              <h1 onClick={() => setOpen(false)}> sevices </h1>
              <h1 onClick={() => setOpen(false)}> contact</h1>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex px-32 items-center  text-white justify-between   text-lg  bg-orange-500 capitalize text-center">
     <div className="flex gap-x-6">
     <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
       
   
      <ul className="menu  z-30 absolute translate-x-52  w-fit rounded-box">
  
  <li>
    <details open>
      <summary>Parent</summary>
      <ul className="bg-white text-black">
        <li><a>level 2 item 1</a></li>
        <li><a>level 2 item 2</a></li>
       
      </ul>
    </details>
  </li>
  
</ul>
    

        <h1>hello</h1>
        <h1>hello</h1>
     </div>
       <div>
        <button className="bg-fuchsia-900 py-1  px-4">connect </button>
       </div>
      </div>

      
    </>
  );
};

export default Flow;
