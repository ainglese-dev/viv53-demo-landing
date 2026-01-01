import { Helmet } from 'react-helmet-async'

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies - VIV53 IT Services</title>
        <meta name="description" content="Success stories and case studies from our IT service implementations." />
      </Helmet>

      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center p-8">Case Studies</h1>
        <p className="text-center">Case study content will go here</p>
      </div>
    </>
  )
}
