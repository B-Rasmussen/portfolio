import zombie_gif from "../assets/personalProjects/zombies_project.gif";
import { useTranslation } from "react-i18next";

type ChangeLog = {
    id: number;
    versionNumber: string;
    changeLog: Array<string>;
    additionalInfo?: Array<string>;
    image?: string;
    imageAlt?: string;
};

export const zombieGameChangeLogData: Omit<ChangeLog, "changeLog" | "image">[] =
    [
        {
            id: 1,
            versionNumber: "0.1",
        },
        {
            id: 2,
            versionNumber: "0.2",
            imageAlt: "zombie gif",
        },
        {
            id: 3,
            versionNumber: "0.3",
            additionalInfo: [],
        },
    ];

export function useZombieGameChangeLog(): ChangeLog[] {
    const { t } = useTranslation();
    return [
        {
            id: 1,
            versionNumber: "0.1",
            changeLog: [t("zombiesChangeLog.version0.1.changeLog")],
        },
        {
            id: 2,
            versionNumber: "0.2",
            changeLog: [t("zombiesChangeLog.version0.2.changeLog")],
            image: zombie_gif,
            imageAlt: "zombie gif",
        },
        {
            id: 3,
            versionNumber: "0.3",
            changeLog: [t("zombiesChangeLog.version0.3.changeLog")],
            additionalInfo: [],
        },
    ];
}
export default zombieGameChangeLogData;
