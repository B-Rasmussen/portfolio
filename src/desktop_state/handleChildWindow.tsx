import { useState } from "react";
import { workHistoryData } from "../data/workHistory";
import { personalProjectsData } from "../data/personalProjects";
import { linkedinRecommendationsData } from "../data/linkedinRecommendations";

export function handleChildWindow() {
    const [isJobWindowOpen, setIsJobWindowOpen] = useState(
        Array(workHistoryData.length).fill(false)
    );

    const [isPersonalProjectWindowOpen, setIsPersonalProjectWindowOpen] =
        useState(Array(personalProjectsData.length).fill(false));

    const [isLinkedInRecommendationOpen, setIsLinkedInRecommendationOpen] =
        useState(Array(linkedinRecommendationsData.length).fill(false));

    const handleWorkHistoryOpen = (index: number) => {
        setIsJobWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleProjectsOpen = (index: number) => {
        setIsPersonalProjectWindowOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleRecommendationsOpen = (index: number) => {
        setIsLinkedInRecommendationOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return {
        isJobWindowOpen,
        isPersonalProjectWindowOpen,
        isLinkedInRecommendationOpen,
        handleWorkHistoryOpen,
        handleProjectsOpen,
        handleRecommendationsOpen,
    };
}
