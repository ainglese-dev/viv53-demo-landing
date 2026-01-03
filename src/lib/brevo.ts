// Brevo API integration for email marketing
// Uses Brevo's REST API for contact management

import { logger } from './logger'

export interface BrevoSubscribeData {
  email: string
  fullName: string
  company: string
  companySize: string
  currentSetup: string
  painPoint: string
  phone?: string
}

export interface BrevoResponse {
  result: 'success' | 'error'
  msg: string
}

/**
 * Subscribe a user to Brevo contact list
 * @param data - User data from IT Assessment form
 * @returns Promise with Brevo response
 */
export async function subscribeToBrevo(
  data: BrevoSubscribeData
): Promise<BrevoResponse> {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY

  if (!apiKey || apiKey === 'xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    logger.error('Brevo API key not configured')
    return {
      result: 'error',
      msg: 'Brevo integration not configured. Please set VITE_BREVO_API_KEY in your environment variables.',
    }
  }

  try {
    // Split full name into first and last name
    const [firstName, ...lastNameParts] = data.fullName.trim().split(' ')
    const lastName = lastNameParts.join(' ')

    // Build Brevo contact payload
    const payload = {
      email: data.email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        COMPANY: data.company,
        COMPANY_SIZE: data.companySize,
        CURRENT_IT_SETUP: data.currentSetup,
        PAIN_POINT: data.painPoint,
        SMS: data.phone || '', // Brevo uses SMS field for phone
      },
      listIds: [parseInt(import.meta.env.VITE_BREVO_LIST_ID || '0')],
      updateEnabled: true, // Update contact if already exists
    }

    // Make API request to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    // Handle successful response
    if (response.ok) {
      return {
        result: 'success',
        msg: 'Thank you for your interest! Check your email for confirmation.',
      }
    }

    // Handle error response
    const error = await response.json()
    return {
      result: 'error',
      msg: parseBrevoError(error),
    }
  } catch (error) {
    logger.error('Brevo subscription error:', error)
    return {
      result: 'error',
      msg: 'Failed to submit your request. Please try again or contact us directly.',
    }
  }
}

/**
 * Parse Brevo error response for user-friendly display
 * @param error - Error object from Brevo API
 * @returns User-friendly error message
 */
export function parseBrevoError(error: any): string {
  // Handle duplicate contact
  if (error.code === 'duplicate_parameter') {
    return 'This email is already subscribed. Please check your inbox for previous communications.'
  }

  // Handle invalid email
  if (error.code === 'invalid_parameter') {
    return 'Please enter a valid email address.'
  }

  // Handle invalid email message
  if (error.message && error.message.includes('Invalid email')) {
    return 'Please enter a valid email address.'
  }

  // Return error message or generic fallback
  return error.message || 'Failed to submit. Please try again or contact us directly.'
}
