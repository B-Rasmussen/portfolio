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
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleStop = (
        _event: any,
        dragElement: { x: SetStateAction<number>; y: SetStateAction<number> }
    ) => {
        setX(dragElement.x);
        setY(dragElement.y);
    };
    return (
        <Draggable
            bounds={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
            onStop={handleStop}
            position={{ x, y }}
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
                    <div style={{ overflowY: "scroll" }}>
                        <div>{person}</div>
                        <div>
                            {bodyText.map((line: string, index: number) => (
                                <div key={index}>{line}</div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default LinkedInRecommendationsTextFile;
