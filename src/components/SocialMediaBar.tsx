import "../style/navBarStyle.css";
import Button from "./Button";
import linkedinDarkMode from '../assets/socialImages/LinkedIn/linkedinDarkMode.png';
import githubDarkMode from '../assets/socialImages/github/githubDarkMode.png';
// import linkedinLightMode from '../assets/linkedin-light.svg';
// import githubLightMode from '../assets/github-light.svg';

type SocialMediaProps = {
    // navigateTo: (path: string) => void;
};

function SocialMediaBar({}: SocialMediaProps) {
    return (
        <div className="social-media-container">
            <Button
                buttonName={"LinkedIn"}
                imageName={linkedinDarkMode}
                onButtonPressed={() => {
                    window.open(
                        "https://www.linkedin.com/in/brandonrasmussen91/",
                        "_blank"
                    );
                }}
                isSocialMediaLink={true}
            />
            <Button
                buttonName={"github"}
                imageName={githubDarkMode}
                onButtonPressed={() => {
                    window.open("https://github.com/B-Rasmussen", "_blank");
                }}
                isSocialMediaLink={true}
            />
        </div>
    );
}

export default SocialMediaBar;
