import React from "react";

const NameInput = ({ name, setName, error, handleSubmit, setError }) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-screen gap-2 mx-auto font-dancing">
      <p className="text-2xl md:text-6xl font-bold font-dancing text-pink-600">
        Enter Your Name
      </p>
      <input
        type="text"
        className="w-full p-2 text-2xl border-pink-500 text-black bg-transparent border-b-2 focus-visible:outline-none"
        placeholder="Name"
        onChange={(e) => {
          setError(false);
          setName(e.target.value);
        }}
      />
      {error && <p className="text-red-600">Please Enter Your Name</p>}
      <button
        onClick={handleSubmit}
        className="w-full p-2 text-xl font-bold text-pink-700 bg-pink-100 rounded-md active:bg-pink-200 focus:outline-none hover:border-pink-700"
      >
        Enter
      </button>
    </div>
  );
};

export default NameInput;
