"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import enTranslations from "@/translations/en.json"
import frTranslations from "@/translations/fr.json"

type Language = "en" | "fr"
type TranslationDictionary = Record<string, string>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage: Language
}

const translations: Record<Language, TranslationDictionary> = {
  en: enTranslations,
  fr: frTranslations,
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.cookie = `language=${language}; path=/; max-age=31536000; samesite=lax`
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
