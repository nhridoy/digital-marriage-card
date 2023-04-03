import React from "react";
import bride from "../../assets/SVG/bride.svg";
import groom from "../../assets/SVG/groom.svg";
import Message from "./Message";

const Greetings = ({ name }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="mt-2 text-6xl text-pink-700 font-dancing">Greetings</div>
      <Message name={name} />
      <div className="flex justify-between px-4 mb-2">
        <div className="relative">
          <img
            src={bride}
            alt="Bride"
            className="w-24 transform -scale-x-100 md:w-44"
          />
          <div className="absolute top-0 p-2 bg-white rounded-md -right-28">
            Hello There
            <div
              className="absolute left-0 w-0 h-0 
  border-t-[10px] border-t-transparent
  border-r-[25px] border-r-white
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
          <div className="absolute top-0 p-2 bg-white rounded-md -left-28">
            Let's Get Married
            <div
              className="absolute right-0 w-0 h-0 
  border-t-[10px] border-t-transparent
  border-r-[25px] border-r-white
  border-b-[10px] border-b-transparent rotate-[212deg] translate-x-3 -translate-y-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
