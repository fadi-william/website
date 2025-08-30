"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 h-auto ${language === "en" ? "text-primary bg-primary/10" : ""}`}
      >
        EN
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("fr")}
        className={`px-2 py-1 h-auto ${language === "fr" ? "text-primary bg-primary/10" : ""}`}
      >
        FR
      </Button>
    </div>
  )
}
