import "../style/desktopFolderIconStyle.css";

type FolderIconProps = {
    onClick: () => void;
    folderName: string;
};

function FolderIcon({ onClick, folderName }: FolderIconProps) {
    return (
        <div onClick={onClick} className="folder-container">
            <div className="folder-icon" />
            <div className="folder-name">{folderName}</div>
        </div>
    );
}

export default FolderIcon;
