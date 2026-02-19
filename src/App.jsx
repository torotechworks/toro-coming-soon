import { useState } from "react"
import { motion } from "framer-motion"
import toroLogo from "./assets/toro-logo.png"

export default function App() {
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus("Work email is required")
      return
    }

    setSubmitting(true)
    setStatus("Submitting...")

    try {
      const response = await fetch("https://formspree.io/f/xkovzeev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: companyName,
          email,
          phone,
        }),
      })

      if (response.ok) {
        setStatus("You're on the early access list")
        setCompanyName("")
        setEmail("")
        setPhone("")
      } else {
        setStatus("Something went wrong. Try again.")
      }
    } catch {
      setStatus("Network error. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#021c14] to-[#064E38] text-white overflow-hidden">

      {/* Background radial depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 40%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center mb-12"
          >
            <img
              src={toroLogo}
              alt="Toro Logo"
              className="w-[140px] brightness-0 invert drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Small label */}
          <div className="text-sm tracking-[0.35em] text-white/60">
            TORO TECH
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-5xl font-semibold leading-tight md:text-6xl"
          >
            Toro is Sharpening <br /> its Horns
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 text-xl font-medium text-white/85 md:text-2xl"
          >
            Building the Digital Backbone of Modern Businesses
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-4 text-base leading-relaxed text-white/60 md:text-lg"
          >
            We build custom billing software, ERP systems, mobile apps,
            web platforms, and branding solutions tailored for serious,
            growing businesses.
          </motion.p>

          {/* Services strip */}
          <div className="mt-8 text-xs tracking-[0.25em] text-white/70">
            CUSTOM ERP · BILLING SYSTEMS · MOBILE APPS · WEBSITES · BRANDING
          </div>

          {/* Launch status */}
          <div className="mt-10 text-xs tracking-[0.4em] text-emerald-200/80">
            LAUNCHING SOON
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mx-auto mt-4 max-w-md"
          >
            <div className="flex justify-between text-xs tracking-[0.25em] text-white/70">
              <span>87% COMPLETE</span>
              <span>IN PROGRESS</span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ duration: 1.2 }}
                className="h-full bg-emerald-200/70 rounded-full"
              />
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mx-auto mt-14 w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="grid gap-4">

              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="Company Name"
                className="h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white placeholder:text-white/40 outline-none focus:ring-4 focus:ring-emerald-900/30"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Work Email"
                required
                className="h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white placeholder:text-white/40 outline-none focus:ring-4 focus:ring-emerald-900/30"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                type="tel"
                placeholder="Phone Number"
                className="h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white placeholder:text-white/40 outline-none focus:ring-4 focus:ring-emerald-900/30"
              />

              <button
                type="submit"
                disabled={submitting}
                className="h-12 rounded-xl bg-[#043426] font-medium shadow-[0_20px_60px_rgba(6,78,56,0.5)] transition hover:-translate-y-[2px] hover:shadow-[0_25px_80px_rgba(6,78,56,0.6)]"
              >
                {submitting ? "Submitting..." : "Request Early Access"}
              </button>

              <div className="text-center text-xs text-white/50">
                No spam. Only product updates.
              </div>

              <div className="min-h-[18px] text-center text-sm text-white/60">
                {status}
              </div>
            </div>
          </motion.form>

          {/* Footer tagline */}
          <div className="mt-12 text-sm font-medium tracking-wide text-white/70">
            Custom-built systems for serious businesses
          </div>

        </div>
      </div>
    </div>
  )
}
