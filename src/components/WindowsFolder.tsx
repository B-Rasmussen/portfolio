import { useState } from "react";
import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";
import WindowsTextFile from "./WindowsTextFile";

function WindowsFolder({ closeWorkHistoryFolder, folderTitle }: any) {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleDoubleClick = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <div>
            {/*
            each job history item will have a section that shows what technologies were used
            ex activision will have javascript, react, react native // sqa squared will have python, java, javascript
            moving mindz will have javascript, php, mysql
            */}
            {
                <div className="text-file-window">
                    <div
                        className="title-bar-button"
                        onClick={() => {
                            closeWorkHistoryFolder();
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
                    {workHistory.map((job) => (
                        <div>
                            <div className="text-file-icon" />
                            <text>{job.companyName}</text>
                        </div>
                        // <WindowsTextFile
                        //     closeWindow={closeWindow}
                        //     companyName={job.companyName}
                        //     location={job.location}
                        //     startDate={job.startDate}
                        //     endDate={job.endDate}
                        //     langaugesUsed={job.languagesUsed}
                        //     bulletPoints={job.bulletPoints}
                        //     className="text-file-window"
                        // />
                    ))}
                </div>
            }
            {/* {workHistory.map((job) => (
                <div
                    key={job.id}
                    className={job.id % 2 ? "job-card-even" : "job-card-odd"}
                >
                    <h2 className="company-name">{job.companyName}</h2>
                    <h2
                        className={
                            job.id % 2
                                ? "company-name-even"
                                : "company-name-odd"
                        }
                    >
                        {job.companyName}
                    </h2>
                    <h3 className="position">{job.positionTitle}</h3>
                    <div className="job-details">
                        <div id="job-location">{job.location}</div>
                        <div id="job-date">
                            {job.startDate} - {job.endDate}
                        </div>
                    </div>
                    <ul className="job-list-container">
                        {job.bulletPoints?.map((item, index) => (
                            <li key={index} className="job-bullet-points">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))} */}
        </div>
    );
}

export default WindowsFolder;
