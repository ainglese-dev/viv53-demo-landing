import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import FloatingWhatsApp from '../features/FloatingWhatsApp'
import CookieBanner from '../features/CookieBanner'

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  )
}
