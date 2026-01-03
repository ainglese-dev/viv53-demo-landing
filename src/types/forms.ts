import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  captcha: z.string().min(1, 'Please complete the CAPTCHA'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  date: z.date({
    required_error: 'Please select a date',
  }),
  time: z.string().min(1, 'Please select a time slot'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  captcha: z.string().min(1, 'Please complete the CAPTCHA'),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>

export const itAssessmentFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  companySize: z.string().min(1, 'Please select your company size'),
  currentSetup: z.string().min(1, 'Please select your current IT setup'),
  painPoint: z.string().min(20, 'Please describe your challenge (minimum 20 characters)'),
  phone: z.string().optional(),
  captcha: z.string().min(1, 'Please complete the CAPTCHA'),
})

export type ITAssessmentFormData = z.infer<typeof itAssessmentFormSchema>
