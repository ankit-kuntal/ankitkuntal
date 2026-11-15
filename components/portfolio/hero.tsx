"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { SocialLinks } from "@/components/portfolio/SocialLinks"

interface HeroProps {
  links?: any[]
}

export function Hero({ links = [] }: HeroProps) {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="status-dot" />
            OPEN TO MEANINGFUL OPPORTUNITIES
          </div>
          <p className="hero-kicker">FULL-STACK DEVELOPER · INDIA</p>
          <h1>
            I’m Ankit.
            <span> I build things</span>
            <em> for the web.</em>
          </h1>
          <p className="hero-description">
            I turn ideas into thoughtful digital products — combining clean engineering,
            purposeful design, and a little curiosity for what’s next.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="button-quiet" href="#contact">
              Let’s talk <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="hero-socials">
            <SocialLinks links={links} />
            <span className="hero-social-note">Find me around the web</span>
          </div>
        </motion.div>

        <motion.div
          className="orb-stage"
          initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Abstract iridescent 3D orb"
        >
          <div className="orb-label orb-label-top">CREATIVE<br />ENGINEERING</div>
          <motion.div
            className="orb"
            animate={{ y: [0, -13, 0], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.045 }}
          >
            <div className="orb-core" />
            <div className="orb-shine" />
            <div className="orb-rim" />
            <div className="orb-orbit orb-orbit-one" />
            <div className="orb-orbit orb-orbit-two" />
          </motion.div>
          <div className="orb-label orb-label-bottom">DESIGN MINDED<br />DEVELOPMENT</div>
          <div className="orb-caption"><span>01</span> / DIGITAL CRAFT</div>
        </motion.div>
      </div>
      <div className="hero-bottomline">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-bottom-rule" />
        <span>BASED IN INDIA · AVAILABLE WORLDWIDE</span>
      </div>
    </section>
  )
}
