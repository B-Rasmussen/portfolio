import zombie_gif from "../assets/zombies_project.gif";

type personalProjects = {
    id: number;
    projectName: string;
    description: string;
    technologies: Array<string>;
    projectURL?: string;
    image?: string;
    imageAlt?: string;
}

const personalProjects: personalProjects[] = [
    {
        id: 0,
        projectName: "WIP: Zombie survival game",
        description: "A endless zombie survival game created in Godot 4.",
        technologies: ["Godot 4", "GDScript"],
        image: zombie_gif,
        imageAlt: "Zombie survival game gif",
    },
    {
        id: 1,
        projectName: "Idle Clicker Game",
        description: "An idle clicker game created in React Native.",
        technologies: ["React Native", "JavaScript", "TypeScript"],
    },
    // {
    //     id: 3,
    //     projectName: "Wellness App",
    //     description: "A Wellness app created in React Native.",
    //     technologies: ["React Native", "JavaScript", "TypeScript"],
    // },
];

export default personalProjects;
