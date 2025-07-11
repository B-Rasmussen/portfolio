// import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";

// TODO: move title bar to a separate component
// TODO: add company logo image?
// TODO: Create 3 different text files for work history, personal projects, and LinkedIn recommendations?

function WorkTextFile({
    index,
    closeWindow,
    companyName,
    location,
    startDate,
    endDate,
    langaugesUsed,
    bulletPoints,
}: any) {
    return (
        <div>
            {
                <div className="text-file-window">
                    <div
                        className="title-bar-button"
                        onClick={() => {
                            closeWindow(index);
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
                        <div className="title-bar-text">{companyName}.txt</div>
                    </div>
                    <div>
                        <div>{location}</div>
                        <div>
                            {startDate} - {endDate}
                        </div>
                        <div>
                            {langaugesUsed?.map(
                                (item: string, index: number) => (
                                    <span key={index}>
                                        {item}
                                        {index < langaugesUsed.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                )
                            )}
                        </div>
                        <ul className="job-list-container">
                            {bulletPoints?.map((item: any, index: any) => (
                                <li key={index} className="job-bullet-points">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
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

export default WorkTextFile;
