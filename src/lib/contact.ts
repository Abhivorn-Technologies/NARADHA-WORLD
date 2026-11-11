import { z } from "zod";

export const industries = ["Real estate", "Education / coaching", "Clinic / healthcare", "Interiors / home services", "Automobile", "Other"] as const;
export const leadVolumes = ["Under 100", "100 – 500", "500 – 3,000", "Over 3,000"] as const;

const indianPhone = /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;

export const contactSchema = z.object({
  name: z.string({ required_error: "Enter your name." }).trim().min(2, "Enter your name.").max(100),
  business: z.string({ required_error: "Enter your business name." }).trim().min(2, "Enter your business name.").max(150),
  email: z.string({ required_error: "Enter a valid email address." }).trim().toLowerCase().email("Enter a valid email address.").max(200),
  phone: z.string({ required_error: "Enter a 10-digit Indian mobile number." }).trim().regex(indianPhone, "Enter a 10-digit Indian mobile number."),
  city: z.string().trim().max(80).optional().default(""),
  industry: z.enum(industries, { errorMap: () => ({ message: "Choose your industry." }) }),
  leads: z.enum(leadVolumes, { errorMap: () => ({ message: "Choose your monthly leads." }) }),
  plan: z.string().max(20).optional().default(""),
  message: z.string().trim().max(2000, "Keep the message under 2,000 characters.").optional().default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree so we can contact you." }) }),
  website: z.string().max(500).optional().default(""), // honeypot: real people leave it empty; checked in the API
});

export type ContactInput = z.input<typeof contactSchema>;
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export function fieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactInput;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
