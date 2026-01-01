import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>VIV53 IT Services - Professional IT Solutions for SMB Companies</title>
        <meta name="description" content="Expert on-premises and cloud services across multiple vendors. Empowering SMB companies with reliable IT infrastructure and support." />
      </Helmet>

      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center p-8">Home Page</h1>
        <p className="text-center">Hero, Services, About, Contact sections will go here</p>
      </div>
    </>
  )
}
