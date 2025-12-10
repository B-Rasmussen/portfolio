import FolderContainer from "../desktop_components/FolderContainer";
import DesktopNavBar from "../desktop_components/DesktopNavBar";
import FolderIcon from "../desktop_components/FolderIcon";
import { useTranslation } from "react-i18next";
// TEXT FILES
import WorkTextFile from "../desktop_components/WorkTextFile";
import PersonalProjectTextFile from "../desktop_components/PersonalProjectsTextFile";
import LinkedInRecommendationsTextFile from "../desktop_components/LinkedInRecommendationsTextFile";
// HOOKS
import { handleOpenAndCloseFolder } from "../desktop_hooks/handleOpenAndCloseFolder";
import { handleChildWindow } from "../desktop_hooks/handleChildWindow";
import { useWorkHistory } from "../data/workHistory";
import { usePersonalProjects } from "../data/personalProjects";
import { useLinkedinRecommendations } from "../data/linkedinRecommendations";

import "../style/desktopResumeStyle.css";

function DesktopResumePage() {
    const { t } = useTranslation();
    const workHistory = useWorkHistory();
    const personalProjects = usePersonalProjects();
    const linkedinRecommendations = useLinkedinRecommendations();
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
        workHistoryData,
        personalProjectsData,
        linkedinRecommendationsData,
        isJobWindowOpen,
        isPersonalProjectWindowOpen,
        isLinkedInRecommendationOpen,
        handleWorkHistoryOpen,
        handleProjectsOpen,
        handleRecommendationsOpen,
    } = handleChildWindow();

    return (
        <div id="interactive-resume-page">
            <DesktopNavBar
            // navigateTo={navigateTo}
            />
            <FolderIcon
                onClick={openWorkHistory}
                folderName={t("folder.workHistory")}
            />
            <FolderIcon
                onClick={openPersonalProjects}
                folderName={t("folder.personalProjects")}
            />
            <FolderIcon
                onClick={openLinkedInRecommendations}
                folderName={t("folder.linkedinReviews")}
            />
            {/* <button
                style={{
                    marginTop: "1%",
                    marginLeft: "92%",
                    marginRight: "1%",
                    position: "relative",
                    alignItems: "center",
                    cursor: "pointer",
                    marginBottom: "10px",
                }}
                id="open-game-button"
                onClick={() =>
                    window.open(
                        `/portfolio/src/game_files/godot.html`,
                        "_blank",
                    )
                }
            >
                <img src="" />
                <div>Zombie Alpha</div>
                <div>Opens in new tab</div>
            </button> */}
            <div id="desktop-draggable-area">
                {isWorkHistoryFolderOpen && (
                    <FolderContainer
                        handleOpen={handleWorkHistoryOpen}
                        closeFolder={closeWorkHistoryFolder}
                        positionOffset={{ x: 0, y: 0 }}
                        folderTitle={t("folder.workHistory")}
                        folderType="Work History"
                        data={workHistory}
                    />
                )}
                {isProjectsFolderOpen && (
                    <FolderContainer
                        handleOpen={handleProjectsOpen}
                        closeFolder={closePersonalProjectsFolder}
                        positionOffset={{ x: 30, y: 30 }}
                        folderTitle={t("folder.personalProjects")}
                        folderType="Personal Projects"
                        data={personalProjects}
                    />
                )}
                {isLinkedInRecommendationsOpen && (
                    <FolderContainer
                        handleOpen={handleRecommendationsOpen}
                        closeFolder={closeLinkedInRecommendations}
                        positionOffset={{ x: 60, y: 60 }}
                        folderTitle={t("folder.linkedinReviews")}
                        folderType="LinkedIn Recommendations"
                        data={linkedinRecommendations}
                    />
                )}

                {isJobWindowOpen.map((isOpen, index) =>
                    isOpen
                        ? isJobWindowOpen[index] && (
                              <WorkTextFile
                                  key={index}
                                  positionOffset={{ x: 0, y: 40 * index }}
                                  index={index}
                                  closeWindow={() =>
                                      handleWorkHistoryOpen(index)
                                  }
                                  companyName={workHistory[index].companyName}
                                  positionTitle={
                                      workHistory[index].positionTitle
                                  }
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
                                  positionOffset={{ x: 0, y: 40 * index }}
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
                                  linkName={personalProjects[index].linkName}
                                  link={personalProjects[index].link}
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
                                  positionOffset={{ x: 0, y: 40 * index }}
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
