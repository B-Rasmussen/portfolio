import { useTranslation } from "react-i18next";
import "../style/mobileAppStyle.css";

type MobileInAppNavBarProps = {
    appNavigateTo: (path: string, index: number) => void;
    companyImage?: string;
    appName: string;
    backButtonColor?: string;
};

export function MobileInAppNavBar({
    appNavigateTo,
    companyImage,
    appName,
    backButtonColor,
}: MobileInAppNavBarProps) {
    const { t } = useTranslation()
    return (
        <div id="in-app-nav-bar">
            <div
                onClick={() => {
                    appNavigateTo("MobileHomeScreen", 0);
                }}
                id="back-button"
                style={{ backgroundColor: backButtonColor }}
            >
                <div id="back-button-text">{t("navBar.back")}</div>
            </div>
            {companyImage ? (
                <img src={companyImage} className="app-title-image" />
            ) : (
                <h2 className="app-title-text">{appName}</h2>
            )}
        </div>
    );
}
