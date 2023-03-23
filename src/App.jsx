import { useState } from "react";
import "./App.css";
import "animate.css";
import Greetings from "./components/FirstPage/Greetings";
import NameInput from "./components/FirstPage/NameInput";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const handleSubmit = () => {
    if (Boolean(name.length)) {
      setError(false);

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      myPromise
        .then(() => {
          setFadeOut(true);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 500);
          });
        })
        .then(() => {
          setPageNum(1);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col justify-between w-screen h-screen bg-gradient-to-t to-pink-200 from-pink-300">
      {pageNum === 0 ? (
        <div className={fadeOut && "animate__animated animate__fadeOutUp"}>
          <NameInput
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
            error={error}
            setError={setError}
          />
        </div>
      ) : pageNum === 1 ? (
        <div className={pageNum === 1 && "animate__animated animate__fadeInUp"}>
          <Greetings />
        </div>
      ) : null}
    </div>
  );
}

export default App;
