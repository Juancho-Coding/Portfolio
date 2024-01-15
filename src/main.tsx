import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainTheme from "./Themes/MainTheme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MainTheme>
            <App />
        </MainTheme>
    </React.StrictMode>
);
