"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <a href="#" className="flex items-center">
            <span className="text-primary">Fadi William</span>
          </a>
        </div>

        <nav className="hidden nav:flex items-center h-full">
          <a
            href="#about"
            className={`text-sm font-medium transition-colors border-b-[3px] h-full flex items-center px-3 ${
              activeSection === "about"
                ? "text-primary border-primary"
                : "border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {t("about")}
          </a>
          <a
            href="#experience"
            className={`text-sm font-medium transition-colors border-b-[3px] h-full flex items-center px-3 ${
              activeSection === "experience"
                ? "text-primary border-primary"
                : "border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {t("experience")}
          </a>
          <a
            href="#skills"
            className={`text-sm font-medium transition-colors border-b-[3px] h-full flex items-center px-3 ${
              activeSection === "skills"
                ? "text-primary border-primary"
                : "border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {t("skills")}
          </a>
          <a
            href="#education"
            className={`text-sm font-medium transition-colors border-b-[3px] h-full flex items-center px-3 ${
              activeSection === "education"
                ? "text-primary border-primary"
                : "border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {t("education")}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors border-b-[3px] h-full flex items-center px-3 ${
              activeSection === "contact"
                ? "text-primary border-primary"
                : "border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav activeSection={activeSection} />
        </div>
      </div>
    </header>
  )
}


