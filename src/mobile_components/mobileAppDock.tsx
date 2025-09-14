import "../style/mobileAppDockStyle.css";
import Button from "../components/Button";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

export function MobileAppDock() {
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
            </div>
        </div>
    );
}
