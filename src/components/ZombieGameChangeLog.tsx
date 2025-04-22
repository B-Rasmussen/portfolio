import zombieGameChangeLog from "../data/zombieGameChangeLog";

function PersonalProjects() {
    return (
        <div>
            <h2>Zombie game</h2>
            {zombieGameChangeLog.map((project) => (
                <div key={project.id} className="project-card">
                    <h3>Version Number: {project.versionNumber}</h3>
                    <ul>
                        {project.changeLog.map((changeLog) => (
                            <li>{changeLog}</li>
                        ))}
                    </ul>

                    {project.additionalInfo && (
                        <p>{project.additionalInfo.join(". ")}</p>
                    )}
                    {project.image && (
                        <img src={project.image} alt={project.imageAlt} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default PersonalProjects;
