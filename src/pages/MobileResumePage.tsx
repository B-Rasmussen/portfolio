import { MobileNavBar } from "../mobile_components/mobileNavBar";
import { MobileAppDock } from "../mobile_components/mobileAppDock";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function MobileResumePage({ navigateTo }: NavBarProps) {
    return (
        <div>
            <MobileNavBar />
            <div>hello there</div>
            <div onClick={() => navigateTo("WorkHistory")}>Static Page</div>
            <MobileAppDock />
        </div>
    );
}

export default MobileResumePage;
