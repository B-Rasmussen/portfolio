import "./App.css";
import { SetStateAction, useState } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
    const [currentScreen, setCurrentScreen] = useState("Landing");
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const navigateTo = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };

    const renderPage = () => {
        switch (currentScreen) {
            case "Landing":
                return <LandingPage navigateTo={navigateTo} />;
            // case "Projects":
            //     return <ProjectsPage />;
            default:
                return <div>Oops something went wrong</div>;
        }
    };
    return <>{renderPage()}</>;
}

export default App;
