import { useState, useEffect } from "react";

// PAGES
import DesktopResumePage from "./pages/DesktopResumePage";
import MobileResumePage from "./pages/MobileResumePage";

import "./App.css";

function isMobileDevice() {
    const mobileKeywords = [
        "Android",
        "webOS",
        "iPhone",
        "iPad",
        "iPod",
        "BlackBerry",
        "Windows Phone",
        "IEMobile",
        "Opera Mini",
    ];

    for (const keyword of mobileKeywords) {
        if (navigator.userAgent.includes(keyword)) {
            return true;
        }
    }
    return false;
}

function App() {
    const [currentScreen, setCurrentScreen] = useState("DesktopResume");
    const renderPage = () => {
        switch (currentScreen) {
            case "DesktopResume":
                return <DesktopResumePage />;
            case "MobileResume":
                return <MobileResumePage />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };

    useEffect(() => {
        if (isMobileDevice()) {
            setCurrentScreen("MobileResume");
        } else {
            setCurrentScreen("DesktopResume");
        }
    }, []);
    return (
        <div
            id={
                currentScreen === "DesktopResume"
                    ? "desktop-resume"
                    : "mobile-resume"
            }
        >
            {renderPage()}
        </div>
    );
}

export default App;
