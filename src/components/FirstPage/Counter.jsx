import React from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
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
