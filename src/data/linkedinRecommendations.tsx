interface Recommendations {
    id: number;
    person: string;
    publishedDate?: string;
    bodyText: string;
}

const linkedinRecommendations: Recommendations[] = [
    {
        id: 1,
        person: "Tim Jung",
        bodyText:
            "I worked with Brandon on engineering projects at Activision and he's a great engineer. But our story actually goes back further than that. I originally met Brandon because he was an enthusiastic regular attendee of LA's Community Hack Night - a monthly meeting of engineering and tech devotees - which I hosted on Riot Games campus (while I was still an Activision employee). Brandon had a sincere interest in Call of Duty and engineering. And he set out to prove it. One night at Community Hack Night he came up to me and showed me a project he had built himself - it took the Call of Duty Companion App (the product I worked on at Activision) and automated a ton of tests on it. Frankly - I didn't even know it was possible to do something like that without the source code. I was astonished. Brandon had gone out of his way in his free time to create something genuinely useful for a project I worked on simply because he cared about it. I went and showed it to my director the next day and he was impressed too. He decided to interview Brandon and ultimately hired him to join our team working on the Call of Duty app. \nBrandon went on to build out a suite of excellent tests for the project that helped us clean up our low app store rating and raise it to 4.8 stars. Then he transitioned into a fully fledged engineer delivering features for players. Through his ability to weave his passions together with his ambitious drive to continuously improve his craft, Brandon has demonstrated a proven track record of materializing shipped engineering output. He's a rare example of someone who will find a way to forge a path even when a path is not obvious. You absolutely want Brandon as a part of any team he's interested in putting his mind to.",
    },
    {
        id: 2,
        person: "Shadae Kawaguchi",
        bodyText:
            "I have had the pleasure of working with Brandon over the past few years, and have worked on multiple projects together several of which can be viewed in-game. Working with Brandon on those projects has been a seamless process. As a developer, he would take the designs we've provided and implement them in code to bring them to life. He has a breadth of knowledge and experience and is always willing to help whenever possible and answer any questions I come up with. His humor and positive attitude made him so easy to work with, and he would be an asset to any team.",
    },
];

export default linkedinRecommendations;
