// import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";

function LinkedInRecommendationsTextFile({
    index,
    closeWindow,
    person,
    bodyText,
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
                        <div className="title-bar-text">
                            {person}_review.txt
                        </div>
                    </div>
                    <div>
                        <div>{person}</div>
                        <div>
                            {bodyText.map((line: string, index: number) => (
                                <div key={index}>{line}</div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default LinkedInRecommendationsTextFile;
