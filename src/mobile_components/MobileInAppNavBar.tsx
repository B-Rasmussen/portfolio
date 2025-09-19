import '../style/mobileAppStyle.css'

type MobileInAppNavBarProps = {
    appNavigateTo: (path: string, index: number) => void;
    companyImage?: string;
    appName: string;
};

export function MobileInAppNavBar({
    appNavigateTo,
    companyImage,
    appName,
}: MobileInAppNavBarProps) {
    return (
        <div id='in-app-nav-bar'>
            <div
                onClick={() => {
                    appNavigateTo("MobileHomeScreen", 0);
                }}
                id="back-button"
            >
                Go Back
            </div>
            {companyImage ? (
                <img src={companyImage} className='app-title-image'/>
            ) : (
                <h2 className='app-title-text'>{appName}</h2>
            )}
        </div>
    );
}
