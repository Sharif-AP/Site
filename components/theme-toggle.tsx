"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(true)
    setTheme(theme === "light" ? "dark" : "light")

    // Create ripple effect
    const ripple = document.createElement("div")
    ripple.className = "theme-ripple"
    document.body.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
      setIsAnimating(false)
    }, 800)
  }

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleToggle} className="h-9 w-9 relative overflow-visible">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
        {isAnimating && <span className="absolute inset-0 rounded-md bg-[#1966ab]/20 animate-ping" />}
      </Button>

      <style jsx global>{`
        @keyframes theme-ripple {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .theme-ripple {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 100vmax;
          height: 100vmax;
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          background: radial-gradient(circle, #1966ab 0%, transparent 70%);
          pointer-events: none;
          z-index: 9999;
          animation: theme-ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  )
}
