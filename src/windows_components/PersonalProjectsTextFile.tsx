import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/textFileStyle.css";
// import "../style/workHistoryStyle.css";

type PersonalProjectTextFileProps = {
    index: number;
    positionOffset: { x: number; y: number };
    closeWindow: (index: number) => void;
    projectName: string;
    technologies: string[];
    description: string;
    image?: string;
    imageAlt?: string;
};

function PersonalProjectTextFile({
    index,
    positionOffset,
    closeWindow,
    projectName,
    technologies,
    description,
    image,
    imageAlt,
}: PersonalProjectTextFileProps) {
    const nodeRef = useRef(null);
    const [childPosition, setChildPosition] = useState({
        x: -600,
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
                        <div className="title-bar-text">{projectName}.txt</div>
                    </div>
                    <div className="child-window-main-content">
                        <div>{description}</div>
                        <div>
                            {technologies?.map(
                                (item: string, index: number) => (
                                    <span key={index}>
                                        {item}
                                        {index < technologies.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                )
                            )}
                        </div>
                        <div>
                            {image && (
                                <img
                                    id="image-content"
                                    src={image}
                                    alt={imageAlt}
                                />
                            )}
                        </div>
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default PersonalProjectTextFile;
