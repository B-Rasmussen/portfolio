type desktopFileIconProps = {
    fileName: string;
    folderTitle: string;
};

export function DesktopFileIcon({
    fileName,
    folderTitle,
}: desktopFileIconProps) {
    return (
        <div>
            <div className="text-file-icon">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
            </div>
            {folderTitle === "Work History" ? (
                <div>{fileName.replace(/\ /g, "_")}.txt</div>
            ) : null}
            {folderTitle === "Personal Projects" ? (
                <div>{fileName.replace(/\ /g, "_")}.proj</div>
            ) : null}
            {folderTitle === "LinkedIn Recommendations" ? (
                <div>{fileName.replace(/\ /g, "_")}_review.txt</div>
            ) : null}
        </div>
    );
}
