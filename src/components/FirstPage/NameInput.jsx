import React from "react";

const NameInput = ({ name, setName, error, handleSubmit, setError }) => {
  return (
    <div className="bg-gradient-to-t to-pink-200/50 from-pink-300/50 flex flex-col items-center justify-center w-1/2 h-screen gap-2 mx-auto font-dancing">
      <input
        type="text"
        className="w-full p-2 text-2xl text-black bg-transparent border-b-2 focus-visible:outline-none"
        placeholder="Enter your name"
        onChange={(e) => {
          setError(false);
          setName(e.target.value);
        }}
      />
      {error && <p className="text-red-600">Please Enter Your Name</p>}
      <button
        onClick={handleSubmit}
        className="w-full p-2 text-xl font-bold text-pink-700 bg-white rounded-md active:bg-slate-100 focus:outline-none hover:border-pink-700"
      >
        Enter
      </button>
    </div>
  );
};

export default NameInput;
