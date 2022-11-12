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
    <div className="ReloadPrompt-container animate__animated animate__bounceInUp">
      <div className="ReloadPrompt-toast">
        <div className="ReloadPrompt-message">
          {offlineReady ? (
            <span>App ready to work offline</span>
          ) : (
            <span>
              New content available, click on reload button to update.
            </span>
          )}
        </div>
        <button
          className="ReloadPrompt-toast-button"
          type="button"
          aria-label="Reload"
          onClick={() => updateServiceWorker(true)}
        >
          <IoReloadOutline />
        </button>
        <button
          className="ReloadPrompt-toast-button"
          type="button"
          aria-label="Close"
          onClick={() => close()}
        >
          <CgClose />
        </button>
      </div>
      {/* {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
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
              className="ReloadPrompt-toast-button"
              onClick={() => updateServiceWorker(true)}
            >
              <IoReloadOutline />
            </button>
          )}
          <button className="ReloadPrompt-toast-button" onClick={() => close()}>
            <IoAddCircleOutline />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default ReloadPrompt;
