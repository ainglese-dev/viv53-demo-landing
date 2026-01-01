import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RefreshCw } from 'lucide-react'

interface SimpleCaptchaProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function SimpleCaptcha({ value, onChange, error }: SimpleCaptchaProps) {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)

  const generateQuestion = () => {
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    setNum1(n1)
    setNum2(n2)
    setCorrectAnswer(n1 + n2)
    onChange('') // Reset answer when question changes
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const handleRefresh = () => {
    generateQuestion()
  }

  // Validate the answer
  const isCorrect = value && parseInt(value) === correctAnswer

  return (
    <div className="space-y-2">
      <Label htmlFor="captcha" className="text-viv53-text-primary">
        Security Check <span className="text-viv53-gold">*</span>
      </Label>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="mb-2 p-3 bg-viv53-primary-bg border border-viv53-border rounded flex items-center justify-between">
            <span className="text-viv53-text-primary font-mono text-lg">
              {num1} + {num2} = ?
            </span>
            <button
              type="button"
              onClick={handleRefresh}
              className="text-viv53-gold hover:text-viv53-gold-hover transition-colors"
              aria-label="Refresh question"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <Input
            id="captcha"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your answer"
            className={`bg-viv53-primary-bg border-viv53-border text-viv53-text-primary ${
              error
                ? 'border-red-500 focus-visible:ring-red-500'
                : isCorrect
                ? 'border-green-500 focus-visible:ring-green-500'
                : ''
            }`}
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {isCorrect && !error && (
        <p className="text-sm text-green-500">✓ Correct!</p>
      )}
    </div>
  )
}
