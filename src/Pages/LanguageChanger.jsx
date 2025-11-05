// LanguageChanger.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your key

// 1️⃣ Google Translate Function
export async function translateText(text, targetLang) {
  if (targetLang === "en") return text;
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, target: targetLang })
    }
  );
  const data = await response.json();
  return data.data.translations[0].translatedText;
}

// 2️⃣ Language Context
const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

// 3️⃣ Language Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [cache, setCache] = useState({}); // Cache for translated texts

  const translate = async (text) => {
    if (language === "en") return text;
    if (cache[language]?.[text]) return cache[language][text]; // return cached translation

    const translated = await translateText(text, language);
    setCache((prev) => ({
      ...prev,
      [language]: { ...(prev[language] || {}), [text]: translated }
    }));
    return translated;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4️⃣ Flag Buttons Component
export const LanguageChanger = () => {
  const { language, setLanguage } = useLanguage();
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "sa", name: "Sanskrit", flag: "🇮🇳" }
  ];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          style={{
            cursor: "pointer",
            border: language === lang.code ? "2px solid #333" : "1px solid #aaa",
            padding: "5px 8px",
            borderRadius: "4px",
            fontSize: "16px"
          }}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

// 5️⃣ TranslatedText Component
export const TranslatedText = ({ children }) => {
  const { language, translate } = useLanguage();
  const [text, setText] = useState(children);

  useEffect(() => {
    let mounted = true;
    async function doTranslate() {
      const t = await translate(children);
      if (mounted) setText(t);
    }
    doTranslate();
    return () => (mounted = false);
  }, [children, language]);

  return <>{text}</>;
};