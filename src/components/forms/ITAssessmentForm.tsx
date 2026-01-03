import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { itAssessmentFormSchema, type ITAssessmentFormData } from '@/types/forms'
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
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import { subscribeToBrevo, parseBrevoError } from '@/lib/brevo'
import { trackITAssessmentSubmit } from '@/lib/analytics'
import { logger } from '@/lib/logger'

const companySizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
]

const currentSetups = [
  { value: 'no-it-staff', label: 'No IT staff' },
  { value: '1-it-person', label: '1 IT person' },
  { value: 'small-it-team', label: 'Small IT team (2-5 people)' },
  { value: 'outsourced', label: 'Fully outsourced' },
  { value: 'other', label: 'Other' },
]

export default function ITAssessmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ITAssessmentFormData>({
    resolver: zodResolver(itAssessmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      companySize: '',
      currentSetup: '',
      painPoint: '',
      phone: '',
      captcha: '',
    },
  })

  const captchaValue = watch('captcha')
  const selectedCompanySize = watch('companySize')
  const selectedCurrentSetup = watch('currentSetup')

  const onSubmit = async (data: ITAssessmentFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Submit to Brevo
      const response = await subscribeToBrevo({
        email: data.email,
        fullName: data.fullName,
        company: data.company,
        companySize: data.companySize,
        currentSetup: data.currentSetup,
        painPoint: data.painPoint,
        phone: data.phone,
      })

      if (response.result === 'success') {
        setSubmitStatus('success')
        trackITAssessmentSubmit()
        reset()
        // Auto-dismiss success message after 8 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(parseBrevoError(response.msg))
        setTimeout(() => setSubmitStatus('idle'), 8000)
      }
    } catch (error) {
      logger.error('IT Assessment submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again or contact us directly.')
      setTimeout(() => setSubmitStatus('idle'), 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="assessment-fullName" className="text-viv53-text-primary">
          Full Name <span className="text-viv53-gold">*</span>
        </Label>
        <Input
          id="assessment-fullName"
          {...register('fullName')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="assessment-email" className="text-viv53-text-primary">
          Work Email <span className="text-viv53-gold">*</span>
        </Label>
        <Input
          id="assessment-email"
          type="email"
          {...register('email')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <Label htmlFor="assessment-company" className="text-viv53-text-primary">
          Company Name <span className="text-viv53-gold">*</span>
        </Label>
        <Input
          id="assessment-company"
          {...register('company')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="Acme Corporation"
        />
        {errors.company && (
          <p className="text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      {/* Company Size */}
      <div className="space-y-2">
        <Label htmlFor="assessment-companySize" className="text-viv53-text-primary">
          Company Size <span className="text-viv53-gold">*</span>
        </Label>
        <Select
          value={selectedCompanySize}
          onValueChange={(value) => setValue('companySize', value, { shouldValidate: true })}
        >
          <SelectTrigger className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
            {companySizes.map((size) => (
              <SelectItem
                key={size.value}
                value={size.value}
                className="text-viv53-text-primary hover:bg-viv53-primary-bg hover:text-viv53-gold"
              >
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.companySize && (
          <p className="text-sm text-red-500">{errors.companySize.message}</p>
        )}
      </div>

      {/* Current IT Setup */}
      <div className="space-y-2">
        <Label htmlFor="assessment-currentSetup" className="text-viv53-text-primary">
          Current IT Setup <span className="text-viv53-gold">*</span>
        </Label>
        <Select
          value={selectedCurrentSetup}
          onValueChange={(value) => setValue('currentSetup', value, { shouldValidate: true })}
        >
          <SelectTrigger className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary">
            <SelectValue placeholder="Select current IT setup" />
          </SelectTrigger>
          <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
            {currentSetups.map((setup) => (
              <SelectItem
                key={setup.value}
                value={setup.value}
                className="text-viv53-text-primary hover:bg-viv53-primary-bg hover:text-viv53-gold"
              >
                {setup.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.currentSetup && (
          <p className="text-sm text-red-500">{errors.currentSetup.message}</p>
        )}
      </div>

      {/* Primary Pain Point */}
      <div className="space-y-2">
        <Label htmlFor="assessment-painPoint" className="text-viv53-text-primary">
          What's your biggest IT challenge? <span className="text-viv53-gold">*</span>
        </Label>
        <Textarea
          id="assessment-painPoint"
          {...register('painPoint')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary min-h-[120px]"
          placeholder="Tell us about your current IT challenges, pain points, or areas you'd like to improve..."
        />
        {errors.painPoint && (
          <p className="text-sm text-red-500">{errors.painPoint.message}</p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="assessment-phone" className="text-viv53-text-primary">
          Phone Number <span className="text-viv53-text-muted text-sm">(Optional)</span>
        </Label>
        <Input
          id="assessment-phone"
          type="tel"
          {...register('phone')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="+1 (234) 567-8900"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* CAPTCHA */}
      <SimpleCaptcha
        value={captchaValue}
        onChange={(value) => setValue('captcha', value, { shouldValidate: true })}
        error={errors.captcha?.message}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Get My Free Assessment
          </>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-md text-green-500 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Success! Thank you for your interest.</p>
            <p className="mt-1">
              We'll send your personalized IT assessment within 24 hours. Check your email (including spam folder) for details.
            </p>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-500 text-sm">
          <p className="font-semibold">Error</p>
          <p className="mt-1">{errorMessage || 'Failed to submit. Please try again or contact us directly.'}</p>
        </div>
      )}

      {/* Privacy Note */}
      <p className="text-xs text-viv53-text-muted text-center">
        We respect your privacy. Your information will only be used to provide your IT assessment and occasional updates. You can unsubscribe anytime.
      </p>
    </form>
  )
}
