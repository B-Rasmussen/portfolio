import "../style/staticNavBarStyle.css";
import "../style/desktopNavBarStyle.css";
import "../style/mobileNavBarAppDockStyle.css";

type customButtonProps = {
    buttonName?: string;
    imageName?: string;
    onButtonPressed: any;
    isMobileView?: boolean;
    isSocialMediaLink?: boolean;
    isOnPlayStore?: boolean;
    isDesktopNavBarButton?: boolean;
    isMobileAppDockButton?: boolean;
};

const Button = ({
    buttonName,
    imageName,
    onButtonPressed,
    isMobileView = false,
    isSocialMediaLink = false,
    isOnPlayStore = false,
    isDesktopNavBarButton = false,
    isMobileAppDockButton = false,
}: customButtonProps) => {
    if (isSocialMediaLink) {
        return (
            <div
                onClick={onButtonPressed}
                className={
                    isDesktopNavBarButton
                        ? "interactive-social-button"
                        : isMobileAppDockButton
                          ? "mobile-social-button"
                          : "social-media-button"
                }
            >
                <img
                    src={imageName}
                    alt={buttonName}
                    className={
                        isDesktopNavBarButton
                            ? "interactive-social-logos"
                            : isMobileAppDockButton
                              ? "mobile-social-logos"
                              : "social-logos"
                    }
                />
                {buttonName ? <div>{buttonName}</div> : null}
            </div>
        );
    }
    if (isOnPlayStore) {
        return (
            <div>
                <div onClick={onButtonPressed}>
                    <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt={buttonName}
                        style={{
                            width: isMobileView ? "45%" : "35%",
                            marginRight: 4,
                        }}
                    />
                </div>
            </div>
        );
    }
    return (
        <div>
            <div
                onClick={onButtonPressed}
                style={{ textDecoration: "underline", cursor: "pointer" }}
            >
                <div>{buttonName}</div>
            </div>
        </div>
    );
};

export default Button;
