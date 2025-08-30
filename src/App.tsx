import "./App.css";
import { SetStateAction, useState, useEffect } from "react";
import WorkHistoryPage from "./pages/WorkHistoryPage";
import ProjectsPage from "./pages/ProjectsPage";
import InteractiveResumePage from "./pages/InteractiveResumePage";
import NavBar from "./components/NavBar";
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

    const renderPage = () => {
        switch (currentScreen) {
            case "WorkHistory":
                return <WorkHistoryPage />;
            case "Projects":
                return <ProjectsPage />;
            case "InteractiveResume":
                return <InteractiveResumePage navigateTo={navigateTo} />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };

    useEffect(() => {
        if (isMobileDevice()) {
            setCurrentScreen("WorkHistory");
        } else {
            setCurrentScreen("InteractiveResume");
        }
    }, []);

    return (
        <div id={currentScreen === "InteractiveResume" ? "interactive-resume" : "static-resume"}>
            {currentScreen === "InteractiveResume" ? null : (
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
