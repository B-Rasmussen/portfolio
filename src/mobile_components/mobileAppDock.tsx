import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { setI18nLanguage } from "../translations/i18n";

import linkedinDarkMode from "../assets/socialImages/LinkedIn/linkedinDarkMode.png";
import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";
import phoneIcon from "../assets/phoneIcon.png";
import settingsIcon from "../assets/settingsIcon.png";

import "../style/mobileNavBarAppDockStyle.css";

export function MobileAppDock() {
    const { t } = useTranslation();
    const [isLangaugeMenuOpen, setIsLanguageMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsLanguageMenuOpen(!isLangaugeMenuOpen);
    };

    useEffect(() => {
        const handleClickOutsideLanguage = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest(".language") &&
                !target.closest(".dropdown-menu")
            ) {
                setIsLanguageMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutsideLanguage);
        return () => {
            document.removeEventListener("click", handleClickOutsideLanguage);
        };
    }, []);

    return (
        <div id="mobile-app-dock">
            <div className="button-container">
                <img
                    src={phoneIcon}
                    alt="phone icon"
                    className="mobile-social-logos"
                />
                <img
                    src={settingsIcon}
                    className="mobile-social-logos language"
                    onClick={() => toggleDropdown()}
                    id="mobile-language-logo"
                />
                {isLangaugeMenuOpen && (
                    <div className="mobile-dropdown-language-menu">
                        <div
                            className="mobile-dropdown-language-list active"
                            onClick={() => setI18nLanguage("en")}
                        >
                            🇺🇸 {t("language.english")}
                        </div>
                        <div
                            className="mobile-dropdown-language-list"
                            onClick={() => setI18nLanguage("es")}
                        >
                            🇲🇽 {t("language.spanish")}
                        </div>
                    </div>
                )}
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
