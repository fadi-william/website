import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { cookies, headers } from "next/headers"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Toaster } from "sonner"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fadi William Ghali - Full-Stack Staff Software Engineer",
  description:
    "Professional portfolio of Fadi William Ghali, a Full-Stack Staff Software Engineer with expertise in React, Spring Boot, and cloud architecture.",
}

async function getInitialLanguage() {
  const cookieStore = await cookies()
  const savedLanguage = cookieStore.get("language")?.value
  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage
  }

  const headerStore = await headers()
  const acceptLanguage = headerStore.get("accept-language")?.toLowerCase() ?? ""

  return acceptLanguage.includes("fr") ? "fr" : "en"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialLanguage = await getInitialLanguage()

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
