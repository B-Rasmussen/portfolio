import "../style/navBarStyle.css";
import Button from "./Button";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function NavBar({ navigateTo }: NavBarProps) {
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
            <Button
                buttonName={"Interactive Resume"}
                onButtonPressed={() => navigateTo("InteractiveResume")}
            />
        </div>
    );
}

export default NavBar;
