import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "animate.css";

function App() {
  const [count, setCount] = useState(0);

  // let showInAppInstallPromotion = () => <ShowPrompt />;
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
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + PWA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {supportsPWA && (
        <button
          className="fixed-btn animate__animated animate__backInRight"
          onClick={(e) => onClick(e)}
        >
          Install
        </button>
      )}
    </div>
  );
}

export default App;
