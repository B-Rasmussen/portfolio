import { useState } from "react";
import linkedinRecommendations from "../data/linkedinRecommendations";
import { MobileInAppNavBar } from "./MobileInAppNavBar";

type MobileReviewsAppProps = {
    appNavigateTo: (path: string, index: number) => void;
};

export function MobileReviewsApp({ appNavigateTo }: MobileReviewsAppProps) {
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
            <MobileInAppNavBar appNavigateTo={appNavigateTo} />
            {linkedinRecommendations.map((item: any, index: number) => (
                <div
                    key={item.id}
                    onClick={() => {
                        handleReviewExpand(index);
                    }}
                    className=""
                >
                    <h4>{item.person}</h4>
                    <div>
                        {!isExpanded[index]
                            ? (item.bodyText[0] + item.bodyText[1]).slice(
                                0,
                                90
                            ) + "..."
                            : item.bodyText}
                    </div>
                </div>
            ))}
        </>
    );
}
