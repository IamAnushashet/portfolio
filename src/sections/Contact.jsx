import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

const inputClass =
  'w-full rounded-xl border border-line bg-bg/60 px-5 py-4 text-sm text-ink outline-none transition placeholder:text-faint focus:border-brand focus:ring-2 focus:ring-brand/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )

    window.location.href = `mailto:shetanu2002@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-24 pt-8 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative grid gap-12 overflow-hidden rounded-3xl border border-brand/30 bg-surface p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/15 blur-[100px]"
            />

            {/* Contact info */}
            <div className="relative flex flex-col justify-center">
              <p className="eyebrow mb-6">Contact</p>

              <h2 className="max-w-lg text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Let’s build something <span className="grad-text">great</span>{' '}
                together.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted">
                Have a role, a project or an idea in mind? Send me a message —
                I’d love to hear about it and explore how we can build
                something meaningful.
              </p>

              <a
                href="mailto:shetanu2002@gmail.com"
                className="group mt-8 flex w-fit items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/12 text-brand transition group-hover:bg-brand group-hover:text-on-brand">
                  <Mail size={21} />
                </span>
                <span className="text-sm font-semibold text-ink transition group-hover:text-brand sm:text-base">
                  shetanu2002@gmail.com
                </span>
              </a>

              <div className="mt-5 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/12 text-brand">
                  <MapPin size={21} />
                </span>
                <span className="text-sm font-semibold text-ink sm:text-base">
                  Bengaluru, India
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/IamAnushashet"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:-translate-y-1 hover:border-brand hover:text-brand"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href="https://linkedin.com/in/anushashet-j2897"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:-translate-y-1 hover:border-brand hover:text-brand"
                >
                  <LinkedinIcon size={19} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative w-full space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-bold text-muted">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-bold text-muted">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-bold text-muted">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or idea..."
                  rows={6}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button type="submit" className="btn-primary w-full !py-4">
                Send Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-faint">
                Your email app will open with your message ready to send.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
