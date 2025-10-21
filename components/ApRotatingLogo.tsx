// components/ApRotatingLogo.tsx
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {
    size?: number // px
    src?: string  // ring image (transparent center)
}

export default function ApRotatingLogo({ size = 96, src = "https://cdn.shraif.ir/cdn/main/ap/logo-dark.png" }: Props) {
    const [reduced, setReduced] = useState(false)

    // Respect user's reduced motion preference
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        const onChange = () => setReduced(mq.matches)
        onChange()
        mq.addEventListener?.("change", onChange)
        return () => mq.removeEventListener?.("change", onChange)
    }, [])

    return (
        <div
            className="relative inline-flex items-center justify-center"
            style={{ width: size, height: size }}
            aria-label="AP rotating ring logo"
            role="img"
        >
            {/* Rotating ring layer */}
            <div
                className={`absolute inset-0 ${reduced ? "" : "animate-spin"}`}
                style={{ animationDuration: "12s" }} // slow spin
                aria-hidden="true"
            >
                <Image
                    src={src}
                    alt=""
                    fill
                    sizes={`${size}px`}
                    priority={false}
                    draggable={false}
                />
            </div>

            {/* Static center label */}
            <div className="relative select-none font-semibold tracking-wider"
                 style={{ fontSize: Math.round(size * 0.28) }}>
                AP
            </div>
        </div>
    )
}
