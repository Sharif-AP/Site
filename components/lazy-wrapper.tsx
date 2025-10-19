"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazyWrapperProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function LazyWrapper({ children, className = "", threshold = 0.1 }: LazyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {isVisible ? children : <div className="min-h-[100px]" />}
    </div>
  )
}
