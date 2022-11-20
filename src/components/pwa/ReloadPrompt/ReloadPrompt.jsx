import React from "react";
import "./ReloadPrompt.css";
import { IoReloadOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <>
      {(offlineReady || needRefresh) && (
        <div className="fixed z-20 bottom-0 left-0 right-0 max-w-fit mx-auto text-center text-gray-800 bg-white flex justify-center items-center gap-2 px-4 py-3 mb-4 rounded-md shadow-md shadow-white/25 animate__animated animate__bounceInUp">
          <div className="font-medium">
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {needRefresh && (
            <button
              className="bg-gray-200 hover:bg-gray-300 border-none focus:outline-none px-3 py-2 rounded-md"
              type="button"
              aria-label="Reload"
              onClick={() => updateServiceWorker(true)}
            >
              <IoReloadOutline />
            </button>
          )}
          <button
            className="bg-gray-200 hover:bg-gray-300 border-none focus:outline-none px-3 py-2 rounded-md"
            type="button"
            aria-label="Close"
            onClick={() => close()}
          >
            <CgClose />
          </button>
        </div>
      )}
    </>
  );
}

export default ReloadPrompt;
