import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FloatingWhatsApp() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '12345678900'
  const message = encodeURIComponent('Hello! I\'m interested in learning more about your IT services.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </a>
  )
}
