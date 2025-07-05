import "./App.css";
import { SetStateAction, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import WindowResumePage from "./pages/WindowsResumePage";
import NavBar from "./components/NavBar";
// import ExperimentPage from "./pages/ExperimentPage";
import SocialMediaBar from "./components/SocialMediaBar";
import LanguagesList from "./components/LanguagesList";

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
                        <LanguagesList />
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
            {/* {currentScreen == "Landing" ? <Hero /> : null} */}
            {currentScreen == "Windows" ? null : (
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

/*
 *******************************************************************************
 * This is a simple HTML5 canvas drawing of a desert sunset with Joshua trees. *
 *******************************************************************************
 */

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <title>Desert Sunset with Joshua Trees</title>
//   <style>
//     canvas {
//       display: block;
//       margin: 0 auto;
//       background: linear-gradient(to top, #EDC9Af, #FF4500); /* fallback */
//     }
//   </style>
// </head>
// <body>
//   <canvas id="desertCanvas" width="800" height="400"></canvas>

// </body>
// </html>
