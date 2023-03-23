import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/poppins";
import "@fontsource/dancing-script";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import InstallButton from "./components/pwa/InstallButton/InstallButton";
import ReloadPrompt from "./components/pwa/ReloadPrompt/ReloadPrompt";

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ReloadPrompt />
    {/* <InstallButton /> */}
  </React.StrictMode>
);
