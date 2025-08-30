"use client"

import { forwardRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export const Education = forwardRef<HTMLElement>(function Education(_, ref) {
  const { t } = useLanguage()
  return (
    <section ref={ref} id="education" className="bg-muted py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("education")}</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Polytech Nice Sophia</h3>
              </div>
              <p className="text-lg font-medium">{t("polytechDegree")}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2013 - 2014</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Nice, France</span>
                </div>
              </div>
              <p className="mt-2">{t("polytechDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Université Française d&apos;Égypte</h3>
              </div>
              <p className="text-lg font-medium">{t("ufeDegree")}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2009 - 2014</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              <p className="mt-2">{t("ufeEduDesc")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Collège De La Salle</h3>
              </div>
              <p className="text-lg font-medium">{t("lasalleDegree")}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2009</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:ml-2" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
})
