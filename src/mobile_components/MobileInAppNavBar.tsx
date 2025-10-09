import "../style/mobileAppStyle.css";

type MobileInAppNavBarProps = {
    appNavigateTo: (path: string, index: number) => void;
    companyImage?: string;
    appName: string;
    backButtonColor?: string;
};

export function MobileInAppNavBar({
    appNavigateTo,
    companyImage,
    appName,
    backButtonColor
}: MobileInAppNavBarProps) {
    return (
        <div id="in-app-nav-bar">
            <div
                onClick={() => {
                    appNavigateTo("MobileHomeScreen", 0);
                }}
                    id="back-button"
                    style={{ backgroundColor: backButtonColor}}
                >
                    {/* 
                    <div
                        style={{
                            width: 0,
                            height: 0,
                            borderTop: "20px solid transparent",
                            borderBottom: "20px solid transparent",
                            borderRight: "30px solid #000",
                            marginLeft: "30%",
                        }}
                    /> 
                    */}
                    <div id="back-button-text">{"⬅ Back"}</div>
            </div>
            {companyImage ? (
                <img src={companyImage} className="app-title-image" />
            ) : (
                <h2 className="app-title-text">{appName}</h2>
            )}
        </div>
    );
}
