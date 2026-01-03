import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { trackCalendlyEvent, trackCalendlyScheduled } from '@/lib/analytics'

interface CalendlyEmbedProps {
  calLink?: string
}

export default function CalendlyEmbed({ calLink }: CalendlyEmbedProps) {
  // Get Cal.com link from env or use provided prop
  // Cal.com format: "username/event-type" (e.g., "your-username/30min")
  const calUsername = import.meta.env.VITE_CAL_USERNAME || 'your-username/consultation'
  const finalCalLink = calLink || calUsername

  useEffect(() => {
    // Initialize Cal.com API for event tracking
    ;(async function () {
      const cal = await getCalApi()

      // Track when booking page is viewed
      trackCalendlyEvent('Profile Page Viewed')

      // Listen for Cal.com events
      cal('on', {
        action: 'bookingSuccessful',
        callback: (e: any) => {
          const eventName = e?.detail?.data?.eventType?.title || 'Consultation Booked'
          trackCalendlyScheduled(eventName)
          trackCalendlyEvent('Event Scheduled', eventName)
        },
      })

      cal('on', {
        action: 'eventTypeSelected',
        callback: () => {
          trackCalendlyEvent('Event Type Viewed')
        },
      })

      cal('on', {
        action: 'linkReady',
        callback: () => {
          trackCalendlyEvent('Calendar Loaded')
        },
      })
    })()
  }, [])

  return (
    <div className="cal-embed-container">
      <Cal
        calLink={finalCalLink}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '700px',
          overflow: 'scroll',
        }}
        config={{
          theme: 'dark',
          brandColor: '#d4af37', // VIV53 gold
        }}
      />
    </div>
  )
}
