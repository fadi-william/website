"use client"

import { forwardRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export const About = forwardRef<HTMLElement>(function About(_, ref) {
  const { t } = useLanguage()
  return (
    <section ref={ref} id="about" className="container py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("aboutMe")}</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">{t("aboutText1")}</p>
        <p className="text-lg mb-6">{t("aboutText2")}</p>
        <p className="text-lg">{t("aboutText3")}</p>
      </div>
    </section>
  )
})
