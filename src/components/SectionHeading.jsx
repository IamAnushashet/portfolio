import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, children, aside }) {
  return (
    <Reveal className="mb-14">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {children}
        </h2>
        {aside && (
          <p className="max-w-sm text-sm leading-7 text-faint">{aside}</p>
        )}
      </div>
    </Reveal>
  )
}
