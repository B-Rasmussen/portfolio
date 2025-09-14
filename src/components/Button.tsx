import "../style/staticNavBarStyle.css";
import "../style/desktopNavBarStyle.css";
import "../style/mobileNavBarAppDockStyle.css";

type customButtonProps = {
    buttonName?: string;
    imageName?: string;
    onButtonPressed: any;
    isSocialMediaLink?: boolean;
    isDesktopNavBarButton?: boolean;
    isMobileAppDockButton?: boolean;
};

const Button = ({
    buttonName,
    imageName,
    onButtonPressed,
    isSocialMediaLink = false,
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
                    id={
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
    return (
        <div>
            <div onClick={onButtonPressed}>
                <div>{buttonName}</div>
            </div>
        </div>
    );
};

export default Button;
