import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Handle scroll behavior
  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsScrolled(currentScroll > 50)
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const handleSectionClick = (sectionId: string) => {
    if (isHome) {
      // On home page, scroll to section
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On other pages, navigate to home with hash
      navigate(`/#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'About', section: 'about' },
    { label: 'Contact', section: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-viv53-primary-bg/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold text-viv53-gold">VIV53</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button
                  onClick={() => handleSectionClick(link.section)}
                  className="text-viv53-text-secondary hover:text-viv53-gold transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/case-studies"
                className="text-viv53-text-secondary hover:text-viv53-gold transition-colors text-sm font-medium"
              >
                Case Studies
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-viv53-gold" />
            ) : (
              <Menu className="h-6 w-6 text-viv53-gold" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-viv53-primary-bg/98 backdrop-blur-md transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button
                  onClick={() => handleSectionClick(link.section)}
                  className="text-2xl text-viv53-text-secondary hover:text-viv53-gold transition-colors font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/case-studies"
                className="text-2xl text-viv53-text-secondary hover:text-viv53-gold transition-colors font-medium"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
