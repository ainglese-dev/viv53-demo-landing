import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingFormSchema, type BookingFormData } from '@/types/forms'
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
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import SimpleCaptcha from './SimpleCaptcha'
import { Loader2, Send, Calendar as CalendarIcon } from 'lucide-react'
import { trackFormSubmit } from '@/lib/analytics'

const services = [
  { value: 'cloud', label: 'Cloud Infrastructure' },
  { value: 'security', label: 'Cybersecurity' },
  { value: 'network', label: 'Network Management' },
  { value: 'support', label: 'IT Support' },
]

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
]

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    control,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      time: '',
      message: '',
      captcha: '',
    },
  })

  const captchaValue = watch('captcha')
  const selectedService = watch('service')
  const selectedDate = watch('date')
  const selectedTime = watch('time')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('service', data.service)
      formData.append('date', format(data.date, 'PPP'))
      formData.append('time', data.time)
      formData.append('message', data.message)

      // Submit to formsubmit.co
      const response = await fetch('https://formsubmit.co/ajax/booking@viv53.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        trackFormSubmit('Booking Form')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="booking-name" className="text-viv53-text-primary">
          Full Name *
        </Label>
        <Input
          id="booking-name"
          {...register('name')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="booking-email" className="text-viv53-text-primary">
          Email Address *
        </Label>
        <Input
          id="booking-email"
          type="email"
          {...register('email')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="booking-service" className="text-viv53-text-primary">
          Service Interested In *
        </Label>
        <Select
          value={selectedService}
          onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
        >
          <SelectTrigger className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
            {services.map((service) => (
              <SelectItem
                key={service.value}
                value={service.value}
                className="text-viv53-text-primary hover:bg-viv53-primary-bg hover:text-viv53-gold"
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

      {/* Date Picker */}
      <div className="space-y-2">
        <Label className="text-viv53-text-primary">
          Preferred Date *
        </Label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <div className="border border-viv53-border rounded-md bg-viv53-primary-bg-secondary p-4">
              <DayPicker
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={{ before: new Date() }}
                className="text-viv53-text-primary"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center text-viv53-gold",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-viv53-gold",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-viv53-text-muted rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-viv53-gold rounded-md",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-viv53-gold-light hover:text-viv53-primary-bg rounded-md",
                  day_selected: "bg-viv53-gold text-viv53-primary-bg hover:bg-viv53-gold-hover",
                  day_today: "bg-viv53-primary-bg text-viv53-gold border border-viv53-gold",
                  day_outside: "text-viv53-text-muted opacity-50",
                  day_disabled: "text-viv53-text-muted opacity-50",
                  day_range_middle: "aria-selected:bg-viv53-gold-light aria-selected:text-viv53-primary-bg",
                  day_hidden: "invisible",
                }}
              />
              {selectedDate && (
                <div className="mt-2 text-sm text-viv53-gold flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Selected: {format(selectedDate, 'PPP')}
                </div>
              )}
            </div>
          )}
        />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Time Slot */}
      <div className="space-y-2">
        <Label htmlFor="booking-time" className="text-viv53-text-primary">
          Preferred Time *
        </Label>
        <Select
          value={selectedTime}
          onValueChange={(value) => setValue('time', value, { shouldValidate: true })}
        >
          <SelectTrigger className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary">
            <SelectValue placeholder="Select a time slot" />
          </SelectTrigger>
          <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
            {timeSlots.map((slot) => (
              <SelectItem
                key={slot}
                value={slot}
                className="text-viv53-text-primary hover:bg-viv53-primary-bg hover:text-viv53-gold"
              >
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.time && (
          <p className="text-sm text-red-500">{errors.time.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="booking-message" className="text-viv53-text-primary">
          Additional Information *
        </Label>
        <Textarea
          id="booking-message"
          {...register('message')}
          className="bg-viv53-primary-bg-secondary border-viv53-border text-viv53-text-primary min-h-[100px]"
          placeholder="Tell us about your IT needs and any specific requirements..."
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

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Schedule Consultation
          </>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-md text-green-500 text-sm">
          Thank you for booking! We'll confirm your consultation appointment via email shortly.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-500 text-sm">
          Failed to submit booking. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}
