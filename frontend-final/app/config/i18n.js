import i18n from "i18n-js";
import * as Localization from "expo-localization"; // If using Expo, otherwise you can skip this line

// Optional: Define some translations if necessary
i18n.translations = {
  en: { welcome: "Hello" },
  // Add more languages here if needed
};

// Set the locale to "en" explicitly to use the Gregorian calendar
i18n.defaultLocale = "en";
//i18n.locale = Localization.locale || "en"; // Fallback to 'en' if locale isn't set
i18n.fallbacks = true;

export default i18n;
