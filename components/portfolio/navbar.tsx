"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Moon, Shield, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#tech" },
  { name: "Work", href: "#projects" },
  { name: "Writing", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="site-header"
    >
      <nav className="site-nav">
        <Link href="/" className="brand-mark" aria-label="Ankit Kuntal home">
          <span className="brand-symbol">a<span>.</span></span>
          <span className="brand-name">ANKIT KUNTAL</span>
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>

        <div className="nav-tools">
          <Link href="/admin" className="admin-link" aria-label="Admin panel">
            <Shield size={16} />
          </Link>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="theme-toggle"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </Button>
          )}
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Let’s talk ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
