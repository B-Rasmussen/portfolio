import "./App.css";
import { SetStateAction, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
// import ExperimentPage from "./pages/ExperimentPage";
import SocialMediaBar from "./components/SocialMediaBar";
import Intro from "./components/Intro";
import LanguagesList from "./components/LanguagesList";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Landing");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };

    const renderPage = () => {
        switch (currentScreen) {
            case "Landing":
                return (
                    <div>
                        <Intro />
                        <LanguagesList />
                        <LandingPage />
                    </div>
                );
            case "Projects":
                return <ProjectsPage />;
            // case "Experiment":
            //     return <ExperimentPage />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };
    return (
        <>
            <div className="nav-bar-container">
                <NavBar navigateTo={navigateTo} />
                <SocialMediaBar />
            </div>
            {renderPage()}
        </>
    );
}

export default App;
