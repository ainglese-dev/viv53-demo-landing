import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-5 h-5 text-viv53-gold" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-viv53-gold"
      />
      <Moon className="w-5 h-5 text-viv53-gold" />
    </div>
  )
}
