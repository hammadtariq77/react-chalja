"use client";
import React, { useState, useEffect } from "react";
const data = [
  {
    id: 1,
    text: "we build your dreams ",
    image:
      "https://images.unsplash.com/photo-1697257378955-47e59ac37368?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8",
  },
  {
    id: 2,
    text: "Archvis and Studio",
    image:
      "https://images.unsplash.com/photo-1693643210061-36bf373b5391?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    text: "hurry up to get discount ",
    image:
      "https://images.unsplash.com/photo-1674293626982-f945b941c1de?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMHxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8",
  },
];
const Caro = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((e) => (e === data.length - 1 ? 0 : e + 1)),
      4000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen mt-20  relative overflow-hidden">
        <div className="absolute inset-0   z-10 opacity-60  bg-black">
          </div>{" "}
        {/* Overlay for background */}
        <div
          style={{
            backgroundImage: `url(${data[slide].image})`,
          }}
          className="h-screen flex transition-all duration-500  ease-in-out   justify-center items-center w-screen bg-no-repeat bg-center bg-cover relative"
        >
          <div className="z-20 absolute   capitalize  text-center md:-mt-28 font-bold">
            <img className="w-[40vw] h-[55vh] hidden md:block mx-auto shadow-lg" src="/logo.png" alt="" />
            <h1 className="text-[5vw] text-orange-600 md:-mt-12 ">{data[slide].text}</h1>
            <p className="text-gray-300 w-2/3 mx-auto font-semibold tracking-wider mt-3 text-sm sm:text-md md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.   Libero tempora aspernatur vero cumque accusantium maiores.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caro;
