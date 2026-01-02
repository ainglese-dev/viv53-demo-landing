import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function DataProtection() {
  return (
    <>
      <Helmet>
        <title>Data Protection - VIV53 IT Services</title>
        <meta name="description" content="VIV53 IT Services Data Protection Policy - GDPR compliance and data security measures." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.viv53.com/data-protection" />
      </Helmet>

      <div className="min-h-screen bg-viv53-primary-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-viv53-text-primary mb-4">
              Data Protection Policy
            </h1>
            <p className="text-viv53-text-muted text-sm">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-viv53-text-secondary">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                1. Our Commitment to Data Protection
              </h2>
              <p>
                VIV53 IT Services is committed to protecting your personal data and respecting your privacy rights. This policy explains how we comply with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant regulations.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                2. Data Controller Information
              </h2>
              <div className="bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6 space-y-2">
                <p><strong className="text-viv53-gold">Data Controller:</strong> VIV53 IT Services</p>
                <p><strong className="text-viv53-gold">Address:</strong> 8811 NW 78th St, Tamarac, FL 33321</p>
                <p>
                  <strong className="text-viv53-gold">Email:</strong>{' '}
                  <a href="mailto:dpo@viv53.com" className="text-viv53-gold hover:text-viv53-gold-hover underline">
                    dpo@viv53.com
                  </a>
                </p>
                <p><strong className="text-viv53-gold">Phone:</strong> +1-234-567-8900</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                3. Legal Basis for Processing
              </h2>
              <p className="mb-3">We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Consent:</strong> When you provide explicit consent for specific processing activities</li>
                <li><strong className="text-viv53-gold">Contract:</strong> To perform our contractual obligations or enter into contracts</li>
                <li><strong className="text-viv53-gold">Legitimate Interest:</strong> For our legitimate business interests, balanced against your rights</li>
                <li><strong className="text-viv53-gold">Legal Obligation:</strong> To comply with legal requirements and regulations</li>
                <li><strong className="text-viv53-gold">Vital Interest:</strong> To protect health, safety, or other vital interests</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                4. Data Subject Rights
              </h2>
              <p className="mb-6">Under GDPR and other data protection laws, you have the following rights:</p>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.1 Right of Access
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Request copies of your personal data</li>
                <li>Understand what data we process and why</li>
                <li>Know who we share your data with</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.2 Right to Rectification
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Correct inaccurate personal data</li>
                <li>Complete incomplete personal data</li>
                <li>Update outdated information</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.3 Right to Erasure ("Right to be Forgotten")
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for processing</li>
                <li>Object to unlawful processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.4 Right to Restrict Processing
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Limit how we use your data</li>
                <li>Contest accuracy of data</li>
                <li>Object to processing while we investigate</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.5 Right to Data Portability
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Receive your data in a structured format</li>
                <li>Transfer data to another service provider</li>
                <li>Export data for your own use</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                4.6 Right to Object
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Object to processing for legitimate interests</li>
                <li>Opt out of direct marketing</li>
                <li>Object to automated decision-making</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                5. Data Security Measures
              </h2>
              <p className="mb-6">We implement comprehensive security measures to protect your personal data:</p>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                5.1 Technical Safeguards
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong className="text-viv53-gold">Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                <li><strong className="text-viv53-gold">Access Controls:</strong> Multi-factor authentication and role-based access</li>
                <li><strong className="text-viv53-gold">Firewalls:</strong> Network security and intrusion detection systems</li>
                <li><strong className="text-viv53-gold">Monitoring:</strong> 24/7 security monitoring and logging</li>
              </ul>

              <h3 className="text-xl font-semibold text-viv53-text-primary mb-3">
                5.2 Organizational Safeguards
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Staff Training:</strong> Regular data protection training for all employees</li>
                <li><strong className="text-viv53-gold">Data Minimization:</strong> Collect only necessary data for specified purposes</li>
                <li><strong className="text-viv53-gold">Regular Audits:</strong> Security assessments and compliance reviews</li>
                <li><strong className="text-viv53-gold">Incident Response:</strong> Procedures for handling data breaches</li>
              </ul>
            </section>

            {/* Section 6 - Table */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                6. Data Retention Periods
              </h2>
              <p className="mb-4">We retain personal data for different periods based on the type and purpose:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-viv53-border">
                  <thead>
                    <tr className="bg-viv53-primary-bg-secondary">
                      <th className="border border-viv53-border p-3 text-left text-viv53-gold font-semibold">Data Type</th>
                      <th className="border border-viv53-border p-3 text-left text-viv53-gold font-semibold">Retention Period</th>
                      <th className="border border-viv53-border p-3 text-left text-viv53-gold font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-viv53-border p-3">Contact Inquiries</td>
                      <td className="border border-viv53-border p-3">3 years from last contact</td>
                      <td className="border border-viv53-border p-3">Legitimate interest</td>
                    </tr>
                    <tr className="bg-viv53-primary-bg-secondary/50">
                      <td className="border border-viv53-border p-3">Service Contracts</td>
                      <td className="border border-viv53-border p-3">7 years after contract end</td>
                      <td className="border border-viv53-border p-3">Legal obligation</td>
                    </tr>
                    <tr>
                      <td className="border border-viv53-border p-3">Marketing Data</td>
                      <td className="border border-viv53-border p-3">2 years or until withdrawal</td>
                      <td className="border border-viv53-border p-3">Consent</td>
                    </tr>
                    <tr className="bg-viv53-primary-bg-secondary/50">
                      <td className="border border-viv53-border p-3">Website Analytics</td>
                      <td className="border border-viv53-border p-3">2 years</td>
                      <td className="border border-viv53-border p-3">Legitimate interest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                7. International Data Transfers
              </h2>
              <p className="mb-3">When we transfer personal data outside the European Economic Area (EEA), we ensure adequate protection through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Adequacy Decisions:</strong> Countries recognized by the EU Commission</li>
                <li><strong className="text-viv53-gold">Standard Contractual Clauses:</strong> EU-approved contract terms</li>
                <li><strong className="text-viv53-gold">Binding Corporate Rules:</strong> Internal data protection policies</li>
                <li><strong className="text-viv53-gold">Certification Schemes:</strong> Industry-recognized security standards</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                8. Data Breach Notification
              </h2>
              <p className="mb-3">In the event of a data breach, we will:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Assess the Risk:</strong> Evaluate potential impact on individuals</li>
                <li><strong className="text-viv53-gold">Notify Authorities:</strong> Report to supervisory authorities within 72 hours</li>
                <li><strong className="text-viv53-gold">Inform Individuals:</strong> Notify affected persons without undue delay</li>
                <li><strong className="text-viv53-gold">Mitigate Impact:</strong> Take immediate steps to contain and remedy the breach</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                9. Children's Data Protection
              </h2>
              <p className="mb-3">We take special care to protect children's personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not knowingly collect data from children under 16 without parental consent</li>
                <li>Enhanced security measures for any children's data we may process</li>
                <li>Regular reviews of age verification procedures</li>
                <li>Immediate deletion of improperly collected children's data</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                10. Automated Decision-Making
              </h2>
              <p className="mb-3">We may use automated processing for:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong className="text-viv53-gold">Website Analytics:</strong> Understanding user behavior and preferences</li>
                <li><strong className="text-viv53-gold">Security:</strong> Detecting and preventing fraudulent activity</li>
                <li><strong className="text-viv53-gold">Service Delivery:</strong> Optimizing IT service recommendations</li>
              </ul>
              <p>You have the right to opt out of automated decision-making that significantly affects you.</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                11. Exercising Your Rights
              </h2>
              <p className="mb-3">To exercise any of your data protection rights:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-viv53-gold">Submit a Request:</strong> Contact us using the information below</li>
                <li><strong className="text-viv53-gold">Verify Identity:</strong> We may need to confirm your identity</li>
                <li><strong className="text-viv53-gold">Response Time:</strong> We will respond within 30 days</li>
                <li><strong className="text-viv53-gold">No Cost:</strong> Requests are generally free of charge</li>
              </ol>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                12. Complaints and Supervisory Authority
              </h2>
              <p className="mb-3">If you believe we have not handled your personal data properly, you can:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Contact us directly to resolve the issue</li>
                <li>File a complaint with your local data protection authority</li>
                <li>Seek legal remedies through the courts</li>
              </ul>
              <p>
                <strong className="text-viv53-gold">EU Residents:</strong> You can contact your local supervisory authority or the European Data Protection Board (EDPB).
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                13. Updates to This Policy
              </h2>
              <p className="mb-3">We may update this Data Protection Policy to reflect changes in laws, regulations, or our practices. Significant changes will be communicated through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Website notification and updated "Last updated" date</li>
                <li>Email notification for substantial changes</li>
                <li>Prominent website banner for material modifications</li>
              </ul>
            </section>

            {/* Section 14 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-viv53-text-primary mb-4">
                14. Contact Information
              </h2>
              <p className="mb-4">For questions about data protection or to exercise your rights:</p>
              <div className="bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6 space-y-2">
                <p className="text-viv53-text-primary font-semibold">Data Protection Officer (DPO)</p>
                <p>
                  Email: <a href="mailto:dpo@viv53.com" className="text-viv53-gold hover:text-viv53-gold-hover underline">dpo@viv53.com</a>
                </p>
                <p>Phone: +1-234-567-8900</p>
                <p>Address: 8811 NW 78th St, Tamarac, FL 33321</p>
                <p className="text-viv53-gold font-semibold pt-2">Response Time: We aim to respond within 30 days</p>
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
                <Link to="/cookies" className="text-viv53-gold hover:text-viv53-gold-hover underline">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
