import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/workHistoryStyle.css";

type PersonalProjectTextFileProps = {
    index: number;
    closeWindow: (index: number) => void;
    projectName: string;
    technologies: string[];
    description: string;
    image?: string;
    imageAlt?: string;
};

function PersonalProjectTextFile({
    index,
    closeWindow,
    projectName,
    technologies,
    description,
    image,
    imageAlt,
}: PersonalProjectTextFileProps) {
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
                        <div className="title-bar-text">{projectName}.txt</div>
                    </div>
                    <div style={{ overflowY: "scroll" }}>
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
                        <div>{image && <img src={image} alt={imageAlt} />}</div>
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default PersonalProjectTextFile;
