import { useTranslation } from "react-i18next";
type Recommendations = {
    id: number;
    person: string;
    publishedDate?: string;
    bodyText: Array<string>;
};

export const linkedinRecommendationsData: Omit<Recommendations, "bodyText">[] =
    [
        {
            id: 0,
            person: "Tim Jung",
        },
        { id: 1, person: "Shadae Kawaguchi" },
    ];

export function useLinkedinRecommendations(): Recommendations[] {
    const { t } = useTranslation();
    return [
        {
            id: 0,
            person: "Tim Jung",
            bodyText: [t("linkedinRecommendations.timJung.bodyText")],
        },
        {
            id: 1,
            person: "Shadae Kawaguchi",
            bodyText: [t("linkedinRecommendations.shadaeKawaguchi.bodyText")],
        },
    ];
}

export default linkedinRecommendationsData;
