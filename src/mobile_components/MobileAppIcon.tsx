import "../style/mobileAppStyle.css";

import missingAppLogo from "../assets/missingAppLogo.png";

type MobileAppIconProps = {
    appIcon?: string;
    name: string;
    nameAbbr: string;
};

export function MobileAppIcon({ appIcon, name, nameAbbr }: MobileAppIconProps) {
    return (
        <div className="app-icon-container">
            <img
                src={!appIcon ? missingAppLogo : appIcon}
                className="app-icon"
            />
            <div>{name!.length > 10 ? nameAbbr : name}</div>
        </div>
    );
}
