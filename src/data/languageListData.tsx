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
];

export default languagesList;
