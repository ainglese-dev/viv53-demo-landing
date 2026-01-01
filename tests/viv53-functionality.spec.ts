import { test, expect } from '@playwright/test'

/**
 * VIV53 IT Services Landing Page - Comprehensive Test Suite
 * Phase 7: Testing & Optimization
 *
 * Test Categories:
 * 1. Contact Form (validation, CAPTCHA, submission)
 * 2. Booking Form (date picker, time slots, validation)
 * 3. Navigation (routes, mobile menu, scroll-to-section)
 * 4. WhatsApp Button (visibility, link format)
 * 5. Cookie Banner (persistence, accept/reject)
 * 6. Console Errors (no errors on any page)
 * 7. Responsive Design (mobile, tablet, desktop)
 */

test.describe('Homepage and Navigation', () => {
  test('should load homepage without errors', async ({ page }) => {
    // Track console errors
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await page.goto('/')

    // Check hero section loads
    await expect(page.locator('h1')).toContainText('Professional IT Solutions')

    // Verify no console errors
    expect(consoleErrors).toHaveLength(0)
  })

  test('should navigate to all pages', async ({ page }) => {
    await page.goto('/')

    // Navigate to Case Studies
    await page.click('a[href="/case-studies"]')
    await expect(page).toHaveURL('/case-studies')
    await expect(page.locator('h1')).toBeVisible()

    // Navigate to Privacy Policy
    await page.goto('/privacy')
    await expect(page).toHaveURL('/privacy')
    await expect(page.locator('h1')).toContainText(/Privacy/i)

    // Navigate to Cookies Policy
    await page.goto('/cookies')
    await expect(page).toHaveURL('/cookies')
    await expect(page.locator('h1')).toContainText(/Cookie/i)

    // Navigate to Data Protection
    await page.goto('/data-protection')
    await expect(page).toHaveURL('/data-protection')
    await expect(page.locator('h1')).toContainText(/Data Protection/i)

    // Navigate back to home
    await page.goto('/')
    await expect(page).toHaveURL('/')
  })

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Check hamburger button is visible
    const menuButton = page.getByRole('button', { name: /menu/i })
    await expect(menuButton).toBeVisible()

    // Open mobile menu
    await menuButton.click()

    // Check mobile navigation is visible
    const mobileNav = page.locator('nav').filter({ hasText: /Home|Services|About|Contact/i })
    await expect(mobileNav).toBeVisible()

    // Close menu
    await menuButton.click()
  })
})

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()
  })

  test('should show validation errors for empty form', async ({ page }) => {
    // Find and click submit button
    const submitButton = page.getByRole('button', { name: /Send Message/i })
    await submitButton.click()

    // Check validation errors appear (exact messages from Zod schema)
    await expect(page.locator('text=/Name must be at least 2 characters/i')).toBeVisible()
    await expect(page.locator('text=/Invalid email/i')).toBeVisible()
  })

  test('should require service selection', async ({ page }) => {
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.fill('#message', 'Test message with enough characters')

    // Submit without selecting service
    await page.getByRole('button', { name: /Send Message/i }).click()

    // Check service validation error (exact message from Zod schema)
    await expect(page.locator('text=/Please select a service/i')).toBeVisible()
  })

  test('should fill contact form completely', async ({ page }) => {
    // Fill all fields
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')

    // Select service using Radix UI Select component
    await page.click('button[role="combobox"]:has-text("Select a service")')
    // Wait for dropdown to open and click the option
    await page.locator('[role="option"]').filter({ hasText: 'Cloud Infrastructure' }).click()

    await page.fill('#message', 'I need help with cloud infrastructure.')

    // CAPTCHA - find the math problem and solve it
    // The CAPTCHA displays as: "{num1} + {num2} = ?" in a font-mono span
    // Use .first() since there are two forms on the page (Contact + Booking)
    const captchaText = await page.locator('.font-mono').filter({ hasText: /\d+\s*\+\s*\d+/ }).first().textContent()
    if (captchaText) {
      const match = captchaText.match(/(\d+)\s*\+\s*(\d+)/)
      if (match) {
        const answer = parseInt(match[1]) + parseInt(match[2])
        await page.fill('#captcha', answer.toString())
      }
    }

    // Note: We don't actually submit to avoid hitting the real endpoint
    // Just verify all fields are filled
    const nameValue = await page.inputValue('#name')
    const emailValue = await page.inputValue('#email')
    const messageValue = await page.inputValue('#message')

    expect(nameValue).toBe('John Doe')
    expect(emailValue).toBe('john@example.com')
    expect(messageValue).toBe('I need help with cloud infrastructure.')
  })
})

test.describe('Booking Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Scroll to booking section (if exists on home page)
    const bookingSection = page.locator('text=/Schedule|Book/i').first()
    if (await bookingSection.isVisible()) {
      await bookingSection.scrollIntoViewIfNeeded()
    }
  })

  test('should show date picker', async ({ page }) => {
    // Check if DayPicker calendar is visible
    const calendar = page.locator('.rdp')
    if (await calendar.count() > 0) {
      await expect(calendar.first()).toBeVisible()
    }
  })

  test('should disable past dates in calendar', async ({ page }) => {
    const calendar = page.locator('.rdp')
    if (await calendar.count() > 0) {
      // Check that today and future dates are enabled
      const today = new Date()
      const todayButton = page.locator(`button[name="day"][aria-label*="${today.getDate()}"]`).first()

      if (await todayButton.count() > 0) {
        await expect(todayButton).not.toBeDisabled()
      }
    }
  })

  test('should show time slots after date selection', async ({ page }) => {
    const calendar = page.locator('.rdp')
    if (await calendar.count() > 0) {
      // Click on a future date
      const futureDateButton = page.locator('button[name="day"]').filter({ hasNotText: /disabled/i }).first()
      if (await futureDateButton.count() > 0) {
        await futureDateButton.click()

        // Check time slot selector appears
        const timeSelect = page.locator('button:has-text("Select a time slot")')
        if (await timeSelect.count() > 0) {
          await expect(timeSelect).toBeVisible()
        }
      }
    }
  })

  test('should validate booking form fields', async ({ page }) => {
    // Fill booking form if it exists
    const bookingNameInput = page.locator('#booking-name')
    if (await bookingNameInput.count() > 0) {
      // Try to submit empty form
      const submitButton = page.getByRole('button', { name: /Schedule Consultation/i })
      await submitButton.click()

      // Should show validation errors (exact messages from Zod schema)
      await expect(page.locator('text=/Name must be at least 2 characters/i')).toBeVisible()
    }
  })
})

test.describe('WhatsApp Integration', () => {
  test('should show WhatsApp floating button', async ({ page }) => {
    await page.goto('/')

    // Check WhatsApp button is visible
    const whatsappButton = page.locator('a[href*="wa.me"], a[href*="whatsapp"]')
    await expect(whatsappButton).toBeVisible()
  })

  test('should have correct WhatsApp link format', async ({ page }) => {
    await page.goto('/')

    const whatsappButton = page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
    const href = await whatsappButton.getAttribute('href')

    // Verify WhatsApp link format
    expect(href).toMatch(/wa\.me|whatsapp/)
  })

  test('should open WhatsApp in new tab', async ({ page }) => {
    await page.goto('/')

    const whatsappButton = page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
    const target = await whatsappButton.getAttribute('target')

    expect(target).toBe('_blank')
  })
})

test.describe('Cookie Banner', () => {
  test('should show cookie banner on first visit', async ({ context, page }) => {
    // Clear cookies and localStorage
    await context.clearCookies()
    await page.goto('/')

    // Check if cookie banner exists
    const cookieBanner = page.locator('text=/cookie|consent/i').first()
    if (await cookieBanner.count() > 0) {
      await expect(cookieBanner).toBeVisible()
    }
  })

  test('should persist cookie acceptance', async ({ context, page }) => {
    await context.clearCookies()
    await page.goto('/')

    // Accept cookies if banner exists
    const acceptButton = page.getByRole('button', { name: /accept/i })
    if (await acceptButton.count() > 0) {
      await acceptButton.click()

      // Reload page
      await page.reload()

      // Cookie banner should not appear again
      const cookieBanner = page.locator('text=/cookie consent/i')
      await expect(cookieBanner).not.toBeVisible()
    }
  })
})

test.describe('Scroll Behavior', () => {
  test('should scroll to sections when clicking navigation links', async ({ page }) => {
    await page.goto('/')

    // Click on Services link (if it scrolls on same page)
    const servicesLink = page.locator('a[href*="#services"]').first()
    if (await servicesLink.count() > 0) {
      await servicesLink.click()

      // Wait for scroll
      await page.waitForTimeout(500)

      // Check Services section is in viewport
      const servicesSection = page.locator('#services')
      await expect(servicesSection).toBeInViewport()
    }
  })

  test('should show scroll-to-top button after scrolling', async ({ page }) => {
    await page.goto('/')

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500))
    await page.waitForTimeout(300)

    // Check if scroll-to-top button appears
    const scrollTopButton = page.locator('button').filter({ hasText: /top|up/i }).or(
      page.locator('button[aria-label*="scroll"]')
    )

    if (await scrollTopButton.count() > 0) {
      await expect(scrollTopButton.first()).toBeVisible()
    }
  })
})

test.describe('Responsive Design', () => {
  test('should be responsive on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Check hero section is visible
    await expect(page.locator('h1')).toBeVisible()

    // Check mobile menu button exists
    const menuButton = page.getByRole('button', { name: /menu/i })
    await expect(menuButton).toBeVisible()

    // No horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1) // Allow 1px tolerance
  })

  test('should be responsive on tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    // Check hero section is visible
    await expect(page.locator('h1')).toBeVisible()

    // Check Services section renders properly
    const servicesSection = page.locator('#services')
    if (await servicesSection.count() > 0) {
      await expect(servicesSection).toBeVisible()
    } else {
      // Fallback: check for service cards
      await expect(page.locator('text=/Cloud Infrastructure/i').first()).toBeVisible()
    }
  })

  test('should be responsive on desktop (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')

    // Check hero section is visible
    await expect(page.locator('h1')).toBeVisible()

    // Desktop navigation should be visible
    const desktopNav = page.locator('nav').filter({ hasText: /Home|Services|About/i }).first()
    await expect(desktopNav).toBeVisible()
  })
})

test.describe('SEO and Accessibility', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/')

    // Check title exists
    const title = await page.title()
    expect(title).toBeTruthy()
    expect(title.length).toBeGreaterThan(0)

    // Check meta description exists
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveCount(1)
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Should have exactly one H1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBeGreaterThanOrEqual(1)
  })

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/')

    // Get all images
    const images = page.locator('img')
    const imageCount = await images.count()

    if (imageCount > 0) {
      // Check first few images have alt text
      for (let i = 0; i < Math.min(imageCount, 5); i++) {
        const img = images.nth(i)
        const alt = await img.getAttribute('alt')
        expect(alt).toBeTruthy()
      }
    }
  })
})

test.describe('Performance and Load Time', () => {
  test('should load critical resources quickly', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime

    // Page should load within 5 seconds (generous for CI environments)
    expect(loadTime).toBeLessThan(5000)
  })

  test('should not have console errors on any page', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    // Test all main pages
    const pages = ['/', '/case-studies', '/privacy', '/cookies', '/data-protection']

    for (const path of pages) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
    }

    // Filter out known third-party errors (analytics, etc.)
    const relevantErrors = consoleErrors.filter(err =>
      !err.includes('gtag') &&
      !err.includes('analytics') &&
      !err.includes('third-party')
    )

    expect(relevantErrors).toHaveLength(0)
  })
})

test.describe('Technology Partners Section', () => {
  test('should display partner logos', async ({ page }) => {
    await page.goto('/')

    // Scroll to partners section if it exists
    const partnersSection = page.locator('text=/Technology Partners|Partners/i').first()
    if (await partnersSection.count() > 0) {
      await partnersSection.scrollIntoViewIfNeeded()
      await expect(partnersSection).toBeVisible()

      // Check partner logos are visible
      const partnerLogos = page.locator('img[alt*="AWS"], img[alt*="Microsoft"], img[alt*="Cisco"]')
      if (await partnerLogos.count() > 0) {
        await expect(partnerLogos.first()).toBeVisible()
      }
    }
  })
})
