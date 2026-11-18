export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-faint sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Anusha A Shet. All rights reserved.</p>
        <p>Designed and built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
