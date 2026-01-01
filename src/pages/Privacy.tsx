import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - VIV53 IT Services</title>
        <meta name="description" content="VIV53 IT Services Privacy Policy - How we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.viv53.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-viv53-primary-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-viv53-text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-viv53-text-muted text-sm">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-viv53-text-secondary">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                VIV53 IT Services ("we," "our," or "us") collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Fill out our contact form or request our services</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Contact us via email, phone, or WhatsApp</li>
                <li>Visit our website and interact with our content</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                1.1 Personal Information
              </h3>
              <p className="mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong className="text-viv53-gold">Service Information:</strong> Details about IT services you're interested in</li>
                <li><strong className="text-viv53-gold">Communication Records:</strong> Messages, inquiries, and support requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                1.2 Technical Information
              </h3>
              <p className="mb-3">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Usage Data:</strong> Pages visited, time spent on site, referral sources</li>
                <li><strong className="text-viv53-gold">Device Information:</strong> Browser type, operating system, IP address</li>
                <li><strong className="text-viv53-gold">Cookies:</strong> See our <Link to="/cookies" className="text-viv53-gold hover:text-viv53-gold-hover underline">Cookie Policy</Link> for details</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Provide Services:</strong> Respond to inquiries and deliver IT services</li>
                <li><strong className="text-viv53-gold">Communication:</strong> Send updates, service information, and support</li>
                <li><strong className="text-viv53-gold">Improvement:</strong> Analyze usage to improve our website and services</li>
                <li><strong className="text-viv53-gold">Legal Compliance:</strong> Meet regulatory and legal requirements</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-3">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Service Providers:</strong> Trusted partners who help us operate our business</li>
                <li><strong className="text-viv53-gold">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-viv53-gold">Business Transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                4. Data Security
              </h2>
              <p className="mb-3">We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection practices</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                5. Your Rights
              </h2>
              <p className="mb-3">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Access:</strong> Request copies of your personal data</li>
                <li><strong className="text-viv53-gold">Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong className="text-viv53-gold">Erasure:</strong> Request deletion of your personal data</li>
                <li><strong className="text-viv53-gold">Portability:</strong> Receive your data in a structured format</li>
                <li><strong className="text-viv53-gold">Objection:</strong> Object to processing of your personal data</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                6. Data Retention
              </h2>
              <p className="mb-3">We retain personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Provide the services you requested</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p>Typically, we retain contact information for 3 years after last contact, unless you request earlier deletion.</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                7. International Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                8. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            {/* Section 10 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                10. Contact Us
              </h2>
              <p className="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6 space-y-2">
                <p className="text-viv53-text-primary font-semibold">VIV53 IT Services</p>
                <p>
                  Email: <a href="mailto:privacy@viv53.com" className="text-viv53-gold hover:text-viv53-gold-hover underline">privacy@viv53.com</a>
                </p>
                <p>Phone: +1-234-567-8900</p>
                <p>Address: 123 Tech Plaza, Suite 100, Miami, FL 33101</p>
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
                <Link to="/cookies" className="text-viv53-gold hover:text-viv53-gold-hover underline">
                  Cookie Policy
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
