import "../style/mobileAppStyle.css";

import missingAppLogo from "../assets/missingAppLogo.png";

type MobileAppIconProps = {
    appIcon?: string;
    image?: string;
    // imageAlt?: string;
    name?: string;
    nameAbbr: string;
};

export function MobileAppIcon({
    appIcon,
    image,
    // imageAlt,
    name,
    nameAbbr,
}: MobileAppIconProps) {
    return (
        <>
            <img src={!appIcon ? missingAppLogo : appIcon} className="app-icon" />
            <div>{name!.length > 10 ? nameAbbr : name}</div>
        </>
    );
}
