import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - VIV53 IT Services</title>
        <meta name="description" content="Privacy policy and data protection information." />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Privacy policy content will be migrated from src-old/privacy.html</p>
      </div>
    </>
  )
}
