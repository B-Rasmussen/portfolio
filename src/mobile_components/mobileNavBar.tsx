import { useState, useEffect } from "react";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";
import '../style/mobileNavBarAppDockStyle.css'

export function MobileNavBar() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="mobile-nav-bar">
            <img src={linkedinDarkMode} style={{ height: "15px", paddingRight: "10px" }}/>
            <img src={githubDarkMode} style={{ height: "15px" }}/>
            {/* <div id="the-notch" /> */}
            <div id="clock">
                {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
        </div>
    );
}
