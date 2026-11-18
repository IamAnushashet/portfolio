import { motion } from 'framer-motion'
import { ArrowRight, CodeXml, GraduationCap, Cpu, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['AI/ML Developer', 'Software Developer', 'Full-Stack Developer']

// Deterministic star field for the card background
const stars = Array.from({ length: 34 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: i % 5 === 0 ? 3 : 2,
  delay: `${(i % 9) * 0.45}s`,
}))

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
})

function StatCard({ icon: Icon, value, label, className = '', delay = '0s' }) {
  return (
    <div
      className={`float-card z-20 flex flex-col items-center gap-1.5 rounded-2xl border border-brand/25 bg-bg/70 px-2 py-3 text-center shadow-xl backdrop-blur-md sm:absolute sm:flex-row sm:gap-3 sm:px-4 sm:py-3.5 sm:text-left ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand sm:h-10 sm:w-10">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-sm font-extrabold leading-tight text-ink sm:text-base">
          {value}
        </span>
        <span className="block text-[11px] leading-tight text-muted sm:text-xs">
          {label}
        </span>
      </span>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
      {/* scene-dark keeps the night scene dark in both themes */}
      <div className="scene-dark relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-brand/25 bg-bg shadow-2xl shadow-black/20">
        {/* ambient glows + stars */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[110px]" />
          <div className="absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[110px]" />
          {stars.map((s, i) => (
            <span
              key={i}
              className="star absolute rounded-full bg-white"
              style={{
                left: s.left,
                top: s.top,
                width: s.size,
                height: s.size,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>

        <div className="relative grid items-center gap-8 px-6 pb-16 pt-12 sm:px-12 sm:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4 lg:px-16 lg:py-20">
          {/* ---------- Copy ---------- */}
          <div className="relative z-10">
            <motion.div
              {...fadeUp(0)}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-bold text-accent">
                Open to opportunities
              </span>
            </motion.div>

            <motion.p {...fadeUp(1)} className="mb-2 text-xl text-muted sm:text-2xl">
              Hi, I’m
            </motion.p>

            {/* Shared element from the intro screen */}
            <motion.h1
              layoutId="anusha-name"
              transition={{ layout: { type: 'spring', stiffness: 65, damping: 18 } }}
              className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl"
            >
              Anusha A <span className="grad-text">Shet</span>
            </motion.h1>

            <motion.p
              {...fadeUp(2)}
              className="mt-5 min-h-[2.2rem] text-2xl font-bold text-ink sm:text-3xl"
            >
              <span className="sr-only">
                AI/ML Developer, Software Developer and Full-Stack Developer
              </span>
              <span aria-hidden="true">
                {typed}
                <span className="caret" />
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(3)}
              className="mt-5 max-w-xl text-base leading-8 text-muted"
            >
              I build intelligent software end to end — from machine-learning
              models and data pipelines to the interfaces people actually use.
              MCA student at PES University, Bengaluru.
            </motion.p>

            <motion.div {...fadeUp(4)} className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={17} />
                Let’s Talk
              </a>
            </motion.div>

            <motion.ul
              {...fadeUp(5)}
              aria-label="Social links"
              className="mt-9 flex items-center gap-3"
            >
              {[
                { label: 'GitHub', href: 'https://github.com/IamAnushashet', icon: GithubIcon, ext: true },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/anushashet-j2897', icon: LinkedinIcon, ext: true },
                { label: 'Email', href: 'mailto:shetanu2002@gmail.com', icon: Mail },
              ].map(({ label, href, icon: Icon, ext }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:-translate-y-1 hover:border-brand hover:text-brand"
                  >
                    <Icon size={19} />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ---------- Scene ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-[676/585]">
              <img
                src="/tech-girl.png"
                width="676"
                height="585"
                alt="Illustration of a girl developer with glasses, in a black hoodie, coding on a laptop"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            {/* Stats: a row on phones, floating cards from sm up */}
            <div className="mt-2 grid grid-cols-3 gap-2 sm:contents">
              <StatCard
                icon={CodeXml}
                value="2+"
                label="Projects"
                className="sm:top-[4%] sm:-right-3"
              />
              <StatCard
                icon={GraduationCap}
                value="MCA"
                label="PES University"
                className="sm:top-[38%] sm:left-3"
                delay="1.2s"
              />
              <StatCard
                icon={Cpu}
                value="AI / ML"
                label="Focus area"
                className="sm:top-[12%] sm:left-3"
                delay="2.4s"
              />
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to the About section"
          className="absolute bottom-5 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-brand/60 pt-2 sm:flex"
        >
          <span className="scroll-dot h-1.5 w-1 rounded-full bg-brand" />
        </a>
      </div>
    </section>
  )
}
