import "../style/workHistoryStyle.css";

type TitleBarIconProps = {
    closeWindow: (index: number) => void;
    index?: number;
};

const TitleBarIcon = ({ closeWindow, index }: TitleBarIconProps) => {
    return (
        <div
            className="title-bar-button"
            onClick={() => {
                console.log('close window clicked');
                console.log('index:', index);
                closeWindow(index == undefined ? 0 : index);
            }}
        >
            <div className="title-bar-icon" id="close-icon">
                X
            </div>
            <div className="title-bar-icon" id="minimize-icon">
                _
            </div>
            <div className="title-bar-icon" id="maximize-icon">
                □
            </div>
        </div>
    );
};

export default TitleBarIcon;
