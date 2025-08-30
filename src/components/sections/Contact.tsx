"use client"

import { useRef, forwardRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin as LinkedinIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "nameRequired")
    .min(2, "nameMinLength"),
  email: z
    .string()
    .min(1, "emailRequired")
    .email("emailInvalid"),
  message: z
    .string()
    .min(1, "messageRequired")
    .min(10, "messageMinLength"),
})

type ContactFormData = z.infer<typeof contactSchema>

export const Contact = forwardRef<HTMLElement>(function Contact(_, ref) {
  const { t, language } = useLanguage()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync()
    recaptchaRef.current?.reset()

    if (!recaptchaToken) {
      toast.error(t("messageError"))
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken, language }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(t("messageSent"))
        reset()
      } else {
        toast.error(result.error || t("messageError"))
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error(t("messageError"))
    }
  }

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <section ref={ref} id="contact" className="container py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-12 text-center">{t("getInTouch")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-6">{t("contactInfo")}</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("email")}</p>
                <a href="mailto:fadi.william.ghali@gmail.com" className="font-medium hover:text-primary">
                  fadi.william.ghali@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("location")}</p>
                <p className="font-medium">Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <LinkedinIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com/in/fadi-william/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                  linkedin.com/in/fadi-william
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">{t("sendMessage")}</h3>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("name")}
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                  placeholder={t("yourName")}
                  disabled={isSubmitting}
                  {...register("name")}
                />
                {errors.name && <p className="text-sm text-red-500">{t(errors.name.message!)}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                  placeholder={t("yourEmail")}
                  disabled={isSubmitting}
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-red-500">{t(errors.email.message!)}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-md min-h-[120px] focus:outline-none focus:border-primary"
                  placeholder={t("yourMessage")}
                  disabled={isSubmitting}
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="text-sm text-red-500">{t(errors.message.message!)}</p>}
              </div>
            </div>

            {recaptchaSiteKey && (
              <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={recaptchaSiteKey} />
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("sending") : t("send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
})
