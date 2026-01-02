import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - VIV53 IT Services</title>
        <meta name="description" content="VIV53 IT Services Cookie Policy - How we use cookies and similar technologies on our website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.viv53.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-viv53-primary-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-viv53-text-primary mb-4">
              Cookie Policy
            </h1>
            <p className="text-viv53-text-muted text-sm">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-viv53-text-secondary">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                2. How We Use Cookies
              </h2>
              <p className="mb-3">VIV53 IT Services uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Essential Functionality:</strong> Enable core website features and navigation</li>
                <li><strong className="text-viv53-gold">Performance:</strong> Analyze website usage and improve user experience</li>
                <li><strong className="text-viv53-gold">Preferences:</strong> Remember your settings and preferences</li>
                <li><strong className="text-viv53-gold">Security:</strong> Protect against malicious activity and maintain security</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                3. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                3.1 Essential Cookies
              </h3>
              <p className="mb-3">These cookies are necessary for the website to function properly and cannot be disabled:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Session Cookies:</strong> Maintain your session and preferences during your visit</li>
                <li><strong className="text-viv53-gold">Security Cookies:</strong> Protect against cross-site request forgery and other security threats</li>
                <li><strong className="text-viv53-gold">Navigation Cookies:</strong> Remember your navigation preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                3.2 Analytics Cookies
              </h3>
              <p className="mb-3">These cookies help us understand how visitors interact with our website:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Google Analytics:</strong> Tracks website usage, page views, and user behavior</li>
                <li><strong className="text-viv53-gold">Performance Monitoring:</strong> Measures website speed and functionality</li>
                <li><strong className="text-viv53-gold">Error Tracking:</strong> Identifies and resolves technical issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                3.3 Functional Cookies
              </h3>
              <p className="mb-3">These cookies enhance your experience by remembering your choices:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Preference Cookies:</strong> Remember language, region, and display settings</li>
                <li><strong className="text-viv53-gold">Form Data:</strong> Temporarily store form information to improve user experience</li>
                <li><strong className="text-viv53-gold">Chat Features:</strong> Enable WhatsApp integration and messaging functionality</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                3.4 Marketing Cookies (If Applicable)
              </h3>
              <p className="mb-3">When enabled, these cookies help us deliver relevant content:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Advertising:</strong> Display relevant ads based on your interests</li>
                <li><strong className="text-viv53-gold">Social Media:</strong> Enable sharing and social media integration</li>
                <li><strong className="text-viv53-gold">Remarketing:</strong> Show relevant content to previous visitors</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="mb-3">Our website may include content from third-party services that set their own cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Google Services:</strong> Analytics, Maps, and Fonts</li>
                <li><strong className="text-viv53-gold">Social Media:</strong> LinkedIn, Instagram, GitHub integration</li>
                <li><strong className="text-viv53-gold">Content Delivery:</strong> Image and asset optimization services</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                5. Cookie Duration
              </h2>
              <p className="mb-3">Cookies may be stored for different periods:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong className="text-viv53-gold">Persistent Cookies:</strong> Remain for a specified period (up to 2 years)</li>
                <li><strong className="text-viv53-gold">Analytics Cookies:</strong> Typically expire after 2 years</li>
                <li><strong className="text-viv53-gold">Preference Cookies:</strong> Stored for 1 year or until changed</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                6. Managing Your Cookie Preferences
              </h2>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                6.1 Browser Settings
              </h3>
              <p className="mb-3">You can control cookies through your browser settings:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
                <li><strong className="text-viv53-gold">Firefox:</strong> Preferences &gt; Privacy & Security &gt; Cookies</li>
                <li><strong className="text-viv53-gold">Safari:</strong> Preferences &gt; Privacy &gt; Cookies and Website Data</li>
                <li><strong className="text-viv53-gold">Edge:</strong> Settings &gt; Site Permissions &gt; Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                6.2 Opt-Out Options
              </h3>
              <p className="mb-3">You can opt out of specific tracking:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-viv53-gold">Google Analytics:</strong>{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-viv53-gold hover:text-viv53-gold-hover underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <strong className="text-viv53-gold">Advertising:</strong>{' '}
                  <a
                    href="http://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-viv53-gold hover:text-viv53-gold-hover underline"
                  >
                    Digital Advertising Alliance
                  </a>
                </li>
                <li>
                  <strong className="text-viv53-gold">Network Advertising:</strong>{' '}
                  <a
                    href="http://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-viv53-gold hover:text-viv53-gold-hover underline"
                  >
                    NAI Opt-out
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                7. Impact of Disabling Cookies
              </h2>
              <p className="mb-3">Disabling cookies may affect your experience:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Some website features may not work properly</li>
                <li>Your preferences may not be remembered</li>
                <li>Contact forms may not function correctly</li>
                <li>Analytics and improvement efforts may be limited</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                8. Mobile Apps and Devices
              </h2>
              <p className="mb-3">Similar technologies may be used in mobile applications:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Device IDs:</strong> Unique identifiers for mobile devices</li>
                <li><strong className="text-viv53-gold">Local Storage:</strong> Information stored locally on your device</li>
                <li><strong className="text-viv53-gold">App Analytics:</strong> Usage tracking within mobile applications</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the "Last updated" date and posting the revised policy on our website.
              </p>
            </section>

            {/* Section 10 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                10. Contact Us
              </h2>
              <p className="mb-4">If you have questions about our use of cookies, please contact us:</p>
              <div className="bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6 space-y-2">
                <p className="text-viv53-text-primary font-semibold">VIV53 IT Services</p>
                <p>
                  Email: <a href="mailto:privacy@viv53.com" className="text-viv53-gold hover:text-viv53-gold-hover underline">privacy@viv53.com</a>
                </p>
                <p>Phone: +1-234-567-8900</p>
                <p>Address: 8811 NW 78th St, Tamarac, FL 33321</p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-viv53-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link to="/">
                <Button className="bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold">
                  Back to Home
                </Button>
              </Link>
              <div className="flex gap-4 text-sm">
                <Link to="/privacy" className="text-viv53-gold hover:text-viv53-gold-hover underline">
                  Privacy Policy
                </Link>
                <span className="text-viv53-border">|</span>
                <Link to="/data-protection" className="text-viv53-gold hover:text-viv53-gold-hover underline">
                  Data Protection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
