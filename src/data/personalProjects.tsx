import zombie_gif from "../assets/zombies_project.gif";

interface personalProjects {
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
        id: 1,
        projectName: "Zombie survival game",
        description: "A endless zombie survival game created in Godot 4.",
        technologies: ["Godot 4", "GDScript"],
        image: zombie_gif,
    },
    {
        id: 2,
        projectName: "Idle Clicker Game",
        description: "An idle clicker game created in React Native.",
        technologies: ["React Native", "JavaScript", "TypeScript"],
    },
    {
        id: 3,
        projectName: "Wellness App",
        description: "A Wellness app created in React Native.",
        technologies: ["React Native", "JavaScript", "TypeScript"],
    },
];

export default personalProjects;
