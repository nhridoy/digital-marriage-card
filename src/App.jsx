import { useEffect, useState } from "react";
import "./App.css";
import "animate.css";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Greetings from "./components/FirstPage/Greetings";
import NameInput from "./components/FirstPage/NameInput";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    const audio = new Audio("/assets/Soft Romantic.mp3");
    audio.loop = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Audio started playing
          setPlaying(true);
        })
        .catch((error) => {
          // Autoplay was prevented
          // Show a "Play" button to allow the user to start playing the audio
        });
    }
  }, []);
  const handlePlayButtonClick = () => {
    const audio = new Audio("/assets/Soft Romantic.mp3");
    audio.loop = true;
    audio.play();
    setPlaying(true);
  };

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
    <div className="flex flex-col justify-between w-screen h-screen bg-mobile md:bg-desktop bg-cover bg-no-repeat bg-center to-pink-200 from-pink-300">
      <Confetti numberOfPieces={pageNum ? 40 : 0} gravity={0.05} />
      <div className={`relative z-20 ${playing && "hidden"}`}>
        <button
          onClick={handlePlayButtonClick}
          className="absolute m-4 left-0 bg-pink-400 text-pink-700 border-pink-700 text-center p-4"
        >
          &#9658;
          <div className="absolute top-0 p-2 bg-white rounded-md -right-28">
            Play Music
            <div
              className="absolute left-0 w-0 h-0 
  border-t-[10px] border-t-transparent
  border-r-[25px] border-r-white
  border-b-[10px] border-b-transparent -rotate-[32deg] -translate-x-3 -translate-y-1"
            ></div>
          </div>
        </button>
      </div>
      {pageNum === 0 ? (
        <div
          className={(" ", fadeOut && "animate__animated animate__fadeOutUp")}
        >
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
          <Greetings name={name} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
