import "../style/navBarStyle.css";
import Button from "./Button";

type NavBarProps = {
    navigateTo: (path: string) => void;
    isMobileDevice: boolean;
};

function NavBar({ navigateTo, isMobileDevice }: NavBarProps) {
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
                    buttonName={"Interactive Resume (best viewed on desktop)"}
                    onButtonPressed={() => navigateTo("InteractiveResume")}
                />
            )}
        </div>
    );
}

export default NavBar;
