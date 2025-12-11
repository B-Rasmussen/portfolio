import activisionLogo from "../assets/companyLogos/activision/activisionLogo.svg";
import activisionAppIcon from "../assets/companyLogos/activision/activisionAppIcon.ico";
import sqaSquaredLogo from "../assets/companyLogos/sqa_squared/sqaSquaredLogo.png";
import sqaSquaredAppLogo from "../assets/companyLogos/sqa_squared/sqaSquaredAppLogo.png";
import movingMindzLogo from "../assets/companyLogos/moving_mindz/movingMindzLogo.svg";
import movingMindzAppLogo from "../assets/companyLogos/moving_mindz/movingMindzAppLogo.png";
import { useTranslation } from "react-i18next";

type workHistory = {
    id: number;
    companyName: string;
    companyNameAbbr: string;
    companyLogo: string;
    companyLogoAlt: string;
    companyAppIcon?: string;
    companyColor: string;
    positionTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    languagesUsed: Array<string>;
    bulletPoints: Array<string>;
};

export const workHistoryData: Omit<
    workHistory,
    | "positionTitle"
    | "startDate"
    | "endDate"
    | "location"
    | "languagesUsed"
    | "bulletPoints"
>[] = [
    {
        id: 0,
        companyName: "Activision Blizzard",
        companyNameAbbr: "Activsion",
        companyLogo: activisionLogo,
        companyLogoAlt: "Activision Blizzard Logo",
        companyAppIcon: activisionAppIcon,
        companyColor: "#1e71e7",
    },
    {
        id: 1,
        companyName: "SQA Squared",
        companyNameAbbr: "SQA\u00B2",
        companyLogo: sqaSquaredLogo,
        companyLogoAlt: "SQA Squared Logo",
        companyAppIcon: sqaSquaredAppLogo,
        companyColor: "#ff8800ff",
    },
    {
        id: 2,
        companyName: "Moving Mindz",
        companyNameAbbr: "MMZ",
        companyLogo: movingMindzLogo,
        companyLogoAlt: "Moving Mindz Logo",
        companyAppIcon: movingMindzAppLogo,
        companyColor: "#2d9305",
    },
];

export function useWorkHistory(): workHistory[] {
    const { t } = useTranslation();
    return [
        {
            id: 0,
            companyName: "Activision Blizzard",
            companyNameAbbr: "ATVI",
            companyLogo: activisionLogo,
            companyLogoAlt: "Activision Blizzard Logo",
            companyAppIcon: activisionAppIcon,
            companyColor: "#1e71e7",
            positionTitle: t("work.activision.positionTitle"),
            startDate: t("work.activision.startDate"),
            endDate: t("work.activision.endDate"),
            location: "Santa Monica, California",
            languagesUsed: [
                "JavaScript",
                "React",
                "React Native",
                "HTML",
                "CSS",
                "Python",
                "Selenium",
                "Appium",
                "Shell Scripting",
            ],
            bulletPoints: [t("work.activision.bulletPoints")],
        },
        // {
        //     id: 1,
        //     companyName: "Activision Blizzard",
        //     companyNameAbbr: "ATVI",
        //     companyLogo: activisionLogo,
        //     companyLogoAlt: "Activision Blizzard Logo",
        //     companyAppIcon: activisionAppIcon,
        //     companyColor: "#1e71e7",
        //     positionTitle: "Software Engineer",
        //     startDate: "January 2020",
        //     endDate: "January 2024",
        //     location: "Santa Monica, California",
        //     languagesUsed: [
        //         "JavaScript",
        //         "React",
        //         "React Native",
        //         "HTML",
        //         "CSS",
        //         "Python",
        //         "Selenium",
        //         "Appium",
        //         "Shell Scripting",
        //     ],
        //     bulletPoints: [
        //         "Designed, developed and maintained an internal QA testing framework with over 300 test cases for the CoD Companion App, Message of the Day, myCoD, and various game promotional websites (Tony Hawk Pro Skater, Crash Bandicoot, Spyro, etc).",
        //         "Knowledge share with the dev team so they understood Appium/Selenium and how to run the test scripts on their own branches.",
        //         "Updated and maintained internal docs for the Call of Duty Companion App, helping to prevent the team from having any gap in knowledge about the code base.",
        //         "Worked with the development team to ensure API data was appearing correctly using Postman.",
        //         "Reduced the number of builds rejected by the external QA team by more than 90% ensuring that updates were delivered on time.",
        //         "Resolved numerous small to medium priority bug fixes in CoD Companion App, allowing Dev team to focus on bigger features and app breaking bugs.",
        //         "Added accessibility labels to existing components in the CoD Companion App to create stable locators for the test scripts and helped users that have accessibility issues.",
        //         "Expanded on and maintained automation script for resizing images to be mobile / desktop friendly, reducing amount of time developers had to divert from more critical issues and features.",
        //         "Deployed testing framework and resizing image scripts to a remote mac mini, to run nightly testing on the latest feature branch and sent results to a dedicated slack channel.",
        //         "Increased Dev team efficiency by reducing turnaround time for discovered bugs, ensuring release deadline for each new app update was met.",
        //         "Managed all email/DMs from user inquiries regarding the app and responded in a timely manner.",
        //     ],
        // },
        {
            id: 1,
            companyName: "SQA Squared",
            companyNameAbbr: "SQA\u{00B2}",

            companyLogo: sqaSquaredLogo,
            companyLogoAlt: "SQA Squared Logo",
            companyAppIcon: sqaSquaredAppLogo,
            companyColor: "#ff8800ff",
            positionTitle: t("work.sqaSquared.positionTitle"),
            startDate: t("work.sqaSquared.startDate"),
            endDate: t("work.sqaSquared.endDate"),
            location: "Los Alamitos, California",
            languagesUsed: [
                "Python",
                "JavaScript",
                "Java",
                "Selenium",
                "Appium",
            ],
            bulletPoints: [t("work.sqaSquared.bulletPoints")],
        },
        {
            id: 2,
            companyName: "Moving Mindz",
            companyNameAbbr: "MMZ",
            companyLogo: movingMindzLogo,
            companyLogoAlt: "Moving Mindz Logo",
            companyAppIcon: movingMindzAppLogo,
            companyColor: "#2d9305",
            positionTitle: t("work.movingMindz.positionTitle"),
            startDate: t("work.movingMindz.startDate"),
            endDate: t("work.movingMindz.endDate"),
            location: "Long Beach, California",
            languagesUsed: [
                "HTML",
                "CSS",
                "JavaScript",
                "JQuery",
                "PHP",
                "MySQL",
            ],
            bulletPoints: [t("work.movingMindz.bulletPoints")],
        },
    ];
}

export default workHistoryData;
