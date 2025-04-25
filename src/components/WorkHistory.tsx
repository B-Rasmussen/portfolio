import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";

function WorkHistory() {
    return (
        <div>
            {workHistory.map((job) => (
                <div key={job.id} className={job.id % 2 ? "job-card-even" : "job-card-odd"}>
                    <h2>{job.companyName}</h2>
                    <h3>{job.positionTitle}</h3>
                    <p>
                        {job.startDate} - {job.endDate}
                    </p>
                    <p>{job.location}</p>
                    <ul>
                        {job.bulletPoints?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default WorkHistory;
