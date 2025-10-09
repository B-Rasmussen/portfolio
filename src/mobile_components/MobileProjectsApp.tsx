import personalProjects from "../data/personalProjects";
import zombieGameChangeLog from "../data/zombieGameChangeLog";
import { MobileInAppNavBar } from "./MobileInAppNavBar";
import "../style/mobileAppStyle.css";

type MobileProjectsAppProps = {
    appNavigateTo: (path: string, index: number) => void;
    idNumber: number;
};

export function MobileProjectsApp({
    appNavigateTo,
    idNumber,
}: MobileProjectsAppProps) {
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
                    Tech Stack:{" "}
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
                <div>
                    {personalProjects[idNumber].image && (
                        <img
                            src={personalProjects[idNumber].image}
                            alt={personalProjects[idNumber].imageAlt}
                            style={{ width: "90%" }}
                        />
                    )}
                </div>
                {personalProjects[idNumber].projectNameAbbr === "Zombies" ? (
                    <div>
                        <h3>Change Log:</h3>
                        {zombieGameChangeLog.map((item: any) => (
                            <div key={item.id}>
                                <h4>Version {item.versionNumber}</h4>
                                <ul>
                                    {item.changeLog.map(
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
