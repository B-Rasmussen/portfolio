import { useState } from "react";
import Button from "../components/Button";

import "../style/windowsResumeStyle.css";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

function WindowsResumePage() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleDoubleClick = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <div className="windows-container">
            <div
                onClick={handleDoubleClick}
                className="text-file-container"
            >
                <div className="text-file-icon" />
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
                <text>example.txt</text>
            </div>
            <div>
                <Button
                    buttonName={"Linked In"}
                    imageName={linkedinDarkMode}
                    onButtonPressed={() => {
                        window.open(
                            "https://www.linkedin.com/in/brandonrasmussen91/",
                            "_blank"
                        );
                    }}
                    isSocialMediaLink={true}
                />
            </div>
            <div>
                <Button
                    buttonName={"GitHub"}
                    imageName={githubDarkMode}
                    onButtonPressed={() => {
                        window.open("https://github.com/B-Rasmussen", "_blank");
                    }}
                    isSocialMediaLink={true}
                />
            </div>
            {isWindowOpen && (
                // each job history item will have a section that shows what technologies were used
                // ex activision will have javascript, react, react native
                // sqa squared will have python, java, javascript
                // moving mindz will have javascript, php, mysql
                <div
                    className="text-file-window"
                >
                    <h2>This is a new window inside the current window!</h2>
                    <p>Content of your new window goes here.</p>
                    <div className="title-bar-button" onClick={closeWindow}>
                        <div className="title-bar-icon" id="close-icon">X</div>
                        <div className="title-bar-icon" id="minimize-icon">_</div>
                        <div className="title-bar-icon" id="maximize-icon">□</div>
                    </div>
                </div>
            )}
            <div id="computer-model">🍎 Brandotosh</div>
        </div>
    );
}
export default WindowsResumePage;
