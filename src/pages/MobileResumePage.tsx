import { MobileNavBar } from "../mobile_components/MobileNavBar";
import { MobileAppDock } from "../mobile_components/MobileAppDock";
import { MobileAppFile } from "../mobile_components/MobileAppFile";

import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

import "../style/mobileResumeStyle.css";

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
            </div>
            <MobileAppDock navigateTo={navigateTo} />
        </div>
    );
}

export default MobileResumePage;
