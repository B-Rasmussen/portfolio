import { MobileAppDock } from "../mobile_components/MobileAppDock";
import { MobileAppFile } from "../mobile_components/MobileAppFile";

import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

type MobileHomeScreenProps = {
    appNavigateTo: (path: string, index: number) => void;
};

export function MobileHomeScreen({ appNavigateTo }: MobileHomeScreenProps) {
    return (
        <>
            <div className="app-container">
                <MobileAppFile
                    appNavigateTo={appNavigateTo}
                    data={workHistory}
                    dataName="Work History"
                />
                <MobileAppFile
                    appNavigateTo={appNavigateTo}
                    data={personalProjects}
                    dataName="Personal Projects"
                />
                <MobileAppFile
                    appNavigateTo={appNavigateTo}
                    data={linkedinRecommendations}
                    dataName="Linkedin Recommendations"
                />
            </div>
            <MobileAppDock />
        </>
    );
}
