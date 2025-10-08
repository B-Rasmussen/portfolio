import FolderContainer from "../desktop_components/FolderContainer";
import DesktopNavBar from "../desktop_components/DesktopNavBar";
import FolderIcon from "../desktop_components/FolderIcon";
// TEXT FILES
import WorkTextFile from "../desktop_components/WorkTextFile";
import PersonalProjectTextFile from "../desktop_components/PersonalProjectsTextFile";
import LinkedInRecommendationsTextFile from "../desktop_components/LinkedInRecommendationsTextFile";
// HOOKS
import { handleOpenAndCloseFolder } from "../desktop_hooks/handleOpenAndCloseFolder";
import { handleChildWindow } from "../desktop_hooks/handleChildWindow";

import "../style/desktopResumeStyle.css";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function DesktopResumePage({ navigateTo }: NavBarProps) {
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
    } = handleOpenAndCloseFolder();

    const {
        workHistory,
        personalProjects,
        linkedinRecommendations,
        isJobWindowOpen,
        isPersonalProjectWindowOpen,
        isLinkedInRecommendationOpen,
        handleWorkHistoryOpen,
        handleProjectsOpen,
        handleRecommendationsOpen,
    } = handleChildWindow();

    return (
        <div id="interactive-resume-page">
            <DesktopNavBar navigateTo={navigateTo} />
            <FolderIcon
                onClick={openWorkHistory}
                folderName="Work History"
            />
            <FolderIcon
                onClick={openPersonalProjects}
                folderName="Personal Projects"
            />
            <FolderIcon
                onClick={openLinkedInRecommendations}
                folderName="LinkedIn Recommendations"
            />
            <iframe src="/portfolio/src/game_files/index.html" width={800} height={800}/>
            <div id="desktop-draggable-area">
                {isWorkHistoryFolderOpen && (
                    <FolderContainer
                        handleOpen={handleWorkHistoryOpen}
                        closeFolder={closeWorkHistoryFolder}
                        positionOffset={{ x: 0, y: 0 }}
                        folderTitle="Work History"
                        data={workHistory}
                    />
                )}
                {isProjectsFolderOpen && (
                    <FolderContainer
                        handleOpen={handleProjectsOpen}
                        closeFolder={closePersonalProjectsFolder}
                        positionOffset={{ x: 30, y: 30 }}
                        folderTitle="Personal Projects"
                        data={personalProjects}
                    />
                )}
                {isLinkedInRecommendationsOpen && (
                    <FolderContainer
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
export default DesktopResumePage;
