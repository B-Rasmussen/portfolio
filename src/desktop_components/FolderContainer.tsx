import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import { DesktopFileIcon } from "./DesktopFileIcon";
import "../style/desktopFolderStyle.css";

type FolderContainerProps = {
    handleOpen: (index: number) => void;
    closeFolder: () => void;
    positionOffset: { x: number; y: number };
    folderTitle: string;
    folderType: string;
    data: any[];
};

function FolderContainer({
    handleOpen,
    closeFolder,
    positionOffset,
    folderTitle,
    folderType,
    data,
}: FolderContainerProps) {
    const nodeRef = useRef(null);
    const [parentPosition, setParentPosition] = useState({
        x: 100,
        y: -300,
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
            defaultPosition={{
                x: parentPosition.x + positionOffset.x,
                y: parentPosition.y + positionOffset.y,
            }}
            nodeRef={nodeRef}
            handle=".grabbable-area"
        >
            {
                <div className="text-file-window" ref={nodeRef}>
                    <div className="grabbable-area">
                        <TitleBarIcon closeWindow={closeFolder} />
                        <div className="title-bar-text">{folderTitle}</div>
                    </div>
                    <div className="folder-content">
                        {folderType === "Work History"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    className="text-file-container"
                                >
                                    <DesktopFileIcon fileName={item.companyName} folderTitle={folderType} />
                                </div>
                            ))
                            : null}

                        {folderType === "Personal Projects"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    className="text-file-container"
                                >
                                    <DesktopFileIcon fileName={item.projectName} folderTitle={folderType} />
                                </div>
                            ))
                            : null}

                        {folderType === "LinkedIn Recommendations"
                            ? data.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                    }}
                                    className="text-file-container"
                                >
                                    <DesktopFileIcon fileName={item.person} folderTitle={folderType} />
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            }
        </Draggable>
    );
}

export default FolderContainer;
