import React from "react";
import bride from "../../assets/SVG/bride.svg";
import groom from "../../assets/SVG/groom.svg";

const Greetings = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="mt-2 text-6xl text-pink-700 font-dancing">Greetings</div>
      <div className="flex justify-between px-4 mb-2">
        <img
          src={bride}
          alt="Bride"
          className="w-24 transform -scale-x-100 md:w-44"
        />
        <img
          src={groom}
          alt="Groom"
          className="w-24 transform -scale-x-100 md:w-44"
        />
      </div>
    </div>
  );
};

export default Greetings;
