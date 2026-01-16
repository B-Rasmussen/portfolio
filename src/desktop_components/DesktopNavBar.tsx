import { useState, useEffect } from "react";
import Button from "../components/Button";

import "../style/desktopNavBarStyle.css";
import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";
import { useTranslation } from "react-i18next";
import { setI18nLanguage } from "../translations/i18n";

function DesktopNavBar() {
    const { t } = useTranslation();
    const [isSocialsOpen, setIsSocialsOpen] = useState(false);
    const [isLangaugeMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    const toggleDropdown = (input: string) => {
        if (input === "social") {
            setIsSocialsOpen(!isSocialsOpen);
        } else if (input === "language") {
            setIsLanguageMenuOpen(!isLangaugeMenuOpen);
        }
    };

    useEffect(() => {
        const handleClickOutsideSocial = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest(".socials") &&
                !target.closest(".dropdown-menu")
            ) {
                setIsSocialsOpen(false);
            }
        };
        const handleClickOutsideLanguage = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest(".language") &&
                !target.closest(".dropdown-menu")
            ) {
                setIsLanguageMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutsideSocial);
        document.addEventListener("click", handleClickOutsideLanguage);
        return () => {
            document.removeEventListener("click", handleClickOutsideSocial);
            document.removeEventListener("click", handleClickOutsideLanguage);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="interactive-nav-bar">
            <div className="left-side">
                <div className="left-side-item">🍎 Brandotosh</div>
                <div className="left-side-item">{t("navBar.file")}</div>
                <div className="left-side-item">{t("navBar.view")}</div>
                <div
                    className="left-side-item socials"
                    onClick={() => toggleDropdown("social")}
                >
                    {t("navBar.socials")}
                </div>
                {isSocialsOpen && (
                    <div className="dropdown-social-menu">
                        <Button
                            imageName={linkedinDarkMode}
                            onButtonPressed={() => {
                                window.open(
                                    "https://www.linkedin.com/in/b-rasmussen/",
                                    "_blank"
                                );
                            }}
                            isSocialMediaLink={true}
                            isDesktopNavBarButton={true}
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
                            isDesktopNavBarButton={true}
                        />
                    </div>
                )}
                <div
                    className="left-side-item language"
                    onClick={() => toggleDropdown("language")}
                >
                    {t("navBar.language")}
                </div>
                {isLangaugeMenuOpen && (
                    <div className="dropdown-language-menu">
                        <div
                            className="dropdown-language-list"
                            onClick={() => setI18nLanguage("en")}
                        >
                            🇺🇸 {t("language.english")}
                        </div>
                        <div
                            className="dropdown-language-list"
                            onClick={() => setI18nLanguage("es")}
                        >
                            🇲🇽 {t("language.spanish")}
                        </div>
                    </div>
                )}
            </div>
            <div id="clock">
                {currentTime
                    .toLocaleDateString(t("language.language"), {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    })
                    // possibly remove?
                    .split(",")
                    .join("")}
                &nbsp;
                {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
        </div>
    );
}

export default DesktopNavBar;
