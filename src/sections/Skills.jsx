import { BrainCircuit, Server, Monitor, Database } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const categories = [
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent, data-driven solutions.',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Scikit-learn'],
  },
  {
    title: 'Backend & Development',
    description: 'Developing APIs and application logic.',
    icon: Server,
    skills: ['Python', 'FastAPI', 'Java', 'REST APIs'],
  },
  {
    title: 'Frontend & Interfaces',
    description: 'Creating responsive user experiences.',
    icon: Monitor,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Streamlit'],
  },
  {
    title: 'Databases & Data Tools',
    description: 'Working with data systems and engineering tools.',
    icon: Database,
    skills: ['SQL', 'SQLite', 'MongoDB', 'Pandas', 'NumPy'],
  },
]

const technologies = [
  'Python', 'Machine Learning', 'React.js', 'SQL', 'FastAPI', 'Deep Learning',
  'PySpark', 'Apache Kafka', 'Apache Flink', 'MongoDB', 'Scikit-learn', 'NLP',
  'Git', 'Java', 'Next.js', 'Streamlit',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-line bg-bg-soft/60 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My expertise"
          aside="The tools I use to take an idea from a first prototype to a working, intelligent application."
        >
          A toolkit for <span className="grad-text">end-to-end builds.</span>
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, i) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={i * 0.08} className="h-full">
                <article className="group h-full rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-2 hover:border-brand/60 hover:shadow-[0_24px_50px_-28px_rgba(74,222,128,0.5)]">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/12 text-brand transition duration-300 group-hover:bg-brand group-hover:text-on-brand">
                    <Icon size={26} />
                  </span>

                  <h3 className="mb-2 text-xl font-bold text-ink">{category.title}</h3>
                  <p className="mb-6 text-sm leading-6 text-muted">
                    {category.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-line bg-bg/40 px-3 py-1.5 text-xs font-semibold text-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Marquee (static + wrapped for reduced-motion users) */}
        <Reveal className="marquee-mask mt-16 overflow-hidden border-y border-line py-6">
          <div className="skills-marquee flex w-max items-center">
            {[...technologies, ...technologies].map((technology, index) => (
              <div
                key={`${technology}-${index}`}
                aria-hidden={index >= technologies.length ? 'true' : undefined}
                className={`flex items-center gap-8 px-6 ${
                  index >= technologies.length ? 'marquee-dup' : ''
                }`}
              >
                <span className="whitespace-nowrap text-lg font-bold text-muted transition-colors hover:text-brand">
                  {technology}
                </span>
                <span aria-hidden="true" className="text-lg text-brand">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
