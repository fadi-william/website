"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface MobileNavProps {
  activeSection: string
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="nav:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors focus:outline-none focus:text-primary"
          aria-label="Toggle menu"
        >
          <AlignJustify className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 pt-16 custom-sheet-content">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <nav className="flex flex-col gap-4 p-6">
          <a
            href="#about"
            className={`text-lg font-medium transition-colors ${
              activeSection === "about" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {t("about")}
          </a>
          <a
            href="#experience"
            className={`text-lg font-medium transition-colors ${
              activeSection === "experience" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {t("experience")}
          </a>
          <a
            href="#skills"
            className={`text-lg font-medium transition-colors ${
              activeSection === "skills" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {t("skills")}
          </a>
          <a
            href="#education"
            className={`text-lg font-medium transition-colors ${
              activeSection === "education" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {t("education")}
          </a>
          <a
            href="#contact"
            className={`text-lg font-medium transition-colors ${
              activeSection === "contact" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
          >
            {t("contact")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
