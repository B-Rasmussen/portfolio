import zombie_gif from "../assets/zombies_project.gif";

type personalProjects = {
    id: number;
    projectName: string;
    projectNameAbbr: string;
    projectAppLogo?: string;
    // description: string;
    description: string[];
    technologies: Array<string>;
    projectURL?: string;
    image?: string;
    imageAlt?: string;
};

const personalProjects: personalProjects[] = [
    {
        id: 0,
        projectName: "WIP: Zombie survival game",
        projectNameAbbr: "Zombies",
        // description: "A endless zombie survival game created in Godot 4.",
        description: ["A endless zombie survival game created in Godot 4."],
        technologies: ["Godot 4", "GDScript"],
        image: zombie_gif,
        imageAlt: "Zombie survival game gif",
    },
    // {
    //     id: 1,
    //     projectName: "Idle Clicker Game",
    //     description: ["An idle clicker game created in React Native."],
    //     technologies: ["React Native", "JavaScript", "TypeScript"],
    // },
    {
        id: 2,
        projectName: "Wellness App (name tbd)",
        projectNameAbbr: "Health",
        description: [
            "A wellness app created in React Native.",
            "The goal of this project is to create an app to help users track their chronic illness symptoms",
            "Assisting users by tracking and displaying symptoms they recorded over the past day, week, month, year, etc",
        ],
        technologies: ["React Native", "JavaScript", "TypeScript"],
    },
];

export default personalProjects;
