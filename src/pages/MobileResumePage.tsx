import { MobileNavBar } from "../mobile_components/mobileNavBar";
import { MobileAppDock } from "../mobile_components/mobileAppDock";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function MobileResumePage({ navigateTo }: NavBarProps) {
    return (
        <div>
            <MobileNavBar />
            <MobileAppDock navigateTo={navigateTo}/>
        </div>
    );
}

export default MobileResumePage;
