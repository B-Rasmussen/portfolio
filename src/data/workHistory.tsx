type workHistory = {
    id: number;
    companyName: string;
    companyLogo?: string;
    companyLogoAlt?: string;
    positionTitle: string;
    startDate: string;
    endDate?: string;
    location: string;
    languagesUsed: Array<string>;
    bulletPoints: Array<string>;
};

const workHistory: workHistory[] = [
    {
        id: 0,
        companyName: "Activision Blizzard",
        companyLogoAlt: "Activision Blizzard Logo",
        positionTitle: "Software Engineer",
        startDate: "January 2020",
        endDate: "January 2024",
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
        bulletPoints: [
            "Created Zombies leaderboard screen for Call of Duty: Modern Warfare III, allowing users to compare themselves against friends, their favorite streamers, and the top players in the community.",
            "Collaborated with the marketing team to promote new features that were introduced with each season, creating Mess of the Day highlighting new features (including Black Cell Battle Pass, Limited Time Game Modes) that were launched with each new season of Modern Warfare II and Modern Warfare III.",
            "Updated Top 250 Multiplayer and Warzone Leaderboards for Modern Warfare III, allowing users to see the best players in the world and highlighting pro players from the Call of Duty Esport scene.",
            "Designed, developed, and maintained an internal QA testing framework with over 300 test cases for the Call of Duty Companion App, Message of the Day, myCod, and various game promotional websites (Tony Hawk Pro Skater, Crash Bandicoot, Spyro, etc).",
            "Reduced the number of builds rejecteed by the external QA team by more than 90% ensuring that updates were delivered on time.",
            "Resolved numerous small to medium priority bug fixes in the Call of Duty Companion App, allowing the development team to focus on bigger features and app breaking bugs.",
        ],
    },
    {
        id: 1,
        companyName: "SQA Squared",
        positionTitle: "Junior Software Engineer in Test",
        companyLogoAlt: "SQA Squared Logo",
        startDate: "May 2019",
        endDate: "January 2020",
        location: "Los Alamitos, California",
        languagesUsed: ["Python", "JavaScript", "Java", "Selenium", "Appium"],
        bulletPoints: [
            "Maintained web testing automation for Ticketmaster, ensuring website remained bug-free, maintaining a hassle-free ticket buying process for customers.",
            "Maintained app testing automation for OSHI Health, helping the dev team produce the best possible app while in development, and preventing any bugs from being found in production.",
            "Resolved issue regarding Android permission popups form blocking OSHI Health app ttesting, elimintating a major issue that prevented automation from accurately logging bugs and delaying fixes from the dev team.",
        ],
    },
    {
        id: 2,
        companyName: "Moving Mindz",
        companyLogoAlt: "Moving Mindz Logo",
        positionTitle: "Web Developer / Tutor",
        startDate: "June 2018",
        endDate: "March 2020",
        location: "Long Beach, California",
        languagesUsed: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL"],
        bulletPoints: [
            "Created front and back end for the Company's website. This allowed easy access for interested schools, potential new parents, and current parents to obtain more information about available after school programs and 1 on 1 tutoring sessions.",
            "Led after school clubs for children, teaching Python and helping build positive relations with partner schools and parents of children enrolled in classes.",
        ],
    },
];

export default workHistory;
