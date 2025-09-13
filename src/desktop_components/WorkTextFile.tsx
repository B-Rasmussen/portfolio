import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/textFileStyle.css";
// import "../style/workHistoryStyle.css";

type WorkTextFileProps = {
    index: number;
    positionOffset: { x: number; y: number };
    closeWindow: (index: number) => void;
    companyName: string;
    positionTitle: string;
    companyLogo?: string;
    companyLogoAlt?: string;
    location: string;
    startDate: string;
    endDate: string;
    langaugesUsed?: string[];
    bulletPoints?: string[];
};

function WorkTextFile({
    index,
    positionOffset,
    closeWindow,
    companyName,
    positionTitle,
    companyLogo,
    companyLogoAlt,
    location,
    startDate,
    endDate,
    langaugesUsed,
    bulletPoints,
}: WorkTextFileProps) {
    const nodeRef = useRef(null);
    const [childPosition, setChildPosition] = useState({
        x: -900,
        y: -400,
    });

    const handleStop = (
        _event: any,
        dragElement: { x: SetStateAction<number>; y: SetStateAction<number> }
    ) => {
        setChildPosition({
            x: dragElement.x as number,
            y: dragElement.y as number,
        });
    };
    return (
        <Draggable
            bounds="parent"
            onStop={handleStop}
            defaultPosition={{
                x: childPosition.x + positionOffset.x,
                y: childPosition.y + positionOffset.y,
            }}
            nodeRef={nodeRef}
            handle=".grabbable-area"
        >
            {
                <div
                    className="text-file-window child-window-contents"
                    ref={nodeRef}
                >
                    <div className="grabbable-area">
                        <TitleBarIcon closeWindow={closeWindow} index={index} />
                        <div className="title-bar-text">{companyName}.txt</div>
                    </div>
                    <div className="child-window-main-content">
                        <div id="company-header">
                            <h2 className="company-name">{companyName}</h2>
                            {companyLogo && (
                                <img
                                    src={companyLogo}
                                    alt={`${companyLogoAlt}`}
                                    className="company-logo"
                                    style={{ width: "25px", height: "auto" }}
                                />
                            )}
                        </div>
                        <h4 className="position-title">{positionTitle}</h4>
                        <div>{location}</div>
                        <div>
                            {startDate} - {endDate}
                        </div>
                        <div>
                            Languages/Frameworks:&nbsp;
                            {langaugesUsed?.map(
                                (item: string, index: number) => (
                                    <span key={index}>
                                        {item}
                                        {index < langaugesUsed.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                )
                            )}
                        </div>
                        <ul className="job-list-container">
                            {bulletPoints?.map((item: any, index: any) => (
                                <li key={index} className="job-bullet-points">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default WorkTextFile;
