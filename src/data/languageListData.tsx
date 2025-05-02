type LanguagesList = {
    id: number;
    languageName: string;
    image?: string;
    imageAlt?: string;
}

const languagesList: LanguagesList[] = [
    {
        id: 1,
        languageName: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        imageAlt: "React",
    },
    {
        id: 2,
        languageName: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        imageAlt: "JavaScript",
    },
    {
        id: 3,
        languageName: "TypeScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        imageAlt: "TypeScript",
    },
    {
        id: 4,
        languageName: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        imageAlt: "HTML",
    },
    {
        id: 5,
        languageName: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        imageAlt: "CSS",
    },
    {
        id: 6,
        languageName: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        imageAlt: "Node.js",
    },
    {
        id: 7,
        languageName: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        imageAlt: "Python",
    },
    {
        id: 8,
        languageName: "Selenium",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        imageAlt: "Selenium",
    },
    {
        id: 9,
        languageName: "Appium",
        image: "https://img.jsdelivr.com/github.com/appium.png",
        imageAlt: "Appium",
    },
    {
        id: 10,
        languageName: "Playwright",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
        imageAlt: "Playwright",
    },
];

export default languagesList;
