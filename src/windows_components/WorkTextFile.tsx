import TitleBarIcon from "../components/TitleBarIcon";
import "../style/workHistoryStyle.css";

type WorkTextFileProps = {
    index: number;
    closeWindow: (index: number) => void;
    companyName: string;
    companyLogo?: string;
    companyLogoAlt?: string;
    location: string;
    startDate: string;
    endDate: string;
    langaugesUsed?: string[];
    bulletPoints?: string[];
};

function WorkTextFile({
    index,
    closeWindow,
    companyName,
    companyLogo,
    companyLogoAlt,
    location,
    startDate,
    endDate,
    langaugesUsed,
    bulletPoints,
}: WorkTextFileProps) {
    return (
        <div>
            {
                <div className="text-file-window">
                    <TitleBarIcon closeWindow={closeWindow} index={index} />
                    <div className="title-bar-text">{companyName}.txt</div>
                    <div>
                        <h2 className="company-name">{companyName}</h2>
                        {companyLogo && (
                            <img
                                src={companyLogo}
                                alt={`${companyLogoAlt}`}
                                className="company-logo"
                            />
                        )}
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
