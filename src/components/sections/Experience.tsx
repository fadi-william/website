"use client"

import { forwardRef } from "react"
import { Building, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export const Experience = forwardRef<HTMLElement>(function Experience(_, ref) {
  const { t } = useLanguage()
  return (
    <section ref={ref} id="experience" className="bg-muted py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("professionalExperience")}</h2>
        <div className="space-y-12">
          {/* Banque Misr */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Banque Misr</h3>
            </div>
            <div className="mb-8">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">{t("staffEngineer")}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 2021 - {t("present")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:ml-2" />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
                <p className="mt-2">{t("staffEngineerDesc")}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">{t("seniorEngineer")}</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>March 2021 - November 2021</span>
                </div>
                <p className="mt-2">{t("seniorEngineerDesc")}</p>
              </div>
            </div>
          </div>

          {/* Elephants Tech */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Elephants Tech</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">{t("elephantsTechRole")}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 2021 - March 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              <p className="mt-2">{t("elephantsTechDesc")}</p>
            </div>
          </div>

          {/* Microsoft */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Microsoft</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">{t("microsoftRole")}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>May 2019 - January 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              <p className="mt-2">{t("microsoftDesc")}</p>
            </div>
          </div>

          {/* French University in Egypt */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Université Française d&apos;Égypte</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">{t("ufeRole")}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 2018 - April 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              <p className="mt-2">{t("ufeDesc")}</p>
            </div>
          </div>

          {/* Levioza */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Levioza</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">{t("leviozaRole")}</h4>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>March 2015 - July 2017</span>
              </div>
              <p className="mt-2">{t("leviozaDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
