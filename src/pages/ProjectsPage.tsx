import PersonalProjects from "../components/PersonalProjects";


type ProjectsPageProps = {
    navigateTo: (path: string) => void;
}

function ProjectsPage({navigateTo}: ProjectsPageProps) {
    return (
        <div>
            <button onClick={() => navigateTo("Landing")}>LandingPage</button>
            <PersonalProjects />
        </div>
    );
}
export default ProjectsPage;
