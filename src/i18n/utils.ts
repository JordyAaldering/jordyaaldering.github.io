import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

/**
 * Returns path translation function for specific language
 * Translates routes like "about" -> "o-projektu" for Slovenian
 */
export function useTranslatedPath(lang: keyof typeof ui) {
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
