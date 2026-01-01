import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-viv53-gold" />
      <Select
        value={i18n.language}
        onValueChange={handleLanguageChange}
      >
        <SelectTrigger className="w-20 bg-viv53-primary-bg border-viv53-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-viv53-primary-bg-secondary border-viv53-border">
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="es">ES</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
