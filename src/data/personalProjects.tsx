import zombie_gif from "../assets/zombies_project.gif";
import godot_icon from "../assets/godot_icon.svg";

type personalProjects = {
    id: number;
    projectName: string;
    projectNameAbbr: string;
    projectAppLogo?: string;
    buttonColor?: string;
    description: string[];
    technologies: Array<string>;
    projectURL?: string;
    image?: string;
    imageAlt?: string;
};

const personalProjects: personalProjects[] = [
    {
        id: 0,
        projectName: "Zombie survival game",
        projectNameAbbr: "Zombies",
        projectAppLogo: godot_icon,
        buttonColor: "#640404",
        description: ["A endless zombie survival game created in Godot 4."],
        technologies: ["Godot 4", "GDScript"],
        image: zombie_gif,
        imageAlt: "Zombie survival game gif",
    },
    // {
    //     id: 1,
    //     projectName: "Idle Clicker Game",
    //     projectNameAbbr: "Idle Game",
    //     description: ["An idle clicker game created in React Native."],
    //     technologies: ["React Native", "JavaScript", "TypeScript"],
    // },
    {
        id: 2,
        projectName: "Wellness App (name tbd)",
        projectNameAbbr: "Health",
        buttonColor: "#004d40",
        description: [
            "A wellness app created in React Native.",
            "The goal of this project is to create an app to help users track their chronic illness symptoms",
            "Assisting users by tracking and displaying symptoms they recorded over the past day, week, month, year, etc",
        ],
        technologies: ["React Native", "JavaScript", "TypeScript"],
    },
];

export default personalProjects;
