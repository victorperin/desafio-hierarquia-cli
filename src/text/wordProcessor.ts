export const splitPhraseIntoWords = (phrase: string): string[] => 
    phrase.split(/\s+/).filter(Boolean);
