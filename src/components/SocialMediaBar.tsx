import "../style/navBarStyle.css";
import Button from "./Button";
import linkedinDarkMode from '../assets/socialImages/LinkedIn/linkedinDarkMode.png';
import githubDarkMode from '../assets/socialImages/github/githubDarkMode.png';

function SocialMediaBar() {
    return (
        <div className="social-media-container">
            <Button
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
