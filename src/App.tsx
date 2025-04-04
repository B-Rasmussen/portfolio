import "./App.css";
import { SetStateAction, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import ExperimentPage from "./pages/ExperimentPage";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Landing");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };

    const renderPage = () => {
        switch (currentScreen) {
            case "Landing":
                return <LandingPage />;
            case "Projects":
                return <ProjectsPage />;
            case "Experiment":
                return <ExperimentPage />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };
    return (
        <>
            <NavBar navigateTo={navigateTo}/>
            {renderPage()}
        </>
    );
}

export default App;
