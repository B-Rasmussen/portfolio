import { usePersonalProjects } from "../data/personalProjects";
import { useZombieGameChangeLog } from "../data/zombieGameChangeLog";
import { MobileInAppNavBar } from "./MobileInAppNavBar";
import { useTranslation } from "react-i18next";
import "../style/mobileAppStyle.css";

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
    return (
        <>
            <MobileInAppNavBar
                appNavigateTo={appNavigateTo}
                appName={personalProjects[idNumber].projectName}
                backButtonColor={personalProjects[idNumber].buttonColor}
            />
            <div className="app-body">
                <div>{personalProjects[idNumber].description}</div>
                <div>
                    {t("textFiles.techStack")}:{" "}
                    {personalProjects[idNumber].technologies.map(
                        (item: string, index: number) => {
                            return (
                                <span key={index}>
                                    {item}
                                    {index <
                                    personalProjects[idNumber].technologies
                                        .length -
                                        1
                                        ? ", "
                                        : ""}
                                </span>
                            );
                        }
                    )}
                </div>
                <div className="image-container">
                    {personalProjects[idNumber].image &&
                        personalProjects[idNumber].image.map((imgSrc, idx) => (
                            <img
                                key={idx}
                                className={
                                    personalProjects[idNumber].projectName ===
                                    "Zombie survival game"
                                        ? "zombie-image-content"
                                        : "image-content"
                                }
                                src={imgSrc}
                                alt={personalProjects[idNumber].imageAlt}
                            />
                        ))}
                </div>
                {personalProjects[idNumber].projectNameAbbr === "Zombies" ? (
                    <div>
                        <h3>{t("textFiles.changeLog")}</h3>
                        {zombieGameChangeLog.map((item: any) => (
                            <div key={item.id}>
                                <h4>{t("zombiesChangeLog.version")} {item.versionNumber}</h4>
                                <ul>
                                    {item.changeLog[0].map(
                                        (change: string, idx: number) => (
                                            <li key={idx}>{change}</li>
                                        )
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
