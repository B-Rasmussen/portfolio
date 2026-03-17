import zombie_gif from "../assets/personalProjects/zombieGame/zombies_project.gif";
import health_home from "../assets/personalProjects/healthApp/health_home.png";
import health_monthly_view from "../assets/personalProjects/healthApp/health_monthly_view.png";
import health_log_entry from "../assets/personalProjects/healthApp/health_log_entry.png";
import health_report from "../assets/personalProjects/healthApp/health_report.png";
import health_settings from "../assets/personalProjects/healthApp/health_settings.png";
import health_weekly_view from "../assets/personalProjects/healthApp/health_weekly_view.png";
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
        image: [
            health_home,
            health_log_entry,
            health_weekly_view,
            health_monthly_view,
            health_report,
            health_settings,
        ],
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
            image: [
                health_home,
                health_log_entry,
                health_weekly_view,
                health_monthly_view,
                health_report,
                health_settings,
            ],
            imageAlt: t("personalProjects.wellnessApp.imageAlt"),
        },
    ];
}

export default personalProjectsData;
