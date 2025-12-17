import React from 'react'
import { Building } from 'lucide-react' // construction/architecture feel icon

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Brand-inspired icon */}
      <Building className="w-20 h-20 text-blue-700 animate-bounce mb-4" />

      {/* Minimal professional text */}
      <p className="text-gray-800 text-xl font-semibold tracking-wide">
        Bawa Khan Design Studio
      </p>
      <p className="text-gray-500 text-sm mt-1">
        Architectural & Construction Design Services
      </p>
    </div>
  )
}

export default Loader
