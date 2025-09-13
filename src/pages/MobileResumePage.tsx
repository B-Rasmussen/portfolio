type NavBarProps = {
    navigateTo: (path: string) => void;
};

function MobileResumePage({ navigateTo }: NavBarProps) {
    return (
        <div>
            <div>hello there</div>
            <div
                className="left-side-item static-page"
                onClick={() => navigateTo("WorkHistory")}
            >
                Static Page
            </div>
        </div>
    );
}

export default MobileResumePage;
