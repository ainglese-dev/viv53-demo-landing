import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<div className="text-center p-8 text-foreground">
            <h1 className="text-4xl font-bold mb-4">VIV53 IT Services</h1>
            <p className="text-xl">React + TypeScript Migration - Phase 1 Complete!</p>
          </div>} />
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App
