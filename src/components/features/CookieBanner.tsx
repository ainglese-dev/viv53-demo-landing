import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'viv53-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    // Initialize analytics here when Phase 6 is implemented
    console.log('Cookie consent: accepted')
  }

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
    console.log('Cookie consent: rejected')
  }

  const handleClose = () => {
    // Closing without accepting = rejecting
    handleReject()
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-viv53-primary-bg-secondary/95 backdrop-blur-sm border-t border-viv53-border shadow-lg">
      <div className="container mx-auto max-w-viv53">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-viv53-text-primary text-sm md:text-base">
              We use cookies to enhance your experience. By clicking "Accept All", you consent to
              our use of cookies for analytics.{' '}
              <Link
                to="/privacy"
                className="text-viv53-gold hover:text-viv53-gold-hover underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              onClick={handleReject}
              variant="outline"
              className="flex-1 md:flex-none border-viv53-border text-viv53-text-secondary hover:bg-viv53-border hover:text-viv53-text-primary"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold"
            >
              Accept All
            </Button>
            <button
              onClick={handleClose}
              className="text-viv53-text-muted hover:text-viv53-text-primary transition-colors md:ml-2"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
