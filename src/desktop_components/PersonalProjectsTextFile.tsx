import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import zombieGameChangeLog from "../data/zombieGameChangeLog";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/textFileStyle.css";
import Button from "../components/Button";

type PersonalProjectTextFileProps = {
    index: number;
    positionOffset: { x: number; y: number };
    closeWindow: (index: number) => void;
    projectName: string;
    technologies: string[];
    description: string[];
    link?: string;
    linkName?: string;
    image?: string[];
    imageAlt?: string;
};

function PersonalProjectTextFile({
    index,
    positionOffset,
    closeWindow,
    projectName,
    technologies,
    description,
    link,
    linkName,
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
                        <div>{projectName}</div>
                        {link && (
                            <Button
                                buttonName={linkName}
                                onButtonPressed={() => {
                                    window.open(`${link}`, "_blank");
                                }}
                            />
                        )}
                        <div>
                            Tech Stack:{" "}
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
                        <div>{description}</div>
                        <div>
                            {image &&
                                image.map((imgSrc, idx) => (
                                    <img
                                        key={idx}
                                        id={projectName === 'Zombie survival game' ? "zombie-image-content" : "image-content"}
                                        src={imgSrc}
                                        alt={imageAlt}
                                    />
                                ))}
                        </div>
                        {projectName === "Zombie survival game" ? (
                            <div>
                                <h3>Change Log:</h3>
                                {zombieGameChangeLog.map((item: any) => (
                                    <div key={item.id}>
                                        <h4>Version {item.versionNumber}</h4>
                                        <ul>
                                            {item.changeLog.map(
                                                (
                                                    change: string,
                                                    idx: number
                                                ) => (
                                                    <li key={idx}>{change}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default PersonalProjectTextFile;
