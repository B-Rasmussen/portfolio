import { useState } from "react";
import WindowsFolder from "../windows_components/WindowsFolder";

import InteractiveNavBar from "../windows_components/InteractiveNavBar";
import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";
import "../style/interactiveResumeStyle.css";

// TODO: move useState logic to it's own file

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function InteractiveResumePage({ navigateTo }: NavBarProps) {
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
        <div>
            <InteractiveNavBar navigateTo={navigateTo} />

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
        </div>
    );
}
export default InteractiveResumePage;
