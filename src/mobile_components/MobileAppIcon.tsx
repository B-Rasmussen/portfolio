import "../style/mobileAppStyle.css";

import githubDarkMode from "../assets/socialImages/github/githubDarkMode.png";

type MobileAppIconProps = {
    image?: string;
    // imageAlt?: string;
    name?: string;
    nameAbbr: string;
};

export function MobileAppIcon({
    image,
    // imageAlt,
    name,
    nameAbbr,
}: MobileAppIconProps) {
    return (
        <>
            <img src={!image ? githubDarkMode : image} className="app-icon" />
            <div>{name!.length > 10 ? nameAbbr : name}</div>
        </>
    );
}
