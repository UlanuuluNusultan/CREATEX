import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./translete/ru.json";
import ruJson from "./translete/en.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enJson,
            },
            ru: {
                translation: ruJson,
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};

export default i18n;