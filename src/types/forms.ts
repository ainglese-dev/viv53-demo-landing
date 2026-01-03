import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Invalid email address').max(254, 'Email must not exceed 254 characters'),
  service: z.string().min(1, 'Please select a service').max(50, 'Service name too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message must not exceed 5000 characters'),
  captcha: z.string().min(1, 'Please complete the CAPTCHA').max(10, 'Invalid CAPTCHA'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Invalid email address').max(254, 'Email must not exceed 254 characters'),
  service: z.string().min(1, 'Please select a service').max(50, 'Service name too long'),
  date: z.date({
    required_error: 'Please select a date',
  }),
  time: z.string().min(1, 'Please select a time slot').max(20, 'Time slot too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message must not exceed 5000 characters'),
  captcha: z.string().min(1, 'Please complete the CAPTCHA').max(10, 'Invalid CAPTCHA'),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>

export const itAssessmentFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Invalid email address').max(254, 'Email must not exceed 254 characters'),
  company: z.string().min(2, 'Company name is required').max(200, 'Company name must not exceed 200 characters'),
  companySize: z.string().min(1, 'Please select your company size').max(20, 'Invalid company size'),
  currentSetup: z.string().min(1, 'Please select your current IT setup').max(50, 'Invalid IT setup'),
  painPoint: z.string().min(20, 'Please describe your challenge (minimum 20 characters)').max(10000, 'Description must not exceed 10,000 characters'),
  phone: z.string().max(30, 'Phone number too long').optional(),
  captcha: z.string().min(1, 'Please complete the CAPTCHA').max(10, 'Invalid CAPTCHA'),
})

export type ITAssessmentFormData = z.infer<typeof itAssessmentFormSchema>
