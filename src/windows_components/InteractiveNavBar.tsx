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
    const [currentTime, setCurrentTime] = useState(new Date());

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest(".socials") &&
                !target.closest(".dropdown-menu")
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="interactive-nav-bar">
            <div className="left-side">
                <div className="left-side-item">🍎 Brandotosh</div>
                <div className="left-side-item">File</div>
                <div className="left-side-item">View</div>
                <div
                    className="left-side-item socials"
                    onClick={toggleDropdown}
                >
                    Socials
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <Button
                            imageName={linkedinDarkMode}
                            onButtonPressed={() => {
                                window.open(
                                    "https://www.linkedin.com/in/brandonrasmussen91/",
                                    "_blank"
                                );
                            }}
                            isSocialMediaLink={true}
                            isInteractiveNavBarButton={true}
                        />
                        <Button
                            imageName={githubDarkMode}
                            onButtonPressed={() => {
                                window.open(
                                    "https://github.com/B-Rasmussen",
                                    "_blank"
                                );
                            }}
                            isSocialMediaLink={true}
                            isInteractiveNavBarButton={true}
                        />
                    </div>
                )}
                <div
                    className="left-side-item static-page"
                    onClick={() => navigateTo("WorkHistory")}
                >
                    Static Page
                </div>
            </div>
            <div className="clock">
                {currentTime.toLocaleDateString([], {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                })}
                &nbsp;
                {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
        </div>
    );
}

export default InteractiveNavBar;
