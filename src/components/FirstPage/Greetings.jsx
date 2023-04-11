import React from "react";
import bride from "../../assets/SVG/bride.svg";
import groom from "../../assets/SVG/groom.svg";
import Map from "./Map";
import Message from "./Message";
import Times from "./Times";
const Greetings = ({ name }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="">
        <div className="mt-2 text-6xl text-pink-700 font-dancing">
          Greetings
        </div>
        <Message name={name} />
        <div className="absolute z-10 top-3/4 md:top-2/3 -translate-y-[12.5rem] md:-translate-y-20  w-full">
          <Times />
          <Map />
        </div>
      </div>

      <div className="flex absolute w-full bottom-0 justify-between px-4 mb-2">
        <div className="relative">
          <img
            src={bride}
            alt="Bride"
            className="w-24 transform -scale-x-100 md:w-44"
          />
          <div className="absolute -top-12 p-2 bg-pink-400 rounded-md -right-28">
            Hello Hridoy 💖
            <div
              className="absolute left-0 w-0 h-0 
  border-t-[10px] border-t-transparent
  border-r-[25px] border-r-pink-400
  border-b-[10px] border-b-transparent -rotate-[32deg] -translate-x-3 -translate-y-1"
            ></div>
          </div>
        </div>
        <div className="relative">
          <img
            src={groom}
            alt="Groom"
            className="w-24 transform -scale-x-100 md:w-44"
          />
          <div className="absolute top-0 p-2 bg-pink-400 rounded-md -left-28">
            Hello Muna 💖
            <div
              className="absolute right-0 w-0 h-0 
  border-t-[10px] border-t-transparent
  border-r-[25px] border-r-pink-400
  border-b-[10px] border-b-transparent rotate-[212deg] translate-x-3 -translate-y-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
