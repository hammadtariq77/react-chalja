"use client";
import React, { useState } from "react";
const Flow = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between px-5 items-center bg-red-500 py-3 ">
        <div>logo</div>

        <div className="flex gap-2 items-center">
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
    </>
  );
};

export default Flow;
