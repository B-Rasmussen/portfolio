type MobileInAppNavBarProps = {
    appNavigateTo: (path: string, index: number) => void;
};

export function MobileInAppNavBar({ appNavigateTo }: MobileInAppNavBarProps) {
    return (
        <>
            <div
                onClick={() => {
                    appNavigateTo("MobileHomeScreen", 0);
                }}
                style={{ height: "auto", background: "black", }}
            >
                Go Back
            </div>
        </>
    );
}
