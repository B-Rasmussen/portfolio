import "../style/mobileNavBarAppDockStyle.css";
import "../style/desktopFolderStyle.css";
import Button from "../components/Button";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

type MobileAppDockProps = {
    navigateTo: (path: string) => void
}

export function MobileAppDock({ navigateTo }: MobileAppDockProps) {
    return (
        <div id="mobile-app-dock">
            <div className="button-container">
                <Button
                    imageName={linkedinDarkMode}
                    onButtonPressed={() => {
                        window.open(
                            "https://www.linkedin.com/in/brandonrasmussen91/",
                            "_blank"
                        );
                    }}
                    isSocialMediaLink={true}
                    isMobileAppDockButton={true}
                />
                <Button
                    imageName={githubDarkMode}
                    onButtonPressed={() => {
                        window.open("https://github.com/B-Rasmussen", "_blank");
                    }}
                    isSocialMediaLink={true}
                    isMobileAppDockButton={true}
                />
                <div
                    className="text-file-mobile"
                    onClick={() => navigateTo("WorkHistory")}
                >
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                    <div className="line4" />
                </div>
            </div>
        </div>
    );
}
