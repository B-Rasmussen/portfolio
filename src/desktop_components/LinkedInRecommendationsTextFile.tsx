import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
// import "../style/workHistoryStyle.css";

type LinkedInRecommendationsTextFileProps = {
    index: number;
    positionOffset: { x: number; y: number };
    closeWindow: (index: number) => void;
    person: string;
    bodyText: string[];
};

function LinkedInRecommendationsTextFile({
    index,
    positionOffset,
    closeWindow,
    person,
    bodyText,
}: LinkedInRecommendationsTextFileProps) {
    const nodeRef = useRef(null);
    const [childPosition, setChildPosition] = useState({
        x: -300,
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
                        <div className="title-bar-text">
                            {person.replace(/\ /g, "_")}_review.txt
                        </div>
                    </div>
                    <div
                        className="child-window-main-content"
                        id="linkedin-recommendations-content"
                    >
                        <h3>Reviewed By: {person}</h3>
                        <div>
                            {bodyText.map((line: string, index: number) => (
                                <text key={index}>{line} </text>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default LinkedInRecommendationsTextFile;
