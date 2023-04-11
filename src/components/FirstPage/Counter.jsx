import React from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => (
  <span className="font-bangla text-2xl md:text-4xl">
    বিবাহিত জীবনের জন্য প্রার্থনা কাম্য!
  </span>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        <p className="font-ekusheySaraswatii text-3xl md:text-4xl">সময় বাকি</p>
        {days} দিন {hours} ঘণ্টা {minutes} মিনিট {seconds} সেকেন্ড
      </span>
    );
  }
};

const Counter = () => {
  return (
    <div>
      <Countdown
        date={Date.now() + (Date.parse("2023-04-28") - Date.now())}
        renderer={renderer}
      />
    </div>
  );
};

export default Counter;
