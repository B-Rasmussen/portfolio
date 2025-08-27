import { useState, useEffect } from "react";
import Button from "../components/Button";

import "../style/interactiveNavBarStyle.css";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

type NavBarProps = {
    navigateTo: (path: string) => void;
};

function InteractiveNavBar({ navigateTo }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".socials") && !target.closest(".dropdown-menu")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="interactive-nav-bar">
            {/* <div id="computer-model">🍎 Brandotosh</div> */}
            <div className="left-side">
                <div>🍎 Brandotosh</div>
                <div className="filler">File</div>
                <div className="filler">View</div>
                <div className="socials" onClick={toggleDropdown}>
                    Socials
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <Button
                            buttonName={"Linked In"}
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
                            buttonName={"GitHub"}
                            imageName={githubDarkMode}
                            onButtonPressed={() => {
                                window.open(
                                    "https://github.com/B-Rasmussen",
                                    "_blank"
                                );
                            }}
                            isSocialMediaLink={true}
                        />
                    </div>
                )}
                <div onClick={() => navigateTo("WorkHistory")}>Static Page</div>
            </div>
            <div className="clock">
                {new Date().toLocaleDateString([], {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                })}
                &nbsp;
                {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
        </div>
    );
}

export default InteractiveNavBar;
