import zombie_gif from "../assets/zombies_project.gif";

type ChangeLog = {
    id: number;
    versionNumber: string;
    changeLog: Array<string>;
    additionalInfo?: Array<string>;
    image?: string;
    imageAlt?: string;
}

const zombieGameChangeLog: ChangeLog[] = [
    {
        id: 1,
        versionNumber: '0.1',
        changeLog: [
            "Weapon, player, and zombie stats were hardcoded. 🫣",
            "Added move and shoot mechanics to the game for controller and keyboard and mouse",
        ],
    },
    {
        id: 2,
        versionNumber: '0.1.1',
        changeLog: [
            "Added placeholder sound effects for shooting and reloading",
            "Added a doom style reload animation",
            "Added raycast to detect when an enemy is hit"
        ],
    },
    {
        id: 3,
        versionNumber: '0.2',
        changeLog: [
            "Added world lighting",
            "Enemy spawn points",
            "Logic for zombies to continuously spawn and chase the player.",
            "New gun model with a raycasted laser that helped the players to aim",
            "Laser turns off when gun is off screen",
        ],
        image: zombie_gif,
        imageAlt: "zombie gif",
    },
    {
        id: 4,
        versionNumber: '0.3',
        changeLog: [
            "Rewrote the logic for both enemies and guns to make use of the godot resource (similar to blueprints in Unreal Engine)",

        ],
        additionalInfo: []
    }
];

export default zombieGameChangeLog;
