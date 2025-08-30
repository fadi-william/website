"use client"

import { useState, useEffect, useRef } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [activeSection, setActiveSection] = useState("")

  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const handleTabClick = (tab: string) => setActiveTab(tab)

  useEffect(() => {
    const sections = [
      heroRef.current,
      aboutRef.current,
      experienceRef.current,
      skillsRef.current,
      educationRef.current,
      contactRef.current,
    ].filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -70% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header activeSection={activeSection} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} activeTab={activeTab} onTabClick={handleTabClick} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
