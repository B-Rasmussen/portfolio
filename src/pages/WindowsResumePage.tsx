import { useState } from "react";
import "../style/windowsResumeStyle.css";

function WindowsResumePage() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleDoubleClick = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };
    return (
        <div className="windows-container">
            <div onDoubleClick={handleDoubleClick} className="text-file-container">
                <div className="text-file-icon" />
                <text>example.txt</text>
            </div>

            {isWindowOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "black",
                        border: "1px solid gray",
                        padding: "20px",
                        zIndex: 1000,
                        height: "90vh",
                    }}
                >
                    <h2>This is a new window inside the current window!</h2>
                    <p>Content of your new window goes here.</p>
                    <button
                        style={{ position: "fixed", top: "1%", right: "1%" }}
                        onClick={closeWindow}
                    >
                        X
                    </button>
                </div>
            )}
            <div id="computer-model">🍎 Brandotosh</div>
        </div>
    );
}
export default WindowsResumePage;
