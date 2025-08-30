import { readFileSync } from 'fs';
import { join } from 'path';
import Handlebars from 'handlebars';

export interface EmailTemplateData {
  name: string;
  email: string;
  message: string;
}

// Cache compiled templates
const templateCache = new Map<string, HandlebarsTemplateDelegate>();

const getTemplate = (templateName: string): HandlebarsTemplateDelegate => {
  if (templateCache.has(templateName)) {
    return templateCache.get(templateName)!;
  }

  const templatePath = join(process.cwd(), 'src', 'lib', 'email', 'templates', `${templateName}.hbs`);
  const templateSource = readFileSync(templatePath, 'utf-8');
  const compiled = Handlebars.compile(templateSource);

  templateCache.set(templateName, compiled);
  return compiled;
};

export const getConfirmationEmailTemplate = (data: EmailTemplateData, lang: 'en' | 'fr') => {
  const template = getTemplate(`confirmation.${lang}`);
  const html = template(data);

  const subject = lang === 'en'
    ? 'Thank you for contacting me'
    : 'Merci de m\'avoir contacté';

  const text = lang === 'en'
    ? `Hi ${data.name},

Thank you for reaching out! I have received your message and will get back to you as soon as possible.

Your message:
${data.message}

Best regards,
Fadi William Ghali

---
This is an automated confirmation email. Please do not reply to this message.`
    : `Bonjour ${data.name},

Merci de m'avoir contacté ! J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.

Votre message :
${data.message}

Cordialement,
Fadi William Ghali

---
Ceci est un email de confirmation automatique. Veuillez ne pas répondre à ce message.`;

  return { subject, html, text };
};

export const getAdminNotificationTemplate = (data: EmailTemplateData, lang: 'en' | 'fr') => {
  const template = getTemplate(`admin-notification.${lang}`);
  const html = template(data);

  const subject = lang === 'en'
    ? `New Contact Form Submission from ${data.name}`
    : `Nouvelle soumission du formulaire de contact de ${data.name}`;

  const text = lang === 'en'
    ? `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from your portfolio contact form.`
    : `Nouvelle Soumission du Formulaire de Contact

Nom : ${data.name}
Email : ${data.email}

Message :
${data.message}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.`;

  return { subject, html, text };
};
