// import workHistory from "../data/workHistory";
import "../style/workHistoryStyle.css";

type PersonalProjectTextFileProps = {
    index: number;
    closeWindow: (index: number) => void;
    projectName: string;
    technologies: string[];
    description: string;
    image?: string;
    imageAlt?: string;
};

function PersonalProjectTextFile({
    index,
    closeWindow,
    projectName,
    technologies,
    description,
    image,
    imageAlt,
}: PersonalProjectTextFileProps) {
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
                        <div className="title-bar-text">{projectName}.txt</div>
                    </div>
                    <div>
                        <div>{description}</div>
                        <div>
                            {technologies?.map(
                                (item: string, index: number) => (
                                    <span key={index}>
                                        {item}
                                        {index < technologies.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                )
                            )}
                        </div>
                        <div>{image && <img src={image} alt={imageAlt} />}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default PersonalProjectTextFile;
