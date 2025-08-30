"use client"

import { forwardRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layers, Server } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SkillsProps {
  activeTab: string
  onTabClick: (tab: string) => void
}

export const Skills = forwardRef<HTMLElement, SkillsProps>(function Skills({ activeTab, onTabClick }, ref) {
  const { t } = useLanguage()

  return (
    <section ref={ref} id="skills" className="container py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">{t("skillsAndExpertise")}</h2>
      <div className="max-w-4xl mx-auto">
        <div className="scrollable-tabs-container relative">
          <div className="scrollable-tabs flex overflow-x-auto pb-3 hide-scrollbar">
            <div className="flex flex-nowrap mx-auto">
              <button className={`skills-tab whitespace-nowrap shrink-0 ${activeTab === "frontend" ? "active" : ""}`} onClick={() => onTabClick("frontend")}>
                {t("frontend")}
              </button>
              <button className={`skills-tab whitespace-nowrap shrink-0 ${activeTab === "backend" ? "active" : ""}`} onClick={() => onTabClick("backend")}>
                {t("backend")}
              </button>
              <button className={`skills-tab whitespace-nowrap shrink-0 ${activeTab === "mobile" ? "active" : ""}`} onClick={() => onTabClick("mobile")}>
                {t("mobile")}
              </button>
              <button className={`skills-tab whitespace-nowrap shrink-0 ${activeTab === "cloud" ? "active" : ""}`} onClick={() => onTabClick("cloud")}>
                {t("cloudDevOps")}
              </button>
              <button className={`skills-tab whitespace-nowrap shrink-0 ${activeTab === "languages" ? "active" : ""}`} onClick={() => onTabClick("languages")}>
                {t("languages")}
              </button>
            </div>
          </div>
        </div>

        <div className="skills-content mt-6">
          {activeTab === "frontend" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("frontendTech")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">HTML5</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">CSS3</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">JavaScript ES6</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">TypeScript</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">React</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Angular</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Redux</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Tailwind CSS</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Bootstrap</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">SASS/SCSS</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Webpack</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "backend" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Server className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("backendTech")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Spring Boot</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Node.js</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Express</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">NestJS</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">RESTful APIs</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("databases")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">SQL Server</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">MySQL</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Oracle Database</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">MongoDB</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Cassandra</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Couchbase</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Redis</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Kafka</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("mobileDev")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Native Android (Java)</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Native iOS (Objective-C)</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Native iOS (Swift)</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Flutter</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">React Native</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Mobile UI/UX</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("cloudDevOpsTech")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Microsoft Azure</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">AWS</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Kubernetes</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Docker</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Jenkins</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Azure DevOps</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">CI/CD</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Microservices</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Keycloak</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Azure AD B2C</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">OIDC</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "languages" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("programmingLanguages")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Java</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Kotlin</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">JavaScript</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">TypeScript</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Go</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Python</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">C++</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">C#</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Swift</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">Dart</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t("humanLanguages")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">{t("arabic")}</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">{t("french")}</Badge>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">{t("english")}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})
