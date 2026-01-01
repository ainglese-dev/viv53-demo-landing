import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/types/forms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SimpleCaptcha from './SimpleCaptcha'
import { Loader2, Send } from 'lucide-react'
import { trackFormSubmit } from '@/lib/analytics'

const services = [
  { value: 'cloud', label: 'Cloud Infrastructure' },
  { value: 'security', label: 'Cybersecurity' },
  { value: 'network', label: 'Network Management' },
  { value: 'support', label: 'IT Support' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
      captcha: '',
    },
  })

  const captchaValue = watch('captcha')
  const selectedService = watch('service')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission (replace with actual endpoint)
      // Option 1: Submit to formsubmit.co
      // Option 2: Submit to Google Forms
      // Option 3: Submit to your own backend

      // For now, using formsubmit.co format
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('service', data.service)
      formData.append('message', data.message)

      // Replace with your actual form submission endpoint
      const formUrl = import.meta.env.VITE_CONTACT_FORM_URL || 'https://formsubmit.co/ajax/info@viv53.com'
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        trackFormSubmit('Contact Form')
        reset()
        // Show success message for 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-viv53-text-primary">
          Name <span className="text-viv53-gold">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your full name"
          className="bg-viv53-primary-bg border-viv53-border text-viv53-text-primary placeholder:text-viv53-text-muted"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-viv53-text-primary">
          Email <span className="text-viv53-gold">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@company.com"
          className="bg-viv53-primary-bg border-viv53-border text-viv53-text-primary placeholder:text-viv53-text-muted"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-viv53-text-primary">
          Service Interested In <span className="text-viv53-gold">*</span>
        </Label>
        <Select
          value={selectedService}
          onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
        >
          <SelectTrigger className="bg-viv53-primary-bg border-viv53-border text-viv53-text-primary">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
            {services.map((service) => (
              <SelectItem
                key={service.value}
                value={service.value}
                className="text-viv53-text-primary hover:bg-viv53-gold/10 focus:bg-viv53-gold/10"
              >
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-viv53-text-primary">
          Message <span className="text-viv53-gold">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your IT needs..."
          rows={5}
          className="bg-viv53-primary-bg border-viv53-border text-viv53-text-primary placeholder:text-viv53-text-muted resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* CAPTCHA */}
      <SimpleCaptcha
        value={captchaValue}
        onChange={(value) => setValue('captcha', value, { shouldValidate: true })}
        error={errors.captcha?.message}
      />

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500 rounded text-green-500">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded text-red-500">
          ✗ Failed to send message. Please try again or email us directly at info@viv53.com
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
