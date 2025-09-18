import personalProjects from "../data/personalProjects";
import { MobileInAppNavBar } from "./MobileInAppNavBar";

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
            <MobileInAppNavBar appNavigateTo={appNavigateTo} />
            <div>
                <div>{personalProjects[idNumber].projectName}</div>
                <div>{personalProjects[idNumber].description}</div>
                <div>
                    Tech Stack:
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
                            style={{width: '90%'}}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
