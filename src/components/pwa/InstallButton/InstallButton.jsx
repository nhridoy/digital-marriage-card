import React, { useEffect, useState } from "react";
import "./InstallButton.css";

const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    if (
      !window.navigator.standalone === true ||
      !window.matchMedia("(display-mode: standalone)").matches
    ) {
      window.addEventListener("beforeinstallprompt", handler);
    }

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    if (promptInstall) {
      promptInstall.prompt();
    } else {
      return;
    }
  };
  return (
    <>
      {/* Button With the Help of CSS */}
      {/* <button
        id="installInstructions"
        className="fixed-btn z-10 animate__animated animate__backInRight"
        onClick={(e) => onClick(e)}
      >
        Install
      </button> */}

      {/* Button without the help of CSS */}
      {supportsPWA && (
        <button
          className="fixed-btn z-10 animate__animated animate__backInRight"
          onClick={(e) => onClick(e)}
        >
          Install
        </button>
      )}
    </>
  );
};

export default InstallButton;
