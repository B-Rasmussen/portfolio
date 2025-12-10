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
                <text>{fileName.replace(/\ /g, "_")}.txt</text>
            ) : null}
            {folderTitle === "Personal Projects" ? (
                <text>{fileName.replace(/\ /g, "_")}.proj</text>
            ) : null}
            {folderTitle === "LinkedIn Recommendations" ? (
                <text>{fileName.replace(/\ /g, "_")}_review.txt</text>
            ) : null}
        </div>
    );
}
