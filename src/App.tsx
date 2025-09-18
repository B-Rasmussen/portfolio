import { SetStateAction, useState, useEffect } from "react";

// PAGES
import WorkHistoryPage from "./pages/WorkHistoryPage";
import ProjectsPage from "./pages/ProjectsPage";
import DesktopResumePage from "./pages/DesktopResumePage";
import MobileResumePage from "./pages/MobileResumePage";

// NAVBAR COMPONENTS
import StaticNavBar from "./components/StaticNavBar";
import SocialMediaBar from "./components/SocialMediaBar";

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
    const [currentScreen, setCurrentScreen] = useState("WorkHistory");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };
    const renderPage = () => {
        switch (currentScreen) {
            case "WorkHistory":
                return <WorkHistoryPage />;
            case "Projects":
                return <ProjectsPage />;
            case "DesktopResume":
                return <DesktopResumePage navigateTo={navigateTo} />;
            case "MobileResume":
                return <MobileResumePage navigateTo={navigateTo} />;
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
                    : currentScreen === "MobileResume"
                        ? "mobile-resume"
                        : "static-resume"
            }
        >
            {currentScreen === "DesktopResume" ||
            currentScreen === "MobileResume" ? null : (
                <div className="nav-bar-container">
                    <StaticNavBar
                        navigateTo={navigateTo}
                        isMobileDevice={isMobileDevice()}
                    />
                    <SocialMediaBar />
                </div>
            )}
            {renderPage()}
        </div>
    );
}

export default App;
