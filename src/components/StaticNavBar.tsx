import "../style/staticNavBarStyle.css";
import Button from "./Button";

type StaticNavBarProps = {
    navigateTo: (path: string) => void;
    isMobileDevice: boolean;
};

function StaticNavBar({ navigateTo, isMobileDevice }: StaticNavBarProps) {
    return (
        <div className="internal-links-container">
            <Button
                buttonName={"Work History"}
                onButtonPressed={() => navigateTo("WorkHistory")}
            />
            <Button
                buttonName={"Projects"}
                onButtonPressed={() => navigateTo("Projects")}
            />
            {isMobileDevice ? null : (
                <Button
                    buttonName={"Desktop Resume"}
                    onButtonPressed={() => navigateTo("DesktopResume")}
                />
            )}
            <Button
                buttonName={"mobile Resume"}
                onButtonPressed={() => navigateTo("MobileResume")}
            />
        </div>
    );
}

export default StaticNavBar;
