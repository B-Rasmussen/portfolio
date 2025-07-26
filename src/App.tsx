import "./App.css";
import { SetStateAction, useState, useEffect } from "react";
import WorkHistoryPage from "./pages/WorkHistoryPage";
import ProjectsPage from "./pages/ProjectsPage";
import InteractiveResumePage from "./pages/InteractiveResumePage";
import NavBar from "./components/NavBar";
import SocialMediaBar from "./components/SocialMediaBar";
// import LanguagesList from "./components/LanguagesList";
import Button from "./components/Button";

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
            console.log(`Detected mobile device: ${keyword}`);
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
                return <InteractiveResumePage />;
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
        <>
            {currentScreen === "InteractiveResume"  ? (
                <div
                    style={{
                        color: "White",
                        backgroundColor: "green",
                        padding: "5px",
                        borderRadius: "50px",
                        position: "absolute",
                        bottom: "0.3%",
                        left: "10%",
                        zIndex: 1000,
                    }}
                >
                    <Button
                        buttonName={"In a rush? Static version here!"}
                        onButtonPressed={() => navigateTo("WorkHistory")}
                    />
                </div>
            ) : (
                <div className="nav-bar-container">
                    <NavBar navigateTo={navigateTo} />
                    <SocialMediaBar />
                </div>
            )}
            {renderPage()}
        </>
    );
}

export default App;
