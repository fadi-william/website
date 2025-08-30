"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  const { t } = useLanguage()
  return (
    <section ref={ref} id="hero" className="container py-12 nav:py-24 lg:py-32 flex flex-col nav:flex-row items-center gap-8">
      <div className="w-full nav:w-1/2 flex flex-col items-center nav:items-start">
        <h1 className="text-4xl nav:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-center nav:text-left">
          Fadi William
        </h1>
        <h2 className="text-xl nav:text-2xl text-muted-foreground mb-6 text-center nav:text-left">{t("title")}</h2>
        <p className="text-muted-foreground mb-8 text-center nav:text-left">{t("intro")}</p>
        <div className="flex flex-wrap justify-center nav:justify-start gap-4">
          <Button asChild>
            <a href="#contact">{t("getInTouch")}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/fadi-william/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/fadi-william" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full nav:w-1/2 flex justify-center nav:justify-end">
        <div className="relative w-64 h-64 nav:w-80 nav:h-80 rounded-full overflow-hidden border-4 border-primary">
          <img src="/fadi-william.jpeg" alt="Fadi William Ghali" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
})
