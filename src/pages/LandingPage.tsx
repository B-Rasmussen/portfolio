import WorkHistory from "../components/WorkHistory";

type LandingPageProps = {
    navigateTo: (path: string) => void;
}

function LandingPage({navigateTo}: LandingPageProps) {
    return (
        <div>
            <button onClick={() => navigateTo("projects")}>Projects</button>
            <WorkHistory />
        </div>
    );
}
export default LandingPage;
