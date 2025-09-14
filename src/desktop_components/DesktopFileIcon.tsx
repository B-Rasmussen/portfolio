type desktopFileIconProps = {
    fileName: string;
    folderTitle: string;
};

export function DesktopFileIcon({ fileName, folderTitle }: desktopFileIconProps) {
    return (
        <div>
            <div className="text-file-icon">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
            </div>
            {folderTitle === "Work History" ? <text>{fileName}.txt</text> : null}
            {folderTitle === "Personal Projects" ? <text>{fileName}.proj</text> : null}
            {folderTitle === "LinkedIn Recommendations" ? <text>{fileName}_review.txt</text> : null}
        </div>
    );
}
