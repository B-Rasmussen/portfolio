type workHistory = {
    id: number;
    companyName: string;
    companyLogo?: string;
    companyLogoAlt?: string;
    positionTitle: string;
    startDate: string;
    endDate: string;
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
            // SE
            "Created Top 250 Multiplayer and Warzone Leaderboards for Call of Duty (CoD): Modern Warfare 3, allowing users to see the best players in the world and highlighting pro players from the Call of Duty Esport scene.",
            "Created Zombie Leaderboard for CoD: Modern Warfare 3, which allowed users to compare their progress against friends and the others in the CoD Community.",
            "Collaborated with team to bring stats and leaderboards screens to Call of Duty series allowing users to compare themselves to friends, favorite streamers, and top players in the community, increasing user engagement when comparing stats to others.",
            "Resolved styling and functionality issues for End User License Agreement for CoD: Modern Warfare 2 and Modern Warfare 3 producing easier to read legal agreement, helping company avoid potentially costly legal issues.",
            "Collaborated with marketing team to promote new features that were introduced with each season, creating Message of the Day highlighting new features (including Black Cell Battle Pass, Limited Time Game Modes) that were launched with each new season of Modern Warfare 2 and Modern Warfare 3.",
            // SDET
            "Designed, developed and maintained an internal QA testing framework with over 300 test cases for the CoD Companion App, Message of the Day, myCoD, and various game promotional websites (Tony Hawk Pro Skater, Crash Bandicoot, Spyro, etc).",
            "Knowledge share with the dev team so they understood Appium/Selenium and how to run the test scripts on their own branches.",
            "Updated and maintained internal docs for the Call of Duty Companion App, helping to prevent the team from having any gap in knowledge about the code base.",
            "Worked with the development team to ensure API data was appearing correctly using Postman.",
            "Reduced the number of builds rejected by the external QA team by more than 90% ensuring that updates were delivered on time.",
            "Resolved numerous small to medium priority bug fixes in CoD Companion App, allowing Dev team to focus on bigger features and app breaking bugs.",
            "Added accessibility labels to existing components in the CoD Companion App to create stable locators for the test scripts and helped users that have accessibility issues.",
            "Expanded on and maintained automation script for resizing images to be mobile / desktop friendly, reducing amount of time developers had to divert from more critical issues and features.",
            "Deployed testing framework and resizing image scripts to a remote mac mini, to run nightly testing on the latest feature branch and sent results to a dedicated slack channel.",
            "Increased Dev team efficiency by reducing turnaround time for discovered bugs, ensuring release deadline for each new app update was met.",
            "Managed all email/DMs from user inquiries regarding the app and responded in a timely manner.",
        ],
    },
    // {
    //     id: 1,
    //     companyName: "Activision Blizzard",
    //     companyLogoAlt: "Activision Blizzard Logo",
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
