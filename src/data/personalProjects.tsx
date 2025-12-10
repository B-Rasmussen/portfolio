import zombie_gif from "../assets/personalProjects/zombies_project.gif";
import health_app from "../assets/personalProjects/health_app_homescreen.png";
import health_app_monthly_view from "../assets/personalProjects/health_app_monthly_view.png";
import godot_icon from "../assets/godot_icon.svg";
import { useTranslation } from "react-i18next";

type personalProjects = {
    id: number;
    projectName: string;
    projectNameAbbr: string;
    projectAppLogo?: string;
    buttonColor?: string;
    description: string[];
    link?: string;
    linkName?: string;
    technologies: Array<string>;
    projectURL?: string;
    image?: Array<string>;
    imageAlt?: string;
};

export const personalProjectsData: Omit<
    personalProjects,
    "description" | "imageAlt"
>[] = [
    {
        id: 0,
        projectName: "Zombie survival game",
        projectNameAbbr: "Zombies",
        projectAppLogo: godot_icon,
        buttonColor: "#640404",
        technologies: ["Godot 4", "GDScript"],
        image: [zombie_gif],
    },
    {
        id: 2,
        projectName: "Wellness App (name tbd)",
        projectNameAbbr: "Health",
        buttonColor: "#004d40",
        link: "https://github.com/B-Rasmussen/symptom-tracker",
        linkName: "Symptom Tracker Repo",
        technologies: ["React Native", "JavaScript", "TypeScript"],
        image: [health_app, health_app_monthly_view],
    },
];

export function usePersonalProjects(): personalProjects[] {
    const { t } = useTranslation();
    return [
        {
            id: 0,
            projectName: "Zombie survival game",
            projectNameAbbr: "Zombies",
            projectAppLogo: godot_icon,
            buttonColor: "#640404",
            description: [t("personalProjects.zombies.description")],
            technologies: ["Godot 4", "GDScript"],
            image: [zombie_gif],
            imageAlt: t("personalProjects.zombies.imageAlt"),
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
            description: [t("personalProjects.wellnessApp.description")],
            link: "https://github.com/B-Rasmussen/symptom-tracker",
            linkName: "Symptom Tracker Repo",
            technologies: ["React Native", "JavaScript", "TypeScript"],
            image: [health_app, health_app_monthly_view],
            imageAlt: t("personalProjects.wellnessApp.imageAlt"),
        },
    ];
}

export default personalProjectsData;
