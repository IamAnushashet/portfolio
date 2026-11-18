import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { GraduationCap, Landmark, Sprout } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

// Newest first. Add or edit entries here.
const timeline = [
  {
    period: '2025 — Present',
    title: 'Master of Computer Applications',
    place: 'PES University, Bengaluru',
    description:
      'Currently pursuing my MCA, deepening my foundation in software engineering, data and machine learning while building AI-powered and full-stack projects.',
    badges: ['PGCET Rank 167', '9.58 / 10 CGPA', 'MRD Scholarship — 2 times'],
    icon: GraduationCap,
  },
  {
    period: '2024 — 2025',
    title: 'Apprentice',
    place: 'Canara Bank',
    description:
      'Completed an apprenticeship at Canara Bank, gaining first-hand experience of a professional working environment.',
    badges: [],
    icon: Landmark,
  },
  {
    period: '2021 — 2024',
    title: 'B.Sc. (Hons.) Agriculture',
    place:
      'College of Agriculture, Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences, Shivamogga',
    description:
      'Completed my undergraduate degree in Agriculture before moving into computer applications and technology.',
    badges: ['8.85 / 10 CGPA'],
    icon: Sprout,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 60%'],
  })
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 28 })

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line bg-bg-soft/60 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience & education"
          aside="From agriculture and banking to computer applications — the path that led me to building intelligent software."
        >
          The <span className="grad-text">journey</span> so far
        </SectionHeading>

        <ol ref={ref} className="relative">
          {/* Straight vertical line: faint track + scroll-filled glow */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-4 top-4 w-0.5 -translate-x-1/2 rounded-full bg-line md:left-1/2"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute bottom-4 left-4 top-4 w-0.5 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-brand to-accent shadow-[0_0_14px_var(--brand)] md:left-1/2"
          />

          {timeline.map((item, i) => {
            const Icon = item.icon
            const left = i % 2 === 0
            return (
              <li
                key={item.title}
                className="relative grid grid-cols-[32px_1fr] gap-x-4 pb-12 last:pb-0 md:grid-cols-[1fr_48px_1fr] md:gap-x-0"
              >
                {/* dot on the line */}
                <span className="relative z-10 col-start-1 row-start-1 mt-9 flex h-4 w-4 items-center justify-center justify-self-center rounded-full bg-brand ring-8 ring-brand/20 md:col-start-2">
                  <span className="sr-only">{item.period}</span>
                </span>

                {/* card */}
                <div
                  className={`col-start-2 row-start-1 md:max-w-md ${
                    left
                      ? 'md:col-start-1 md:justify-self-end md:pr-8'
                      : 'md:col-start-3 md:justify-self-start md:pl-8'
                  }`}
                >
                  <Reveal delay={0.05}>
                    <article className="group rounded-3xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_24px_60px_-30px_rgba(74,222,128,0.5)] sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-sm font-medium text-brand">
                          {item.period}
                        </p>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand transition group-hover:bg-brand group-hover:text-on-brand">
                          <Icon size={19} aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-muted">
                        {item.place}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted">
                        {item.description}
                      </p>

                      {item.badges.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {item.badges.map((badge) => (
                            <li
                              key={badge}
                              className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand"
                            >
                              {badge}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
