import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import es from "./es.json";
// import de from "./de.json";

const LANGUAGE_KEY = "appLanguage";

export const setI18nLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
    // try {
    //     localStorage.setItem(LANGUAGE_KEY, language);
    // } catch {
    //     // ignore storage errors (e.g. private mode)
    // }
    // Notify other parts of the app that language changed
    window.dispatchEvent(new CustomEvent("app-language-changed", { detail: language }));
};

const resources = {
    en: { translation: en },
    es: { translation: es },
    // de: { translation: de },
};

const initializeI18n = async () => {
    const savedLanguage =
        typeof window !== "undefined" ? localStorage.getItem(LANGUAGE_KEY) || undefined : undefined;

    await i18n.use(initReactI18next).init({
        resources,
        fallbackLng: "en",
        lng: savedLanguage,
        interpolation: { escapeValue: false },
        returnObjects: true,
    });
};

initializeI18n();

export const addLanguageChangeListener = (cb: (lang: string) => void) => {
    const handler = (e: Event) => cb((e as CustomEvent<string>).detail);
    window.addEventListener("app-language-changed", handler as EventListener);
    return () => window.removeEventListener("app-language-changed", handler as EventListener);
};

export default i18n;