import { ArrowUpRight, Target, Wrench, TrendingUp } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImageSlot from '../components/ImageSlot'
import { OsAgentMockup, UpiShieldMockup } from '../components/ProjectMockups'
import { GithubIcon } from '../components/BrandIcons'

/**
 * To show a real screenshot, save it to /public/images using the file name in
 * `image` below (e.g. public/images/os-agent.png). It replaces the mockup
 * automatically. Add real numbers to `outcome` once you have them.
 */
const projects = [
  {
    number: '01',
    category: 'AI • Automation • Software Engineering',
    title: 'AI-Native Autonomous OS Agent',
    subtitle: 'A voice-enabled, multi-agent assistant for Windows.',
    image: '/images/os-agent.png',
    imageAlt: 'Screenshot of the AI-Native Autonomous OS Agent',
    Mockup: OsAgentMockup,
    problem:
      'Everyday desktop workflows — browsing, managing files, operating apps — are repetitive, and an assistant that can only chat can’t actually do the work on your machine.',
    approach: [
      'Architected a multi-agent system with dedicated Browser, File, System and Vision agents that work together to plan and carry out tasks.',
      'Integrated the Gemini API with vision-based interaction so the assistant can understand tasks and verify results on screen.',
      'Built a FastAPI backend with SQLite storage and WebSocket-based communication.',
      'Developed a mobile PWA for remote interaction, backed by a default-deny permission model.',
    ],
    outcome:
      'A working assistant that turns a spoken request into a plan, delegates it to specialised agents and checks the result visually — while keeping every action under the user’s control.',
    technologies: [
      'Python', 'FastAPI', 'WebSockets', 'SQLite', 'Gemini API', 'Windows UI Automation',
    ],
  },
  {
    number: '02',
    category: 'Machine Learning • Fraud Detection • Data Engineering',
    title: 'UPI-Shield',
    subtitle: 'AI-powered UPI fraud detection engine.',
    image: '/images/upi-shield.png',
    imageAlt: 'Screenshot of the UPI-Shield fraud analytics dashboard',
    Mockup: UpiShieldMockup,
    problem:
      'Fraudulent UPI transactions hide among a very large volume of legitimate payments, so detection has to be both fast and selective.',
    approach: [
      'Designed a transaction-processing workflow using Kafka, Flink and PySpark.',
      'Developed a Random Forest classification model to flag suspicious transactions.',
      'Tuned the model’s decision threshold to improve fraud identification.',
      'Built a Streamlit dashboard with Plotly visualisations for risk analytics.',
    ],
    outcome:
      'An end-to-end pipeline that takes a transaction from the stream to a risk score, with a tuned threshold and a dashboard that makes the results easy to explore.',
    technologies: [
      'Python', 'PySpark', 'Apache Kafka', 'Apache Flink', 'Scikit-learn',
      'Random Forest', 'Streamlit', 'Plotly',
    ],
  },
]

function Block({ icon: Icon, label, children }) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
        <Icon size={14} aria-hidden="true" />
        {label}
      </h4>
      {children}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const { Mockup } = project
  const flip = index % 2 === 1

  return (
    <Reveal delay={0.05}>
      <article className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_28px_70px_-32px_rgba(74,222,128,0.5)] lg:grid-cols-[1fr_1.05fr]">
        {/* Preview */}
        <div
          className={`relative flex items-center bg-gradient-to-br from-brand/12 via-transparent to-accent/12 p-5 sm:p-8 ${
            flip ? 'lg:order-2' : ''
          }`}
        >
          <div className="relative w-full">
            <ImageSlot
              src={project.image}
              alt={project.imageAlt}
              fallback={<Mockup />}
              className="aspect-[16/10] rounded-2xl border border-line shadow-xl transition duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl"
            />
            {/* shine sweep on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="absolute -top-3 left-4 rounded-full border border-line bg-bg px-3 py-1 text-[11px] font-bold tracking-wider text-brand backdrop-blur">
              PROJECT / {project.number}
            </span>
          </div>
        </div>

        {/* Story */}
        <div className="p-6 sm:p-9">
          <p className="text-xs font-semibold uppercase leading-6 tracking-wider text-faint">
            {project.category}
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-medium text-muted">{project.subtitle}</p>

          <div className="mt-7 space-y-6">
            <Block icon={Target} label="The problem">
              <p className="text-sm leading-7 text-muted">{project.problem}</p>
            </Block>

            <Block icon={Wrench} label="What I built">
              <ul className="space-y-2.5">
                {project.approach.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-ink/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={TrendingUp} label="The outcome">
              <p className="text-sm leading-7 text-muted">{project.outcome}</p>
            </Block>
          </div>

          <div className="mt-7 border-t border-line pt-5">
            <h4 className="sr-only">Technologies</h4>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line bg-bg/40 px-3 py-1.5 text-xs font-semibold text-muted transition-colors group-hover:text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          aside="Two projects that combine intelligent systems, software engineering and practical problem-solving."
        >
          Projects built to <span className="grad-text">solve problems.</span>
        </SectionHeading>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-muted">
            More work and project repositories can be explored on my GitHub profile.
          </p>
          <a
            href="https://github.com/IamAnushashet"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost shrink-0 !px-5 !py-3 !text-sm"
          >
            <GithubIcon size={17} />
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
