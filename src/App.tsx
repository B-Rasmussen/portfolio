import "./App.css";
import { SetStateAction, useState, useEffect } from "react";

// PAGES
import WorkHistoryPage from "./pages/WorkHistoryPage";
import ProjectsPage from "./pages/ProjectsPage";
import DesktopResumePage from "./pages/DesktopResumePage";
import MobileResumePage from "./pages/MobileResumePage";

// NAVBAR COMPONENTS
import NavBar from "./components/StaticNavBar";
import SocialMediaBar from "./components/SocialMediaBar";
// import LanguagesList from "./components/LanguagesList";

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
    const [currentScreen, setCurrentScreen] = useState("");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };
console.log('cs: ', currentScreen)
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
            setCurrentScreen("InteractiveResume");
        }
    }, []);

    return (
        <div
            id={
                currentScreen === "DesktopResume"
                    ? "interactive-resume"
                    : currentScreen === "MobileResume"
                        ? "mobile-resume"
                        : "static-resume"
            }
        >
            {currentScreen === "DesktopResume" ||
            currentScreen === "MobileResume" ? null : (
                <div className="nav-bar-container">
                    <NavBar
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
