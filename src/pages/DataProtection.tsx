import { Helmet } from 'react-helmet-async'

export default function DataProtection() {
  return (
    <>
      <Helmet>
        <title>Data Protection - VIV53 IT Services</title>
        <meta name="description" content="Data protection and GDPR compliance information." />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Data Protection</h1>
        <p className="text-muted-foreground">Data protection content will be migrated from src-old/data-protection.html</p>
      </div>
    </>
  )
}
