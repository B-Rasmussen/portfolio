import { useState } from "react";
import workHistory from "../data/workHistory";
import personalProjects from "../data/personalProjects";
import linkedinRecommendations from "../data/linkedinRecommendations";

export function handleChildWindow() {
    const [isJobWindowOpen, setIsJobWindowOpen] = useState(
        Array(workHistory.length).fill(false)
    );

    const [isPersonalProjectWindowOpen, setIsPersonalProjectWindowOpen] =
        useState(Array(personalProjects.length).fill(false));

    const [isLinkedInRecommendationOpen, setIsLinkedInRecommendationOpen] =
        useState(Array(linkedinRecommendations.length).fill(false));

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
        workHistory,
        personalProjects,
        linkedinRecommendations,
        isJobWindowOpen,
        isPersonalProjectWindowOpen,
        isLinkedInRecommendationOpen,
        handleWorkHistoryOpen,
        handleProjectsOpen,
        handleRecommendationsOpen,
    };
}
