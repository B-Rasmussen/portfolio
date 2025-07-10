import { useState } from "react";
// import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";
import WindowsTextFile from "./WindowsTextFile";

function WindowsFolder({ closeFolder, folderTitle, data }: any) {
    const [isWindowOpen, setIsWindowOpen] = useState(
        Array(data.length).fill(false)
    );

    const handleOpen = (index: number) => {
        setIsWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
        // console.log(isWindowOpen[index]);
    };

    // const handleClick = (index: number) => {
    //     setIsWindowOpen(isWindowOpen.map((i) => i === index));
    //     console.log(isWindowOpen[index])
    // };

    // const closeWindow = (index: number) => {
    //     setIsWindowOpen(isWindowOpen.map((open, i) => (i === index ? false : open)));
    // };

    return (
        <div>
            {
                <div className="text-file-window">
                    <div
                        className="title-bar-button"
                        onClick={() => {
                            closeFolder();
                        }}
                    >
                        <div className="title-bar-icon" id="close-icon">
                            X
                        </div>
                        <div className="title-bar-icon" id="minimize-icon">
                            _
                        </div>
                        <div className="title-bar-icon" id="maximize-icon">
                            □
                        </div>
                        <div className="title-bar-text">{folderTitle}</div>
                    </div>

                    <div className="folder-content">
                        {data.map((item: any, index: number) =>
                            // TODO: clean up this mess... eventually
                            folderTitle === "Work History" ? (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        handleOpen(index);
                                        console.log(item);
                                    }}
                                >
                                    <div className="text-file-icon" />
                                    <text>{item.companyName}</text>
                                    {isWindowOpen[index] && (
                                        <WindowsTextFile
                                            fileType={folderTitle}
                                            index={index}
                                            closeWindow={() =>
                                                handleOpen(index)
                                            }
                                            companyName={item.companyName}
                                            location={item.location}
                                            startDate={item.startDate}
                                            endDate={item.endDate}
                                            langaugesUsed={item.languagesUsed}
                                            bulletPoints={item.bulletPoints}
                                            className="text-file-window"
                                        />
                                    )}
                                </div>
                            ) : null,

                            folderTitle === "Personal Projects" ? (
                                <div>preojcetzs</div>
                            ) : null,

                            folderTitle === "LinkedIn Recommendations" ? (
                                <div>linedkasdf</div>
                            ) : null
                        )}
                    </div>

                    {/*
                    {workHistory.map((job, index) => (
                        <div key={job.id} onClick={() => handleOpen(index)}>
                            <div className="text-file-icon" />
                            <text>{job.companyName}</text>
                            {isWindowOpen[index] && (
                                <WindowsTextFile
                                    index={index}
                                    closeWindow={() => handleOpen(index)}
                                    companyName={job.companyName}
                                    location={job.location}
                                    startDate={job.startDate}
                                    endDate={job.endDate}
                                    langaugesUsed={job.languagesUsed}
                                    bulletPoints={job.bulletPoints}
                                    className="text-file-window"
                                />
                            )}
                        </div>
                    ))}
                    */}
                </div>
            }
        </div>
    );
}

export default WindowsFolder;
