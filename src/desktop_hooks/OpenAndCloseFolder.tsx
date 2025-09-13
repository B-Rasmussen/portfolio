import { useState } from "react";

export function handleOpenAndCloseFolder() {
    const [isWorkHistoryFolderOpen, setIsWorkHistoryFolderOpen] =
        useState(false);
    const [isProjectsFolderOpen, setIsProjectsFolderOpen] = useState(false);
    const [isLinkedInRecommendationsOpen, setIsLinkedInRecommendationsOpen] =
        useState(false);

    const openWorkHistory = () => {
        setIsWorkHistoryFolderOpen(true);
    };

    const closeWorkHistoryFolder = () => {
        setIsWorkHistoryFolderOpen(false);
    };

    const openPersonalProjects = () => {
        setIsProjectsFolderOpen(true);
    };

    const closePersonalProjectsFolder = () => {
        setIsProjectsFolderOpen(false);
    };

    const openLinkedInRecommendations = () => {
        setIsLinkedInRecommendationsOpen(true);
    };

    const closeLinkedInRecommendations = () => {
        setIsLinkedInRecommendationsOpen(false);
    };

    return {
        isWorkHistoryFolderOpen,
        isProjectsFolderOpen,
        isLinkedInRecommendationsOpen,
        openWorkHistory,
        closeWorkHistoryFolder,
        openPersonalProjects,
        closePersonalProjectsFolder,
        openLinkedInRecommendations,
        closeLinkedInRecommendations,
    };
}
