import personalProjects from "../data/personalProjects";
// import zombieGameChangeLog from "../data/zombieGameChangeLog";

function PersonalProjects() {
    return (
        <div>
            {personalProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <h2>{project.projectName}</h2>
                    <h3>{project.technologies}</h3>
                    <p>{project.description}</p>
                    {project.image && <img src={project.image} alt={project.imageAlt} />}
                </div>
            ))}
        </div>
    );
}

export default PersonalProjects;
