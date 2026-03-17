import { defaultLang } from './i18n';
import { translations } from './translations';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as string;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}

/**
 * Returns path translation function for specific language
 * Translates routes like "about" -> "o-projektu" for Slovenian
 */
export function useTranslatedPath(lang: string) {
    return function translatePath(path: string, l: string = lang) {
        // Split path into segments
        const segments = path.split("/").filter((segment) => segment);

        // Translate each segment individually
        const translatedSegments = segments.map((segment) => {
            // const hasTranslation =
            //     defaultLang !== l &&
            //     routes[l] !== undefined &&
            //     routes[l][segment] !== undefined;
            // return hasTranslation ? routes[l][segment] : segment;
            return segment;
        });

        const translatedPath = "/" + translatedSegments.join("/");

        const showDefaultLang = true;
        return !showDefaultLang && l === defaultLang
            ? translatedPath
            : `/${l}${translatedPath}`;
    };
}
