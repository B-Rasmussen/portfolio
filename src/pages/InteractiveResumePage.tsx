import { useState } from "react";
import WindowsFolder from "../windows_components/WindowsFolder";
import InteractiveNavBar from "../windows_components/InteractiveNavBar";
import WindowsFolderIcon from "../windows_components/WindowsFolderIcon";

// DATA
import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

// TEXT FILES
import WorkTextFile from "../windows_components/WorkTextFile";
import PersonalProjectTextFile from "../windows_components/PersonalProjectsTextFile";
import LinkedInRecommendationsTextFile from "../windows_components/LinkedInRecommendationsTextFile";

import { useOpenAndCloseFolder } from "../windows_hooks/OpenAndCloseFolder";

import "../style/interactiveResumeStyle.css";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function InteractiveResumePage({ navigateTo }: NavBarProps) {
    const {
        isWorkHistoryFolderOpen,
        isProjectsFolderOpen,
        isLinkedInRecommendationsOpen,
        openWorkHistory,
        closeWorkHistoryFolder,
        openPersonalProjects,
        closePersonalProjectsFolder,
        openLinkedInRecommendations,
        closeLinkedInRecommendations,
    } = useOpenAndCloseFolder();

    const [isJobWindowOpen, setIsJobWindowOpen] = useState(
        Array(workHistory.length).fill(false)
    );

    const [isPersonalProjectWindowOpen, setIsPersonalProjectWindowOpen] =
        useState(Array(personalProjects.length).fill(false));

    const [isLinkedInRecommendationOpen, setIsLinkedInRecommendationOpen] =
        useState(Array(linkedinRecommendations.length).fill(false));

    const handleWorkHistoryOpen = (index: number) => {
        setIsJobWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleProjectsOpen = (index: number) => {
        setIsPersonalProjectWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleRecommendationsOpen = (index: number) => {
        setIsLinkedInRecommendationOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div id="interactive-resume-page">
            <InteractiveNavBar navigateTo={navigateTo} />
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
                        handleOpen={handleWorkHistoryOpen}
                        closeFolder={closeWorkHistoryFolder}
                        positionOffset={{ x: 0, y: 0 }}
                        folderTitle="Work History"
                        data={workHistory}
                    />
                )}
                {isProjectsFolderOpen && (
                    <WindowsFolder
                        handleOpen={handleProjectsOpen}
                        closeFolder={closePersonalProjectsFolder}
                        positionOffset={{ x: 30, y: 30 }}
                        folderTitle="Personal Projects"
                        data={personalProjects}
                    />
                )}
                {isLinkedInRecommendationsOpen && (
                    <WindowsFolder
                        handleOpen={handleRecommendationsOpen}
                        closeFolder={closeLinkedInRecommendations}
                        positionOffset={{ x: 60, y: 60 }}
                        folderTitle="LinkedIn Recommendations"
                        data={linkedinRecommendations}
                    />
                )}
                
                {isJobWindowOpen.map((isOpen, index) =>
                    isOpen
                        ? isJobWindowOpen[index] && (
                            <WorkTextFile
                                key={index}
                                positionOffset={{ x: 0, y: 40 * index}}
                                index={index}
                                closeWindow={() =>
                                    handleWorkHistoryOpen(index)
                                }
                                companyName={workHistory[index].companyName}
                                positionTitle={workHistory[index].positionTitle}
                                companyLogo={workHistory[index].companyLogo}
                                companyLogoAlt={
                                    workHistory[index].companyLogoAlt
                                }
                                location={workHistory[index].location}
                                startDate={workHistory[index].startDate}
                                endDate={workHistory[index].endDate}
                                langaugesUsed={
                                    workHistory[index].languagesUsed
                                }
                                bulletPoints={workHistory[index].bulletPoints}
                            />
                        )
                        : null
                )}
                {isPersonalProjectWindowOpen.map((isOpen, index) =>
                    isOpen
                        ? isPersonalProjectWindowOpen[index] && (
                            <PersonalProjectTextFile
                                key={index}
                                index={index}
                                positionOffset={{ x: 0, y: 40 * index}}
                                closeWindow={() => handleProjectsOpen(index)}
                                projectName={
                                    personalProjects[index].projectName
                                }
                                technologies={
                                    personalProjects[index].technologies
                                }
                                description={
                                    personalProjects[index].description
                                }
                                image={personalProjects[index].image}
                                imageAlt={personalProjects[index].imageAlt}
                            />
                        )
                        : null
                )}
                {isLinkedInRecommendationOpen.map((isOpen, index) =>
                    isOpen
                        ? isLinkedInRecommendationOpen[index] && (
                            <LinkedInRecommendationsTextFile
                                key={index}
                                index={index}
                                positionOffset={{ x: 0, y: 40 * index}}
                                closeWindow={() =>
                                    handleRecommendationsOpen(index)
                                }
                                person={linkedinRecommendations[index].person}
                                bodyText={
                                    linkedinRecommendations[index].bodyText
                                }
                            />
                        )
                        : null
                )}
            </div>
        </div>
    );
}
export default InteractiveResumePage;
