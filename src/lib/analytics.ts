import ReactGA from 'react-ga4'

// Analytics IDs from environment variables (with placeholders)
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX'
// Reserved for future Phase 2 analytics activation
// const GTM_CONTAINER_ID = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX'
// const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || 'XXXXXXXXXXXXXX'

// Check if analytics is allowed based on cookie consent
export const isAnalyticsAllowed = (): boolean => {
  const consent = localStorage.getItem('viv53-cookie-consent')
  return consent === 'accepted'
}

// Initialize Google Analytics 4
export const initializeGA4 = (): void => {
  if (!isAnalyticsAllowed()) {
    console.log('Analytics disabled: Cookie consent not accepted')
    return
  }

  try {
    ReactGA.initialize(GA4_MEASUREMENT_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    })
    console.log('Google Analytics 4 initialized')
  } catch (error) {
    console.error('Failed to initialize GA4:', error)
  }
}

// Initialize Google Tag Manager (commented out - enable when GTM ID is provided)
export const initializeGTM = (): void => {
  if (!isAnalyticsAllowed()) {
    return
  }

  // Uncomment when GTM ID is ready:
  /*
  try {
    (function(w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      const f = d.getElementsByTagName(s)[0]
      const j = d.createElement(s) as HTMLScriptElement
      const dl = l !== 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode?.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', GTM_CONTAINER_ID)
    console.log('Google Tag Manager initialized')
  } catch (error) {
    console.error('Failed to initialize GTM:', error)
  }
  */
}

// Initialize Meta Pixel (Facebook) (commented out - enable when Pixel ID is provided)
export const initializeMetaPixel = (): void => {
  if (!isAnalyticsAllowed()) {
    return
  }

  // Uncomment when Meta Pixel ID is ready:
  /*
  try {
    !(function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode?.insertBefore(t, s)
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    )
    ;(window as any).fbq('init', META_PIXEL_ID)
    ;(window as any).fbq('track', 'PageView')
    console.log('Meta Pixel initialized')
  } catch (error) {
    console.error('Failed to initialize Meta Pixel:', error)
  }
  */
}

// Initialize all analytics (call this once on app startup)
export const initializeAnalytics = (): void => {
  initializeGA4()
  // initializeGTM() // Uncomment to enable
  // initializeMetaPixel() // Uncomment to enable
}

// Track page view
export const trackPageView = (path: string): void => {
  if (!isAnalyticsAllowed()) {
    return
  }

  try {
    ReactGA.send({ hitType: 'pageview', page: path })
  } catch (error) {
    console.error('Failed to track page view:', error)
  }
}

// Track custom event
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (!isAnalyticsAllowed()) {
    return
  }

  try {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}

// Convenience functions for common events
export const trackFormSubmit = (formName: string): void => {
  trackEvent('Form', 'Submit', formName)
}

export const trackButtonClick = (buttonName: string, location?: string): void => {
  trackEvent('Button', 'Click', buttonName, location ? 1 : undefined)
}

export const trackServiceView = (serviceName: string): void => {
  trackEvent('Service', 'View', serviceName)
}

export const trackCTAClick = (ctaName: string): void => {
  trackEvent('CTA', 'Click', ctaName)
}

export const trackWhatsAppClick = (): void => {
  trackEvent('Contact', 'WhatsApp Click', 'Floating Button')
}
