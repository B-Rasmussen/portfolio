import "../style/desktopFolderIconStyle.css";

type FolderIconProps = {
    onClick: () => void;
    folderName: string;
};

function FolderIcon({ onClick, folderName }: FolderIconProps) {
    return (
        <div onDoubleClick={onClick} className="folder-container">
            <div className="folder-icon" />
            <text className="folder-name">{folderName}</text>
        </div>
    );
}

export default FolderIcon;
