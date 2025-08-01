import Draggable from "react-draggable";
import { useState, useRef, SetStateAction } from "react";
import TitleBarIcon from "../components/TitleBarIcon";
import WorkTextFile from "./WorkTextFile";
import PersonalProjectTextFile from "./PersonalProjectsTextFile";
import LinkedInRecommendationsTextFile from "./LinkedInRecommendationsTextFile";
import "../style/windowsFolderStyle.css"

// TODO: prevent child from being dragged when parent is dragged

type WindowsFolderProps = {
    closeFolder: () => void;
    folderTitle: string;
    data: any[];
};

function WindowsFolder({ closeFolder, folderTitle, data }: WindowsFolderProps) {
    const [isWindowOpen, setIsWindowOpen] = useState(
        Array(data.length).fill(false)
    );

    const handleOpen = (index: number) => {
        setIsWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

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
            // bounds={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
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
                                    {isWindowOpen[index] && (
                                        <WorkTextFile
                                            index={index}
                                            closeWindow={() =>
                                                handleOpen(index)
                                            }
                                            companyName={item.companyName}
                                            companyLogo={item.companyLogo}
                                            companyLogoAlt={
                                                item.companyLogoAlt
                                            }
                                            location={item.location}
                                            startDate={item.startDate}
                                            endDate={item.endDate}
                                            langaugesUsed={item.languagesUsed}
                                            bulletPoints={item.bulletPoints}
                                        />
                                    )}
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
                                    {isWindowOpen[index] && (
                                        <PersonalProjectTextFile
                                            index={index}
                                            closeWindow={() =>
                                                handleOpen(index)
                                            }
                                            projectName={item.projectName}
                                            technologies={item.technologies}
                                            description={item.description}
                                            image={item.image}
                                            imageAlt={item.imageAlt}
                                        />
                                    )}
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
                                    {isWindowOpen[index] && (
                                        <LinkedInRecommendationsTextFile
                                            index={index}
                                            closeWindow={() =>
                                                handleOpen(index)
                                            }
                                            person={item.person}
                                            bodyText={item.bodyText}
                                        />
                                    )}
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
