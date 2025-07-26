import "./App.css";
import { SetStateAction, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import WindowResumePage from "./pages/WindowsResumePage";
// import NavBar from "./components/NavBar";
import SocialMediaBar from "./components/SocialMediaBar";
// import LanguagesList from "./components/LanguagesList";
import Button from "./components/Button";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Windows");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };

    const renderPage = () => {
        switch (currentScreen) {
            case "Landing":
                return (
                    <div>
                        {/* <LanguagesList /> */}
                        <LandingPage />
                    </div>
                );
            case "Projects":
                return <ProjectsPage />;
            case "Windows":
                return <WindowResumePage />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };
    return (
        <>
            {currentScreen == "Windows" ? (
                <Button
                    buttonName={"In a rush? Click here for a non interactive version!"}
                    onButtonPressed={() => navigateTo("Landing")}
                />
            ) : (
                <div className="nav-bar-container">
                    {/* <NavBar navigateTo={navigateTo} /> */}
                    <SocialMediaBar />
                </div>
            )}
            {renderPage()}
        </>
    );
}

export default App;
