import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { initializeAnalytics, trackPageView } from './lib/analytics'

// Layout
import RootLayout from './components/layout/RootLayout'

// Pages
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import DataProtection from './pages/DataProtection'

function App() {
  const location = useLocation()

  // Initialize analytics on mount
  useEffect(() => {
    initializeAnalytics()
  }, [])

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/data-protection" element={<DataProtection />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App
