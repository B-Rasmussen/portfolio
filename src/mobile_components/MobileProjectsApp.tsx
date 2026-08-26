import { usePersonalProjects } from "../data/personalProjects";
import { useZombieGameChangeLog } from "../data/zombieGameChangeLog";
import { MobileInAppNavBar } from "./MobileInAppNavBar";
import { useTranslation } from "react-i18next";
import "../style/mobileAppStyle.css";
import Button from "../components/Button";

type MobileProjectsAppProps = {
    appNavigateTo: (path: string, index: number) => void;
    idNumber: number;
};

export function MobileProjectsApp({
    appNavigateTo,
    idNumber,
}: MobileProjectsAppProps) {
    const { t } = useTranslation();
    const personalProjects = usePersonalProjects();
    const zombieGameChangeLog = useZombieGameChangeLog();
    const selectedProject = personalProjects[idNumber];

    return (
        <>
            <MobileInAppNavBar
                appNavigateTo={appNavigateTo}
                appName={selectedProject.projectName}
                backButtonColor={selectedProject.buttonColor}
            />
            <div className="app-body">
                {selectedProject.link && (
                    <Button
                        buttonName={selectedProject.linkName}
                        isMobileView={true}
                        isOnPlayStore={true}
                        onButtonPressed={() => {
                            window.open(selectedProject.link, "_blank");
                        }}
                    />
                )}
                <div>{selectedProject.description}</div>
                <div>
                    {t("textFiles.techStack")}:{" "}
                    {selectedProject.technologies.map(
                        (item: string, index: number) => {
                            return (
                                <span key={index}>
                                    {item}
                                    {index <
                                    selectedProject.technologies.length - 1
                                        ? ", "
                                        : ""}
                                </span>
                            );
                        },
                    )}
                </div>
                <div className="image-container">
                    {selectedProject.image &&
                        selectedProject.image.map((imgSrc, idx) => (
                            <img
                                key={idx}
                                className={
                                    selectedProject.projectName ===
                                    "Zombie survival game"
                                        ? "zombie-image-content"
                                        : "image-content"
                                }
                                src={imgSrc}
                                alt={selectedProject.imageAlt}
                            />
                        ))}
                </div>
                {selectedProject.projectNameAbbr === "Zombies" ? (
                    <div>
                        <h3>{t("textFiles.changeLog")}</h3>
                        {zombieGameChangeLog.map((item: any) => (
                            <div key={item.id}>
                                <h4>
                                    {t("zombiesChangeLog.version")}{" "}
                                    {item.versionNumber}
                                </h4>
                                <ul>
                                    {item.changeLog[0].map(
                                        (change: string, idx: number) => (
                                            <li key={idx}>{change}</li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
}
