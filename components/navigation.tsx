"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import ApRotatingLogo from "@/components/ApRotatingLogo"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    { label: "Exercises", href: "/exercises" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Policies", href: "/policies" },
    { label: "Timeline", href: "/timeline" },
]

export function Navigation() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Use className in JSX and self-close the img */}
                        {/* Inside your Navigation component */}
                        <Link href="/" className="flex items-center gap-2">
                            <ApRotatingLogo size={40} />
                            <div className="hidden sm:block text-sm text-muted-foreground">
                                Advanced Programming
                            </div>
                        </Link>

                        <div className="hidden sm:block text-sm text-muted-foreground">
                            Advanced Programming
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    size="sm"
                                    className="text-sm"
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle menu"
                            onClick={() => setMobileMenuOpen((v) => !v)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
