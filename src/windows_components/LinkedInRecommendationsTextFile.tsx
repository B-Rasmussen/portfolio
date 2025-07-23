import TitleBarIcon from "../components/TitleBarIcon";
import "../style/workHistoryStyle.css";

type LinkedInRecommendationsTextFileProps = {
    index: number;
    closeWindow: (index: number) => void;
    person: string;
    bodyText: string[];
};

function LinkedInRecommendationsTextFile({
    index,
    closeWindow,
    person,
    bodyText,
}: LinkedInRecommendationsTextFileProps) {
    return (
        <div>
            {
                <div className="text-file-window">
                    <TitleBarIcon closeWindow={closeWindow} index={index} />
                    <div className="title-bar-text">{person}_review.txt</div>
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
