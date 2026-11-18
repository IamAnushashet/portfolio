import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award, CodeXml } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImageSlot from '../components/ImageSlot'
import { AvatarPlaceholder } from '../components/ProjectMockups'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'MCA, PES University',
    detail: '2025 — 2027',
  },
  {
    icon: Award,
    label: 'Academic Excellence',
    value: '9.58 / 10 CGPA',
    detail: 'MRD Scholarship — 2 times',
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'Bengaluru, India',
    detail: 'Open to opportunities',
  },
]

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Full-Stack Development',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me">
          Turning curiosity into{' '}
          <span className="grad-text">working technology.</span>
        </SectionHeading>

        {/* Portrait + bio */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="group relative mx-auto max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-accent/25 blur-xl transition duration-500 group-hover:opacity-100 sm:opacity-80"
              />
              <ImageSlot
                src="/images/profile.jpg"
                alt="Portrait of Anusha A Shet"
                fallback={<AvatarPlaceholder />}
                className="relative aspect-[4/5] rounded-[1.75rem] border border-line shadow-xl transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-line bg-bg/80 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-bold text-ink">Anusha A Shet</p>
                <p className="text-xs text-muted">MCA · PES University · Bengaluru</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>
                I’m <strong className="font-bold text-ink">Anusha A Shet</strong>,
                an MCA student at PES University, Bengaluru, focused on building
                AI-powered software that solves practical problems.
              </p>
              <p>
                My work spans machine learning, data engineering and full-stack
                development. I like to own an idea end to end — shaping the
                problem, designing the system and shipping something people can
                use — whether that’s a multi-agent desktop assistant or a
                fraud-detection pipeline.
              </p>
              <p>
                I bring analytical thinking, steady learning and hands-on
                building to every project, and I’m always looking for the
                next problem worth solving.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-faint">
                Areas of interest
              </p>
              <ul className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/IamAnushashet"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-4 !py-2.5 !text-sm"
              >
                <GithubIcon size={16} /> GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/anushashet-j2897"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-4 !py-2.5 !text-sm"
              >
                <LinkedinIcon size={16} /> LinkedIn Profile
              </a>
            </div>
          </Reveal>
        </div>

        {/* Highlights + developer card */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/50"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-faint">
                        {item.label}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-ink">{item.value}</h3>
                      <p className="text-sm text-muted">{item.detail}</p>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="h-full overflow-hidden rounded-2xl border border-line bg-bg-soft">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <CodeXml size={16} className="text-brand" />
                  <span className="font-mono text-xs font-medium text-muted">
                    developer.ts
                  </span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
              </div>

              <div className="overflow-x-auto p-5">
                <pre className="font-mono text-[13px] leading-7 sm:text-sm">
                  <code>
                    <span className="text-brand">const</span>
                    <span className="text-ink"> developer </span>
                    <span className="text-faint">= {'{'}</span>
                    {'\n  '}
                    <span className="text-brand-2">name</span>
                    <span className="text-faint">: </span>
                    <span className="text-accent">&quot;Anusha A Shet&quot;</span>
                    <span className="text-faint">,</span>
                    {'\n  '}
                    <span className="text-brand-2">degree</span>
                    <span className="text-faint">: </span>
                    <span className="text-accent">&quot;MCA&quot;</span>
                    <span className="text-faint">,</span>
                    {'\n  '}
                    <span className="text-brand-2">university</span>
                    <span className="text-faint">: </span>
                    <span className="text-accent">&quot;PES University&quot;</span>
                    <span className="text-faint">,</span>
                    {'\n  '}
                    <span className="text-brand-2">interests</span>
                    <span className="text-faint">: [</span>
                    {'\n    '}
                    <span className="text-accent">&quot;AI / ML&quot;</span>
                    <span className="text-faint">,</span>
                    {'\n    '}
                    <span className="text-accent">&quot;Data Science&quot;</span>
                    <span className="text-faint">,</span>
                    {'\n    '}
                    <span className="text-accent">&quot;Development&quot;</span>
                    {'\n  '}
                    <span className="text-faint">],</span>
                    {'\n  '}
                    <span className="text-brand-2">mindset</span>
                    <span className="text-faint">: </span>
                    <span className="text-accent">&quot;Build with purpose&quot;</span>
                    {'\n'}
                    <span className="text-faint">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
