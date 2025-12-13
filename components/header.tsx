"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-primary/10">
              <Image src="/world-hotel.png" alt="World Hotel Logo" fill className="object-cover" />
            </div>
            <div className="text-2xl font-bold text-primary">World Hotel</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                Book via WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                Book via WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
