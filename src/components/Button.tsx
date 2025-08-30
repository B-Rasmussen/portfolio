import "../style/navBarStyle.css";

type customButtonProps = {
    buttonName?: string;
    imageName?: string;
    onButtonPressed: any;
    isSocialMediaLink?: boolean;
    isInteractiveNavBarButton?: boolean;
};

const Button = ({
    buttonName,
    imageName,
    onButtonPressed,
    isSocialMediaLink = false,
    isInteractiveNavBarButton = false,
}: customButtonProps) => {
    if (isSocialMediaLink) {
        return (
            <div onClick={onButtonPressed} className={isInteractiveNavBarButton ? "interactive-social-button" : "social-media-button"}>
                <img src={imageName} alt={buttonName} className="social-logos" />
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
