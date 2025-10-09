import { SetStateAction, useState } from "react";

import { MobileHomeScreen } from "../mobile_components/MobileHomeScreen";
import { MobileReviewsApp } from "../mobile_components/MobileReviewsApp";
import { MobileNavBar } from "../mobile_components/MobileNavBar";
import { MobileWorkHistoryApp } from "../mobile_components/MobileWorkHistory";

import "../style/mobileResumeStyle.css";
import { MobileProjectsApp } from "../mobile_components/MobileProjectsApp";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function MobileResumePage(
    // { navigateTo }: NavBarProps
) {
    const [appWindow, setAppWindow] = useState("MobileHomeScreen");
    const [idNumberRequested, setIdNumberRequested] = useState(0);

    const appNavigateTo = (
        appWindow: SetStateAction<string>,
        idNumber: number
    ) => {
        setAppWindow(appWindow);
        setIdNumberRequested(idNumber);
    };

    const renderAppWindow = () => {
        switch (appWindow) {
            case "MobileHomeScreen":
                return (
                    <MobileHomeScreen
                        // navigateTo={navigateTo}
                        appNavigateTo={appNavigateTo}
                    />
                );
            case "MobileWorkHistory":
                return (
                    <MobileWorkHistoryApp
                        appNavigateTo={appNavigateTo}
                        idNumber={idNumberRequested}
                    />
                );
            case "MobilePersonalProjects":
                return (
                    <MobileProjectsApp
                        appNavigateTo={appNavigateTo}
                        idNumber={idNumberRequested}
                    />
                );
            case "MobileLinkedInRecommendations":
                return <MobileReviewsApp appNavigateTo={appNavigateTo} />;
            default:
                return <div>Oops something went wrong!</div>;
        }
    };

    return (
        <div id={appWindow == "MobileHomeScreen" ? "mobile-home-screen" : undefined}>
            <MobileNavBar />
            {renderAppWindow()}
        </div>
    );
}

export default MobileResumePage;
