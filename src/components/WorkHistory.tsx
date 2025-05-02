import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";

function WorkHistory() {
    return (
        <div>
            {workHistory.map((job) => (
                <div
                    key={job.id}
                    className={job.id % 2 ? "job-card-even" : "job-card-odd"}
                >
                    {/* <h2 className="company-name">{job.companyName}</h2> */}
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
            ))}
        </div>
    );
}

export default WorkHistory;
