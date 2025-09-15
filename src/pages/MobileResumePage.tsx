import { MobileNavBar } from "../mobile_components/mobileNavBar";
import { MobileAppDock } from "../mobile_components/mobileAppDock";
import { MobileAppFile } from "../mobile_components/mobileAppFile";

import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function MobileResumePage({ navigateTo }: NavBarProps) {
    return (
        <div>
            <MobileNavBar />
            <div className="app-container">
                <MobileAppFile data={workHistory} dataName="Work History" />
                <MobileAppFile
                    data={personalProjects}
                    dataName="Personal Projects"
                />
                <MobileAppFile
                    data={linkedinRecommendations}
                    dataName="Linkedin Recommendations"
                />
                {/* <div>
                    {personalProjects.map((item: any, index: number) => (
                        <div
                            key={item.id}
                            // onClick={() => {
                            //     handleOpen(index);
                            // }}
                            className="text-file-container"
                        >
                            <text>{item.projectName}.txt</text>
                        </div>
                    ))}
                </div>
                <div>
                    {linkedinRecommendations.map((item: any, index: number) => (
                        <div
                            key={item.id}
                            // onClick={() => {
                            //     handleOpen(index);
                            // }}
                            className="text-file-container"
                        >
                            <text>{item.person}.txt</text>
                        </div>
                    ))}
                </div> */}
            </div>
            <MobileAppDock navigateTo={navigateTo} />
        </div>
    );
}

export default MobileResumePage;
