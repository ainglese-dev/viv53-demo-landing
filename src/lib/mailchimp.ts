// Mailchimp JSONP integration for static sites
// Uses Mailchimp's /subscribe/post-json endpoint to bypass CORS restrictions

export interface MailchimpSubscribeData {
  email: string
  fullName: string
  company: string
  companySize: string
  currentSetup: string
  painPoint: string
  phone?: string
}

export interface MailchimpResponse {
  result: 'success' | 'error'
  msg: string
}

/**
 * Subscribe a user to Mailchimp audience using JSONP endpoint
 * @param data - User data from IT Assessment form
 * @returns Promise with Mailchimp response
 */
export async function subscribeToMailchimp(
  data: MailchimpSubscribeData
): Promise<MailchimpResponse> {
  const mailchimpUrl = import.meta.env.VITE_MAILCHIMP_SUBSCRIBE_URL

  if (!mailchimpUrl || mailchimpUrl === 'https://YOURLIST.us1.list-manage.com/subscribe/post-json?u=XXXXX&id=XXXXX') {
    console.error('Mailchimp URL not configured')
    return {
      result: 'error',
      msg: 'Mailchimp integration not configured. Please set VITE_MAILCHIMP_SUBSCRIBE_URL in your environment variables.',
    }
  }

  try {
    // Split full name into first and last name
    const nameParts = data.fullName.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || ''

    // Build query parameters for Mailchimp merge fields
    const params = new URLSearchParams({
      EMAIL: data.email,
      FNAME: firstName,
      LNAME: lastName,
      COMPANY: data.company,
      MMERGE6: data.companySize, // Custom merge field for company size
      MMERGE7: data.currentSetup, // Custom merge field for current IT setup
      MMERGE8: data.painPoint, // Custom merge field for pain point
    })

    // Add phone if provided
    if (data.phone) {
      params.append('PHONE', data.phone)
    }

    // Mailchimp JSONP endpoint expects GET request with callback
    const url = `${mailchimpUrl}&${params.toString()}`

    // Use fetch with JSONP approach (no-cors mode)
    await fetch(url, {
      method: 'GET',
      mode: 'no-cors', // JSONP doesn't use CORS
    })

    // With no-cors mode, we can't read the response, so we assume success
    // The form submission will show a success message
    // Mailchimp will send a confirmation email to the user

    return {
      result: 'success',
      msg: 'Thank you for your interest! Please check your email to confirm your subscription.',
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error)
    return {
      result: 'error',
      msg: 'Failed to submit your request. Please try again or contact us directly.',
    }
  }
}

/**
 * Parse Mailchimp error message for user-friendly display
 * @param msg - Raw error message from Mailchimp
 * @returns User-friendly error message
 */
export function parseMailchimpError(msg: string): string {
  // Common Mailchimp error messages
  if (msg.includes('already subscribed')) {
    return 'This email is already subscribed. Please check your inbox for previous communications.'
  }
  if (msg.includes('invalid email')) {
    return 'Please enter a valid email address.'
  }
  if (msg.includes('too many')) {
    return 'Too many subscription attempts. Please try again later.'
  }

  // Return original message if no match
  return msg
}
