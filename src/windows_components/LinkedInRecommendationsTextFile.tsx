import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/workHistoryStyle.css";

type LinkedInRecommendationsTextFileProps = {
    index: number;
    closeWindow: (index: number) => void;
    person: string;
    bodyText: string[];
};

function LinkedInRecommendationsTextFile({
    index,
    closeWindow,
    person,
    bodyText,
}: LinkedInRecommendationsTextFileProps) {
    const nodeRef = useRef(null);
    const [childPosition, setChildPosition] = useState({
        x: 0 as number,
        y: 0 as number,
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
            bounds={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
            onStop={handleStop}
            position={childPosition}
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
                            {person}_review.txt
                        </div>
                    </div>
                    <div className="child-window-main-content" id="linkedin-recommendations-content">
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
