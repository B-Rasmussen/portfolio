import "../style/navBarStyle.css";

type customButtonProps = {
    buttonName: string;
    imageName?: string;
    onButtonPressed: any;
    isSocialMediaLink?: boolean;
};

const Button = ({
    buttonName,
    imageName,
    onButtonPressed,
    isSocialMediaLink = false,
}: customButtonProps) => {
    if (isSocialMediaLink) {
        return (
            <div onClick={onButtonPressed} className="social-media-button">
                <img src={imageName} alt={buttonName} className="social-logos" />
                <div>{buttonName}</div>
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
