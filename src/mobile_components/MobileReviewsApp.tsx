import { useState } from "react";
import { useLinkedinRecommendations } from "../data/linkedinRecommendations";
import { MobileInAppNavBar } from "./MobileInAppNavBar";
import { useTranslation } from "react-i18next";

type MobileReviewsAppProps = {
    appNavigateTo: (path: string, index: number) => void;
};

export function MobileReviewsApp({ appNavigateTo }: MobileReviewsAppProps) {
    const { t } = useTranslation();
    const linkedinRecommendations = useLinkedinRecommendations();
    const [isExpanded, setIsExpanded] = useState(
        Array(linkedinRecommendations.length).fill(false)
    );

    const handleReviewExpand = (index: number) => {
        setIsExpanded((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <>
            <MobileInAppNavBar
                appNavigateTo={appNavigateTo}
                appName={t("linkedinRecommendations.reviews")}
                backButtonColor="#9fa200ff"
            />
            {linkedinRecommendations.map((item: any, index: number) => (
                <div
                    key={item.id}
                    onClick={() => {
                        handleReviewExpand(index);
                    }}
                    className="app-body"
                >
                    <div className="reviewer-headline">
                        <h4 className="reviewer-name">{item.person}</h4>
                        <h4 className="reviewer-rating">
                            {t("textFiles.rating")}: ⭐⭐⭐⭐⭐
                        </h4>
                    </div>
                    <div className="review-body">
                        {!isExpanded[index]
                            ? (item.bodyText[0] + item.bodyText[1]).slice(
                                  0,
                                  90
                              ) + "...see more"
                            : item.bodyText}
                    </div>
                    {index < linkedinRecommendations.length - 1 ? (
                        <div className="review-divider" />
                    ) : null}
                </div>
            ))}
        </>
    );
}
