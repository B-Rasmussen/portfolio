import personalProjects from "../data/personalProjects";

function PersonalProjects() {
    return (
        <div>
            {personalProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <h2>{project.projectName}</h2>
                    <h3>{project.technologies}</h3>
                    <p>{project.description}</p>
                    <p>{project.image}</p>
                </div>
            ))}
        </div>
    );
}

export default PersonalProjects;
