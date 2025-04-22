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
            <button onClick={onButtonPressed}>
                <img src={imageName} alt={buttonName} className="social-logos" />
            </button>
        );
    }
    return (
        <div>
            <button onClick={onButtonPressed}>
                <div>{buttonName}</div>
            </button>
        </div>
    );
};

export default Button;
