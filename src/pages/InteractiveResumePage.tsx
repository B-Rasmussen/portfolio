import { useState } from "react";
import Button from "../components/Button";
import WindowsFolder from "../windows_components/WindowsFolder";

import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

import "../style/interactiveResumeStyle.css";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

function InteractiveResumePage() {
    const [isWorkHistoryFolderOpen, setIsWorkHistoryFolderOpen] =
        useState(false);
    const [isProjectsFolderOpen, setIsProjectsFolderOpen] = useState(false);
    const [isLinkedInRecommendationsOpen, setIsLinkedInRecommendationsOpen] =
        useState(false);

    const openWorkHistory = () => {
        setIsWorkHistoryFolderOpen(true);
    };

    const closeWorkHistoryFolder = () => {
        setIsWorkHistoryFolderOpen(false);
    };

    const openPersonalProjects = () => {
        setIsProjectsFolderOpen(true);
    };

    const closePersonalProjectsFolder = () => {
        setIsProjectsFolderOpen(false);
    };

    const openLinkedInRecommendations = () => {
        setIsLinkedInRecommendationsOpen(true);
    };

    const closeLinkedInRecommendations = () => {
        setIsLinkedInRecommendationsOpen(false);
    };

    return (
        <div className="windows-container">
            {/* <div className="text-file-container">
                <div className="text-file-icon" />
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
                <text>example.txt</text>
            </div> */}
            {/* <div className="clock">
                {new Date().toLocaleTimeString([], {
                    weekday: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div> */}
            <div id="welcome-info">
                <div>Click the "text" icon to open folder</div>
                <div>Click the folder name to move</div>
                <div>FYI: clicking anywhere but the minimize button</div>
                <div>on the child files of each folder will close it</div>
            </div>
            <div onClick={openWorkHistory} className="folder-container">
                <div className="folder-icon" />
                <text className="folder-name">Work History</text>
            </div>
            <div onClick={openPersonalProjects} className="folder-container">
                <div className="folder-icon" />
                <text className="folder-name">Personal Projects</text>
            </div>
            <div
                onClick={openLinkedInRecommendations}
                className="folder-container"
            >
                <div className="folder-icon" />
                <div className="folder-name">
                    <text>LinkedIn</text>
                    <br />
                    <text>Recommendations</text>
                </div>
            </div>
            <div className="folder-container">
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
            <div className="folder-container">
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
                    closeFolder={closeWorkHistoryFolder}
                    folderTitle="Work History"
                    data={workHistory}
                />
            )}

            {isProjectsFolderOpen && (
                <WindowsFolder
                    closeFolder={closePersonalProjectsFolder}
                    folderTitle="Personal Projects"
                    data={personalProjects}
                />
            )}

            {isLinkedInRecommendationsOpen && (
                <WindowsFolder
                    closeFolder={closeLinkedInRecommendations}
                    folderTitle="LinkedIn Recommendations"
                    data={linkedinRecommendations}
                />
            )}

            <div id="computer-model">🍎 Brandotosh</div>
        </div>
    );
}
export default InteractiveResumePage;
