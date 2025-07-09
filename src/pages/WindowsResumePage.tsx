import { useState } from "react";
import Button from "../components/Button";
import WindowsTextFile from "../components/WindowsTextFile";
import WindowsFolder from "../components/WindowsFolder";

import "../style/windowsResumeStyle.css";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

function WindowsResumePage() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [isWorkHistoryFolderOpen, setIsWorkHistoryFolderOpen] = useState(false);

    const handleOpenWorkHistory = () => {
        setIsWorkHistoryFolderOpen(true);
    };

    const closeWorkHistoryFolder = () => {
        setIsWorkHistoryFolderOpen(false);
    };

    const handleDoubleClick = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    return (
        <div className="windows-container">
            <div onClick={handleDoubleClick} className="text-file-container">
                <div className="text-file-icon" />
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
                <text>example.txt</text>
            </div>
            <div onClick={handleOpenWorkHistory}>
                <div className="text-file-icon" />
                <text>Work History</text>
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

            {isWorkHistoryFolderOpen && (
                <WindowsFolder
                    closeWorkHistoryFolder={closeWorkHistoryFolder}
                    folderTitle="Work History"
                />
            )}

            {isWindowOpen && (
                <WindowsTextFile
                    closeWindow={closeWindow}
                    companyName="acti"
                    location="lb"
                    startDate="2020-01-01"
                    endDate="2021-01-01"
                    bulletPoints={["a", "b", "c"]}
                    className="text-file-window"
                />
            )}
            <div id="computer-model">🍎 Brandotosh</div>
        </div>
    );
}
export default WindowsResumePage;
