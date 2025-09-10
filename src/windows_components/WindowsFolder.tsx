import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import "../style/windowsFolderStyle.css";

type WindowsFolderProps = {
    closeFolder: () => void;
    handleOpen: (index: number) => void;
    folderTitle: string;
    data: any[];
};

function WindowsFolder({
    closeFolder,
    handleOpen,
    folderTitle,
    data,
}: WindowsFolderProps) {
    const nodeRef = useRef(null);
    const [parentPosition, setParentPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleStop = (
        _event: any,
        dragElement: { x: SetStateAction<number>; y: SetStateAction<number> }
    ) => {
        setParentPosition({
            x: dragElement.x as number,
            y: dragElement.y as number,
        });
    };

    return (
        <Draggable
            bounds="parent"
            onStop={handleStop}
            position={parentPosition}
            nodeRef={nodeRef}
            handle=".grabbable-area"
            cancel="#child-item"
        >
            {
                <div className="text-file-window" ref={nodeRef}>
                    <div className="grabbable-area">
                        <TitleBarIcon closeWindow={closeFolder} />
                        <div className="title-bar-text">{folderTitle}</div>
                    </div>
                    <div className="folder-content">
                        {folderTitle === "Work History"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    id="child-item"
                                    className="text-file-container"
                                >
                                    <div className="text-file-icon">
                                        <div className="line1" />
                                        <div className="line2" />
                                        <div className="line3" />
                                        <div className="line4" />
                                    </div>
                                    <text>{item.companyName}.txt</text>
                                </div>
                            ))
                            : null}

                        {folderTitle === "Personal Projects"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    id="child-item"
                                    className="text-file-container"
                                >
                                    <div className="text-file-icon">
                                        <div className="line1" />
                                        <div className="line2" />
                                        <div className="line3" />
                                        <div className="line4" />
                                    </div>
                                    <text>{item.projectName}</text>
                                </div>
                            ))
                            : null}

                        {folderTitle === "LinkedIn Recommendations"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    id="child-item"
                                    className="text-file-container"
                                >
                                    <div className="text-file-icon">
                                        <div className="line1" />
                                        <div className="line2" />
                                        <div className="line3" />
                                        <div className="line4" />
                                    </div>
                                    <text>{item.person} review.txt</text>
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default WindowsFolder;
