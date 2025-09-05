import { useState } from "react";
import WindowsFolder from "../windows_components/WindowsFolder";
import InteractiveNavBar from "../windows_components/InteractiveNavBar";
import WindowsFolderIcon from "../windows_components/WindowsFolderIcon";
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
        <div id="interactive-resume-page">
            <InteractiveNavBar navigateTo={navigateTo} />

            <div id="welcome-info">
                <div>Click the "text" icon to open folder</div>
                <div>Click the folder name to move</div>
                <div>FYI: clicking anywhere but the minimize button</div>
                <div>on the child files of each folder will close it</div>
            </div>
            <WindowsFolderIcon
                onClick={openWorkHistory}
                folderName="Work History"
            />
            <WindowsFolderIcon
                onClick={openPersonalProjects}
                folderName="Personal Projects"
            />
            <WindowsFolderIcon
                onClick={openLinkedInRecommendations}
                folderName="LinkedIn Recommendations"
            />
            <div id="desktop-draggable-area">
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
        </div>
    );
}
export default InteractiveResumePage;
