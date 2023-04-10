import React from "react";
import Counter from "./Counter";

const Times = () => {
  return (
    <div className="bg-pink-500 md:w-1/2 mx-auto p-2 mt-4">
      <p className="font-bangla text-2xl md:text-4xl">বাকি আছে সময়</p>
      <Counter />
    </div>
  );
};

export default Times;
