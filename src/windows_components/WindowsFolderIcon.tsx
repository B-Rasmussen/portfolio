import "../style/windowsFolderIconStyle.css";

type WindowsFolderIconProps = {
    onClick: () => void;
    folderName: string;
};

function WindowsFolderIcon({ onClick, folderName }: WindowsFolderIconProps) {
    return (
        <div onClick={onClick} className="folder-container">
            <div className="folder-icon" />
            <text className="folder-name">{folderName}</text>
        </div>
    );
}

export default WindowsFolderIcon;
