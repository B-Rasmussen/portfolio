type customButtonProps = {
    buttonName: string;
    onButtonPressed: any;
    buttonStyle?: any;
    textStyle?: any;
};

const Button = ({
    buttonName,
    onButtonPressed,
    buttonStyle,
    textStyle,
}: customButtonProps) => {
    return (
    <button onClick={onButtonPressed} style={buttonStyle}>
        <div style={textStyle}>{buttonName}</div>
    </button>
    )
};

export default Button;
